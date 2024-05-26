# Teste - Registro de usuários

As principais tecnologias do projeto foram: React, Redux, Material-UI, Vite, Typescript e React Hook Form.

A versão publicada na AWS pode ser acessada no link: https://main.d38eh4bc2o9cnm.amplifyapp.com/

Coloquei o server-json em um app express e publicar em um servidor gratuito, se caso a primeira requisição demorar é por conta disso, demora cerca de 50 segundos

Foi feito a autenticação de usuário é necessário um e-mail existente, podendo usar o e-mail: usuario1@email.com.br e senha: 123445 para acessar o sistema.

### Passos para executar localmente

Obs: é necessário que tenha o node instalado na versão 18.18.0 ou mais recente

Faça o clone do repositório com o seguinte comando "git clone https://github.com/ViniciusDes/challenge-frontend"

Acesse a pasta do projeto "cd challenge-frontend/"

Instale as dependências do projeto com "npm install" ou "yarn install"

E por fim, execute "yarn dev" para iniciar o projeto, acesse http://localhost:3000/ no seu navegador e verá a aplicação

### Itens para ser notados

Foi feito:

- Validação de login
- Validação de usuário sem permissão padrão para cadastrar/editar/deletar
- Validação de e-mail duplicado no cadastro de usuário.
- No input de filtro de usuários, é feito a busca a cada onChange, mas foi adicionado um debounce, para que só seja executado a função quando o usuário "parar" de digitar, se observar na aba network do dev tools, poderá notar a quantidade de caracteres x quantidade de requisições.
- Uso de componente Loading para ser notado "carregamento" quando está aguardando resposta da API/para o usuario.
- Paginação na listagem de usuários
