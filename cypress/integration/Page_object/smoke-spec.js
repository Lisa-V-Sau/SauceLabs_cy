export const smokeTest = () => {
    cy.visit(Cypress.env('home'))
}