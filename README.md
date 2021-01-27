# TDD - Test Drive Development

## Tecnologias utilizadas

- Javascript
- React JS
- Jest 
- Enzyme

## O Que é TDD?

- TDD é o Desenvolvimento Orientado por Testes (Test Driven Development). Isso mesmo desenvolvemos o nosso software baseado em testes que são escritos antes do nosso código de produção. Basicamente o TDD se baseia em pequenos ciclos de repetições, onde para cada funcionalidade do sistema um teste é criado antes. Este novo teste criado inicialmente falha, já que ainda não temos a implementação da funcionalidade em questão e, em seguida, implementamos a funcionalidade para fazer o teste passar.

## Vantagens 

- Código Limpo.
- Segurança ao refatorar o código, ja que ao modificar os arquivos os testes serão feitos novamente e nos retornará um feedback se alguma alteração implicou em outras parte do sistema.
- Segurança na correção de bugs, como estamos testando a aplicação antes mesmo dela ser feita, o TDD lhe dará 100% de certeza que sua aplicação funcionará corretamente.

## Jest

- A Lib mais Famosa para TDD em Javascript

## Enzyme

- Utilizada para testes no frontend em conjunto com o Jest, já que trabalhos com componentes, precisariamos de alguma forma acessa-los. 
## Onde é utilizado?

- TDD é bem mais comum no Backend, grande parte da lógica da aplicação vem do backend, entre elas: regra de negócio, conexão com banco de dados, tratamento de dados, upload de arquivos e etc. Mas isso não quer dizer que não podemos utilizar TDD no lado do Frontend. No frontend com auxlio da lib Enzyme conseguimos acessar os elementos do componente e testar tags, funções, simular eventos de clicks e etc.

## Como Testar?

- Execute yarn install ou npm install na raiz do projeto.
- Execute yarn start ou npm start.
- Abra 2 terminais, 1 para executar o projeto e outro para rodar os testes.
- No terminal de testes, execute o comando npm test. 