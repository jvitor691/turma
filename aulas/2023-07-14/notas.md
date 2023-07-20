# Notas de Aula - NPM, Pacotes e Módulos Essenciais em Node.js

## NPM e Pacotes

O NPM (Node Package Manager) é um gerenciador de pacotes para Node.js. Ele permite que você instale, gerencie e compartilhe módulos ou bibliotecas de código facilmente em seus projetos Node.js.

### Comandos Básicos do NPM

- `npm init`: Inicia um novo projeto Node.js e cria um arquivo package.json para gerenciar as dependências do projeto. Esse comando é interativo e irá solicitar que você forneça informações sobre o projeto, como nome, versão, descrição, autor, licença etc. Você precisará responder a algumas perguntas para configurar o arquivo package.json.

- `npm init -y`: Inicia um novo projeto Node.js, mas de forma não interativa, utilizando as configurações padrão para todas as perguntas do assistente. Isso cria o arquivo package.json rapidamente, sem a necessidade de inserir informações manualmente.

- `npm install`: Instala as dependências listadas no arquivo package.json. Por exemplo: `npm install nome-do-pacote`.

- `npm install --save nome-do-pacote`: Instala o pacote e adiciona-o ao arquivo package.json como uma dependência do projeto.

- `npm uninstall nome-do-pacote`: Remove um pacote do projeto.

- `npm update`: Atualiza os pacotes instalados para as versões mais recentes, seguindo as restrições definidas no package.json.

### O que são Pacotes?

Pacotes são módulos ou bibliotecas de código desenvolvidos por outras pessoas que você pode usar em seus projetos. Eles são essenciais para economizar tempo e esforço, pois fornecem funcionalidades prontas e testadas.

### Estrutura do Arquivo package.json

O arquivo package.json é usado para listar as informações sobre o projeto e suas dependências. Ele inclui detalhes como nome, versão, scripts personalizados, autor, licença e, mais importante, as dependências necessárias para o projeto.

## Módulos Essenciais

Node.js vem com uma série de módulos internos essenciais que você pode usar sem a necessidade de instalar pacotes externos.

Alguns exemplos de módulos essenciais são:

- `fs` (File System): Permite interagir com o sistema de arquivos do computador.

- `http`: Fornece funcionalidades para criar servidores HTTP.

- `path`: Ajuda a lidar com caminhos de arquivos e diretórios.

- `os` (Operating System): Oferece informações sobre o sistema operacional.


## Importação e Exportação de Módulos

Em Node.js, a importação e exportação de módulos são feitas através das palavras-chave `require` e `module.exports`, respectivamente. Essa funcionalidade permite dividir o código em vários arquivos, tornando o projeto mais organizado e modular.

### Exportando um Módulo

Para exportar um módulo em Node.js, você precisa atribuir o objeto, função ou valor que deseja exportar para a propriedade `exports` do objeto `module`. Por exemplo:

```javascript
// Em um arquivo chamado 'meuModulo.js'
const meuModulo = {};

meuModulo.saudacao = () => {
  console.log('Olá, mundo!');
};

module.exports = meuModulo;

```

## Importando um Módulo

Para importar um módulo exportado em outro arquivo, você pode utilizar a função require. Por exemplo:

```javascript
// Em um arquivo chamado 'app.js'
const meuModulo = require('./meuModulo');

meuModulo.saudacao(); // Isso irá imprimir 'Olá, mundo!'
```
