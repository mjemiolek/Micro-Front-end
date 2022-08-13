describe("My First E2E Test", () => {
    it("Should add an item to the cart", () => {
        cy.visit('http://localhost:3000/');
        cy.get('#showlogin').click();
        cy.get('#loginbtn').click();
        cy.get('#showcart').click();
        cy.get('#clearcart').click();
        cy.get('.bg-red-900').click();
        cy.get('#cart').click();
    })
});