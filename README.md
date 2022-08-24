<h4 align="center"> 
	🚧 " Desafio API(Filmes Mania API)" 🚀 em construção... 🚧
</h4>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/ThiagoZellMendes/Filmes-API?color=%2304D361">

 
 
  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
   <a href="https://github.com/ThiagoZellMendes/Filmes-API/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/ThiagoZellMendes/Filmes-API?style=social">
  </a>
</p>


## 💻 Sobre o projeto

:book: Filmes Mania é uma API de filmes REST FULL, para visualização de sinopses e capas dos mesmos.

## Principais Features do Projeto:

### User: 

- Criar User
- Editar User
- Deletar User
- Atualizar User
- Listar Users
- Listar User por Email

### Filmes

- Criar Filmes(Apenas User administrador)
- Editar Filmes(Apenas User administrador)
- Deletar Filmes(Apenas User Administrador)
- Atualizar Filmes(Apenas User administrador)
- Listar Filmes com paginação de 10 em 10
- Listar e Ordernar por parâmetro escolhido pelo desenvolvedor;
    
    ```bash
      # Os parâmetros são:
      - Titulo;
      - Média IMDB;
      - Gênero;
      - Ano de Lançamento;
    ```
    
## 🌱  Dados Adcionais:
   - [x] Aqui estão os arquivos do Insomnia e um .Json para popular o banco de dados de filmes [Link][link]

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção e execução do projeto:

- [Nestjs][nestjs]
- [Node.js][nodejs]
- [TypeScript][typescript]
- [VsCode][vscode]
- [TypeORM][typeorm]
- [Swagger][swagger]
- [Docker][Docker]
- [PostgreSQL][postgresql]
- [Insomnia][insomnia]

## 🚀 Como executar o projeto

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js][nodejs]. 
Além disto é bom ter um editor para trabalhar com o código como [VSCode][vscode]

### 🎲 Rodando o App:

```bash
# Clone este repositório
$ git clone https://github.com/ThiagoZellMendes/Filmes-API

# Acesse a pasta do projeto no terminal/cmd
$ cd Filmes-API

# Instale as dependências
$ npm install ou Yarn i

# Execute a aplicação:
$ yarn start: dev

``` 
   
## 😯 Como contribuir para o projeto

1. Faça um **fork** do projeto.
2. Crie uma nova branch com as suas alterações: `git checkout -b my-feature`
3. Salve as alterações e crie uma mensagem de commit contando o que você fez: `git commit -m "feature: My new feature"`
4. Envie as suas alterações: `git push origin my-feature`
> Caso tenha alguma dúvida confira este [guia de como contribuir no GitHub](https://github.com/firstcontributions/first-contributions)


## 📝 Licença

Este projeto esta sobe a licença MIT.

Feito com Muito Carinho por Thiago Mendes 👋🏽 [Entre em contato!](https://www.linkedin.com/in/thiago-mendes-44176249/)

[yarn]: https://yarnpkg.com/
[vscode]: https://code.visualstudio.com/
[license]: https://opensource.org/licenses/MIT
[vceslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
[prettier]: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
[TypeScript]: https://www.typescriptlang.org/pt/
[nestjs]: https://nestjs.com
[nodejs]: https://nodejs.org/en/
[swagger]: https://swagger.io
[Docker]: https://www.docker.com
[postgresql]: https://www.postgresql.org
[insomnia]: https://insomnia.rest/download
[typeorm]: https://typeorm.io
[link]: https://downgit.github.io/#/home?url=https://github.com/ThiagoZellMendes/Filmes-API/tree/master/src/filmes/assets
