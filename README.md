## Como Rodar a API do projeto

<ol>
    <li> Clonar este repositório;
    <li> Abrir um terminal na pasta onde foi clonado o repositório;
    <li> Acesse cada uma das pastas com: "cd backend";
    <li> Rodar o comando "yarn" ou "npm install" para instalar as dependências; 
    <li> Criar um banco de dados local do tipo PostgreSQL; 
    <li> Criar um arquivo .env dentro desse repositorio a partir de uma cópia do .env.example, e preencher as chaves com as configurações da sua maquina e do banco de dados. A chave port precisa ter o valor 3000; 
    <li> Em sequida, rodar o comando "yarn typeorm migration:run -d src/data-source.ts" para criar as tabelas e o usuário administrador no banco automaticamente atraves da ferramenta TypeORM.
    <li> E por fim, rodar o comando "yarn dev" pra subir o servidor localmente da API. O servidor vai estar na rota <a>http://localhost:3000</a> e voce verá no terminal a mensagem "Servidor executando" 
    <li> Agora é com o front-end
</ol>

## Como Rodar o Frontend do projeto

<ol>
    <li> Clonar este repositório;
    <li> Abrir outro terminal na pasta onde foi clonado o repositório, sem fechar o terminal anterior rodando a api;
    <li> Acesse cada uma das pastas com: "cd frontend";
    <li> Rodar o comando "yarn" ou "npm install" para instalar as dependências; 
    <li> Rodar o comando "yarn start" ou "npm run dev" para iniciar o servidor. Será aberta automaticamente uma aba no navegador, e nela roda o front end da apliação.
    <li> Com a API rodando e o utilizando o comando acima, estará funcionando com a integração de backend.
</ol>
