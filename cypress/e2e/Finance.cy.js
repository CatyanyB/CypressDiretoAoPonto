describe("Transações", () => {
  beforeEach(() => {
    cy.visit("https://devfinance-agilizei.netlify.app/");
  });
  it("Cadastrar uma entrada", () => {
    criarTransação("Freela", 300);

    //cy.contains("Nova Transação").click();
    //cy.get('#description').type("Freela");
    //cy.get('#amount').type("250");
    //cy.get('#date').type("2023-03-18"); // yyyy-mm-dd
    //cy.contains('button', 'Salvar').click();

    cy.get("tbody tr td.description").should("have.text", "Freela");
  });

  it("Cadastrar saída de valor", () => {
    criarTransação("Cinema", -45);
    cy.get("tbody tr td.description").should("have.text", "Cinema");
  });

  it("Excluir transação", () => {
    criarTransação("Freela", 300);
    criarTransação("CLT", 2300);

    cy.contains(".description", "Freela")
    .parent()
    .find("img")
    .click();
    cy.get('tbody tr').should("have.length", 1)
  });
});

function criarTransação(descrição, valor) {
  cy.contains("Nova Transação").click();
  cy.get("#description").type(descrição);
  cy.get("#amount").type(valor);
  cy.get("#date").type("2023-03-18"); // yyyy-mm-dd
  cy.contains("button", "Salvar").click();
}
