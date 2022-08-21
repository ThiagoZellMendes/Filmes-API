//add user tiping in payload
export interface UserPayloadModel {
  sub: string;
  email: string;
  name: string;
  iat?: number;
  exp?: number;
}
