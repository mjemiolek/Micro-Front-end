describe("My First E2E Test", () => {
  it("Should add an item to the cart", () => {
    cy.visit('http://localhost:3000/');
    cy.get('#showlogin').click();
    cy.get('#loginbtn').click();
    cy.get('#addtocart_1').click();
    cy.get('#addtocart_2').click();
    cy.get('#cart').click();
    cy.get('.bg-green-900').click();

  })
});