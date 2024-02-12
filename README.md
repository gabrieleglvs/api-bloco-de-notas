# Bloco de notas

## Este projeto continua em constante desenvolvimento :construction:

Consiste em uma aplicação Full Stack responsiva com objetivo de gerenciar anotações.

<br>
 <img align="center" src="backend/src/assets/img/tela-inicial-desktop.png" />

<br>

# Tecnologias utilizadas

## Backend

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)

## Frontend
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

## Database
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)

# Como rodar o projeto

### 1º É necessario clonar ou fazer download do repositório.

```bash
#Comando para clonar o repositório

$ git clone https://github.com/gabrieleglvs/api-bloco-de-notas.git
```

### 2º Depois de clonar o repositório, é necessário criar a database 'blocodenotas' no MongoDB e em seguida a collection 'notas'.

### 3º Insira dados dentro da colletion 'notas' com os seguintes campos:

```bash
titulo: "Título da sua nota"
conteudo: "Conteúdo da sua nota"
```

### 4º Dentro da pasta 'backend' terá um arquivo nomeado ".env.example", renomeie para ".env". Dentro do arquivo preencha o campo disponível com a string de conexão ao seu banco.

```bash
DB_CONNECTION_STRING= [String de conexão]
```

### 5º Antes de rodar a aplicação, é necessário instalar o 'node_modules'. Para fazer isso abra o terminal da IDE na pasta 'backend' e digite:

```bash
#Comando para baixar o 'node_modules'

$ npm install
```

### 6º Por fim, (ainda na pasta 'backend') rode o comando abaixo para iniciar a aplicação e abra o arquivo 'index.html' no navegador.

```bash
#Command to start the server.

$ npm run dev
```

<br>
