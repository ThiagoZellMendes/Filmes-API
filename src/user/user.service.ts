import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly repository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const data = this.repository.create({
      ...createUserDto,
      password: await bcrypt.hash(createUserDto.password, 10),
    });

    try {
      await data.save();
      delete data.password;
      return data;
    } catch (error) {
      if (error.code.toString() === '23505') {
        throw new ConflictException('email already exists');
      } else {
        throw new InternalServerErrorException(
          'Error to save user on the dabase: ' + error,
        );
      }
    }
  }

  findByEmail(email: string): Promise<User> {
    const emailUser = this.repository.findOneBy({ email: email });
    return emailUser;
  }

  findAll(): Promise<User[]> {
    return this.repository.find();
  }

  findOneBy(id: string): Promise<User> {
    const user = this.repository.findOneBy({ id: id });
    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.repository.preload({
      id: id,
      ...updateUserDto,
    });
    if (!user) {
      throw new NotFoundException(`User ${id} not found`);
    }
    return this.repository.save(user);
  }

  async remove(id: string) {
    const user = await this.findOneBy(id);
    return this.repository.remove(user);
  }
}
