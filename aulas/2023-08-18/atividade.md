**Atividade: Construção de uma API de Links com Express.js**

**Descrição:**

Nesta atividade, você terá a oportunidade de aplicar seus conhecimentos em Node.js e Express.js para construir uma API que gerencia links. A API permitirá a criação, listagem, atualização e exclusão de links. Para isso, você organizará o projeto em diferentes camadas, seguindo boas práticas de desenvolvimento de software.

**Tarefas:**

1. **Estrutura do Projeto:**
   Organize o projeto em uma estrutura de pastas. Certifique-se de ter as seguintes pastas: `controllers`, `services`, `repositories`, e `routes`. Dentro da pasta `routes`, crie os arquivos `usersRoutes.js` e `linksRoutes.js` para definir as rotas relacionadas a usuários e links, respectivamente.

2. **Controllers:**
   Em cada arquivo de controlador (`usersController.js` e `linksController.js`), implemente a lógica para lidar com as requisições HTTP, chamando os serviços apropriados e preparando as respostas correspondentes.

3. **Services:**
   Nos arquivos de serviço (`usersService.js` e `linksService.js`), implemente a lógica de negócios. Isso inclui interações com os repositórios, validações e manipulações de dados.

4. **Repositories:**
   Nos arquivos de repositório (`usersRepository.js` e `linksRepository.js`), simule o acesso a uma fonte de dados, como um banco de dados ou uma estrutura de dados simulada, para realizar operações CRUD.

5. **Rotas:**
   Defina as rotas nos arquivos de rotas (`usersRoutes.js` e `linksRoutes.js`) e associe-as aos controladores apropriados.

6. **Teste da API:**
   Use ferramentas como o Postman ou o Insomnia para testar as diferentes rotas da sua API. Certifique-se de que você pode criar, listar, atualizar e excluir links.

**Dicas:**

- Divida as responsabilidades do código de acordo com as camadas. As rotas devem apenas lidar com a definição das rotas e a chamada dos controladores.
- Os controladores devem chamar os serviços, que encapsulam a lógica de negócios.
- Os serviços podem interagir com os repositórios, que simulam o acesso aos dados.
- Mantenha o código limpo e organizado, seguindo boas práticas de nomenclatura e formatação.

**Observações:**

Esta atividade é uma oportunidade de aplicar os conceitos aprendidos em sala de aula sobre a arquitetura de camadas, o uso de rotas e o manuseio de solicitações HTTP em projetos Express.js. 
