# Introdução ao Express.js

## 1. O que é o Express.js?

O Express.js é um framework web para Node.js que simplifica o processo de criação de aplicativos web e APIs. Ele é leve, flexível e fornece uma ampla gama de recursos para lidar com rotas, middlewares, gerenciamento de solicitações e respostas, e muito mais. Com o Express.js, você pode criar aplicativos web robustos de forma rápida e eficiente.

## 2. Configuração do ambiente

Antes de começar, verifique se você tem o Node.js instalado em seu sistema. Caso contrário, você pode baixá-lo em https://nodejs.org/.

## 3. Instalação do Express.js

Para criar um novo aplicativo com Express.js, você precisará iniciar um projeto Node.js e instalar o pacote Express. Abra um terminal ou prompt de comando e siga estes passos:

Passo 1: Crie uma pasta para o seu projeto e navegue até ela.
```
mkdir meu-projeto-express
cd meu-projeto-express
```

Passo 2: Inicialize um novo projeto Node.js (criará o arquivo `package.json`).
```
npm init -y
```

Passo 3: Instale o pacote do Express.js no projeto.
```
npm install express
```

## 4. Criando o aplicativo Express

Agora que você tem o Express.js instalado, vamos criar um aplicativo web simples.

Passo 1: Crie um arquivo `app.js` (ou qualquer outro nome que você preferir) e abra-o no editor de código.

Passo 2: Importe o módulo do Express e crie um aplicativo Express.
```javascript
const express = require('express');
const app = express();
```

Passo 3: Defina uma rota básica para a página inicial.
```javascript
app.get('/', (req, res) => {
  res.send('Olá, mundo! Este é o meu primeiro aplicativo Express.');
});
```

## 5. Iniciando o servidor

Para que o aplicativo Express possa atender a solicitações, você precisa iniciar o servidor. Adicione o seguinte código ao final do arquivo `app.js`:

```javascript
const port = 3000;

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
```

## 6. Executando o aplicativo

Para executar o aplicativo, vá para o terminal ou prompt de comando e navegue até a pasta onde você criou o arquivo `app.js`. Em seguida, execute o seguinte comando:

```
node app.js
```

O servidor Express será iniciado e estará ouvindo em `http://localhost:3000`. Acesse esse endereço no navegador e você verá a mensagem "Olá, mundo! Este é o meu primeiro aplicativo Express."


Resumo do código da aula: 

Nesta aula, foi apresentado o uso do módulo Express.js para criar um servidor web em Node.js. O Express.js é um framework web leve e flexível que facilita o desenvolvimento de aplicativos web e APIs. O exemplo de código mostrado cria um servidor que responde a requisições HTTP para as rotas relacionadas aos alunos.

Aqui estão as principais funcionalidades do código:

1. Importação de módulos:
   - O código começa importando os módulos `express` e `fs` (file system) do Node.js. O módulo `express` é usado para criar o servidor e o `fs` para ler e escrever em arquivos.

2. Configuração do servidor:
   - Um servidor é criado chamando `express()`, e o middleware `express.json()` é utilizado para que o servidor possa entender requisições com dados em formato JSON.

3. Dados dos alunos:
   - Uma lista de objetos com nomes de alunos é criada como exemplo de dados.

4. Função `buscaAlunos()`:
   - Essa função lê o conteúdo do arquivo "alunos.json" utilizando `fs.readFileSync()` e, em seguida, converte os dados JSON em um objeto JavaScript utilizando `JSON.parse()`. Os alunos são retornados como resultado da função.

5. Rotas do servidor:
   - O servidor define três rotas principais:

   a) Rota GET `/alunos`: Retorna a lista de alunos usando a função `buscaAlunos()`.

   b) Rota GET `/alunos/:id`: Retorna o aluno correspondente ao ID fornecido como parâmetro de rota. Se o aluno não for encontrado, retorna uma resposta com status 404 indicando que o usuário não foi encontrado.

   c) Rota POST `/alunos`: Adiciona um novo aluno à lista de alunos e salva os dados atualizados no arquivo "alunos.json" usando a função `fs.writeFileSync()`.

6. Inicialização do servidor:
   - O servidor é configurado para escutar na porta 8080. Quando o servidor está pronto para aceitar conexões, exibe uma mensagem no console.
