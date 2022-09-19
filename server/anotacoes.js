// Neste projeto, vamos criar uma aplicação desktop e mobile(tanto para ios como para android), escrito em react Native. Criaremos um backend escrito em Node.js, criaremos um front-end escrito em React
// Node.js - resolve o problema de construir aplicações pelo lado do servidor. Criado em 2009. Quando o Chrome surgiu, ele trouxe um novo motor javascript. Podemos pensar no JS como o novo combustível, e o node pegou o motor que o chrome utiliza para entender código javascript e trouxe para o lado servidor. A versão LTS é a versão mais "estável" do node. O gerenciador de pacotes do Node é o npm.

// React é uma biblioteca front-end para criar interfaces de usuário. 

// O BE nos retorna dados em JSON( javascript object Notation) é uma estrutura de dados mais famosa para transitar informações entre o BE e FE, ou BE e Mobile.

// Para iniciar um projeto node, devo rodar npm init dentro da pasta raíz: npm init -y. Com isso ele vai criar um arquivo package.json onde vai ter as definições principais do nosso projeto.

//  o arquivo package.json traz informações mais relacionadas ao nosso projeto

// {
//     "name": "server",              --nome do projeto
//     "version": "1.0.0",        
//     "description": "",  
//     "main": "index.js",            --primeiro arquivo a ser carregada nesse projeto
//     "scripts": {                   --informações das dependências que serão utilizadas nesse projeto. Elas aparecem conforme vc instala, por exemplo foi instalado o npm install express, como um micro framework que facilita a gente escrever coisas comum em aplicações em backend.
//       "test": "echo \"Error: no test specified\" && exit 1"
//     },
//     "keywords": [],
//     "author": "",
//     "license": "ISC"
//   }

// O arquivo packge-lock-json é um arquivo gerado automaticamente, para que o npm tenha uma referencia mais rápida para dependências.

// Começo o projeto criando uma pasta SRC, e dentro criar uma arquivo server.js

// O node.js não entende o typescript nativamente, ele entende só js. 

// Tipagem estática permite declarar qual o formato que a gente espera de cada informação dentro da aplicação.

// Para criar um projeto react: npm create vite@latest

// O Expo é uma ferramento de desenvolvimento mobile, pode ser usado para ver em tempo real no próprio dispositivo celular.

// O Tailwind é uma ferramenta que permite a gente fazer estilizações nos elementos através de classe. Cada classe representa uma estilização, cada classe representa um elemento do css. 

// Deve-se instalar o tailwind em cada projeto, https://tailwindcss.com/docs/installation/using-postcss

// para adicionar ícones, utilizamos a biblioteca phosphoricon.com 

// Quando a gente vai trabalhar com HTTP ou o princípio de desenvolver API no estilo Restful, precisamos utilizar os metodos http na melhor forma:
// Get - operação de leitura;
// Post - criando algo;
// Put - editando;
// Patch - editando uma entidade mais específica
// Delete - remover alguma entidade do nosso back-end

// HTTP code - tipo de resposta que está recebendo. Mais importantes são com início 2 (sucesso), 3(redirecionamento), 4(erro) e 5(erros inesperados).
//https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status

// Dentro do back-end a gente consegue trabalhar nessa comunicação front-end to back-end

// biblioteca de comportamentos front-end radix-ui.com

//react-hok form