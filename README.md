<h1>Cypress Básico - README <h1></h1>
Este repositório contém um exemplo de código utilizando o Cypress Cucumber Preprocessor para realizar testes automatizados de transações em um aplicativo de finanças. 
O Cypress é um framework de teste de interface de usuário e o Cucumber Preprocessor é um plugin que permite escrever cenários de teste em um formato mais legível, utilizando a sintaxe do Gherkin.

<h2>Dependências<h2></h2>

  Para utilizar este código, você precisará ter instalado as seguintes dependências:



* **Node.js** - ambiente de execução JavaScript.

* **Cypress** - framework de teste de interface de usuário.

* **Cypress Cucumber Preprocessor** - plugin para integração do Cucumber com o Cypress.


<h2>Executando os testes<h2></h2>

* Clone este repositório para o seu ambiente local.

* Abra o terminal na pasta do projeto.


* Execute o seguinte comando para instalar as dependências:

  <h4> npm install --yes <h4></h4> 

* Execute o seguinte comando para iniciar os testes:

  <h4>npm test<h4></h4>

<h2>Estrutura do projeto<h2></h2>
  
O projeto está organizado da seguinte forma:

**cypress/e2e:** Contém os arquivos de teste escritos em formato Cucumber.

**cypress/support:** Contém arquivos de suporte para configuração do Cypress.

**cypress/fixtures:** Contém arquivos de dados de teste para utilizar nos cenários.

<h2>Descrição dos cenários de teste<h2></h2>
  
<h4>1. Cadastrar uma entrada<h4></h4>
Este cenário realiza o teste de cadastrar uma entrada financeira no aplicativo de finanças. 
  Para isso, o teste utiliza a função: <h4>criarTransação<h4></h4> para preencher os campos necessários: 
  <h4>(descrição, valor e data)<h4></h4>
  e clicar no botão 
  <h4>"Salvar"<h4></h4>
    
Em seguida, verifica se a entrada cadastrada é exibida corretamente na tabela de transações.

<h4>2. Cadastrar saída de valor<h4></h4>
  
Este cenário realiza o teste de cadastrar uma saída de valor no aplicativo de finanças. Utiliza a função <h4>criarTransação<h4></h4> para preencher os campos necessários e clicar no botão <h4>"Salvar"<h4></h4>
Em seguida, verifica se a saída cadastrada é exibida corretamente na tabela de transações.

<h4>3. Excluir transação<h4></h4>
Este cenário realiza o teste de exclusão de uma transação no aplicativo de finanças. Primeiro, utiliza a função <h4>criarTransação<h4></h4> para cadastrar duas transações. 
 
  Em seguida, localiza a transação desejada na tabela, clica no ícone de exclusão e verifica se a tabela agora contém apenas uma transação.

<h2>Licença:<h2></h2>
  
<h3>Este projeto está licenciado sob a MIT License.<h3></h3>
