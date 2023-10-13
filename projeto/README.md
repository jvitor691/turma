# Projeto Final - "Meus Links"

## Descrição do Projeto

O projeto final, intitulado "Meus Links," é uma aplicação web de gerenciamento de links pessoais que permitirá aos usuários criar, editar, excluir e visualizar links personalizados. Este projeto abrange tanto o desenvolvimento do frontend quanto do backend e utiliza as seguintes tecnologias:

- Frontend: React
- Backend: Node.js, Express, PostgreSQL

## Objetivos

O objetivo principal deste projeto é proporcionar aos alunos a oportunidade de aplicar os conhecimentos adquiridos em Full Stack Web Development para criar uma aplicação completa e funcional. Os objetivos específicos incluem:

1. Desenvolver a parte frontend da aplicação usando React.
2. Implementar o backend usando Node.js, Express e PostgreSQL.
3. Criar um sistema de autenticação de usuário.
4. Habilitar os usuários a gerenciar seus links personalizados.
5. Consumir uma API para interagir com os dados de usuário e links.
6. Praticar boas práticas de desenvolvimento, como organização de código, gerenciamento de dependências e testes.

## Requisitos Funcionais

1. Cadastro de Usuário
    - Os usuários devem poder criar uma conta fornecendo um nome de usuário, email e senha.
    - Os dados de nome de usuário, email e senha devem ser válidos e atender aos critérios de validação.
    - Após o cadastro, os usuários devem poder fazer login no sistema.

2. Login de Usuário
    - Os usuários devem poder fazer login no sistema usando suas credenciais de nome de usuário e senha.
    - As credenciais de login devem ser autenticadas e verificadas pela API.
    - Após o login bem-sucedido, os usuários devem ser redirecionados para a página principal da aplicação.

3. Adicionar Link
    - Os usuários devem poder adicionar um novo link personalizado fornecendo um título descritivo, URL.
    - Todos os campos obrigatórios devem ser preenchidos para adicionar o link.

4. Editar Link
    - Os usuários devem poder editar um link existente, modificando o título, URL.
    - A edição de um link deve ser permitida apenas pelo proprietário do link.
    - Os usuários devem poder salvar as alterações feitas no link.

5. Apagar Link
    - Os usuários devem poder apagar um link existente.
    - A exclusão de um link deve ser permitida apenas pelo proprietário do link.
    - Ao apagar o link, ele deve ser removido da lista de links do usuário.

6. Desativar Link
    - Os usuários devem poder desativar um link existente.
    - A destivação de um link deve ser permitida apenas pelo proprietário do link.
    - Ao desativar o link, ele deve ser removido apenas da pagina de links do usuário.

7. Página do Usuário
    - Ao acessar uma rota como.
    - A página de detalhes deve mostrar a bio do usuário e a lista de links personalizados associados a ele.


## Requisitos do Projeto


### Frontend

- Criar páginas para registro e login de usuário.
- Implementar a funcionalidade de adicionar, editar e excluir links.
- Exibir uma lista de links do usuário logado.
- Exibir uma lista de todos os usuários cadastrados e permitir a visualização dos detalhes de cada usuário.
- Usar React Router Dom para gerenciar as rotas da aplicação.
- Consumir a API fornecida para acesso aos dados de usuário e links.

### Backend

- Configurar o servidor Node.js com Express.
- Criar rotas para registro, login e gerenciamento de links.
- Implementar autenticação de usuário usando tokens JWT.
- Conectar-se a um banco de dados PostgreSQL.
- Validar dados de entrada e implementar autorização para ações do usuário.

#### Definições de Rotas do Backend

- `POST /usuarios`: Rota para registrar um novo usuário.
- `POST /usuarios/login`: Rota para autenticar um usuário e gerar um token JWT.
- `GET /usuarios`: Rota para listar todos os usuários cadastrados.
- `GET /usuarios/:id`: Rota para obter os detalhes de um usuário específico.
- `POST /links`: Rota para adicionar um novo link para o usuário autenticado.
- `PUT /links/:id`: Rota para atualizar um link existente do usuário autenticado.
- `DELETE /links/:id`: Rota para excluir um link existente do usuário autenticado.
 
## Recursos Úteis

Aqui estão alguns recursos que podem ser úteis durante o desenvolvimento do projeto:

- Documentação oficial do React: [https://react.dev/](https://react.dev/)
- Documentação oficial do Axios: [https://axios-http.com/docs/intro](https://axios-http.com/docs/intro)
- Documentação oficial do React Router Dom: [https://v5.reactrouter.com/web/guides/quick-start](https://v5.reactrouter.com/web/guides/quick-start)
- Documentação do Express.js: [https://expressjs.com/](https://expressjs.com/)
- Documentação do PostgreSQL: [https://www.postgresql.org/docs/](https://www.postgresql.org/docs/)

## Entrega do Projeto

- A entrega do projeto deve ser feita até **[data de entrega]**.
- Crie um repositório Git compartilhado para o projeto e compartilhe-o com o professor.
- Certifique-se de incluir um arquivo README.md no repositório com instruções de como executar a aplicação localmente.
