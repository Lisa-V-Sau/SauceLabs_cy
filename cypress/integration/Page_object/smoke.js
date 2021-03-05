import Auth from './auth'

const auth = new Auth

export const smokeTest = () => {
    cy.visit(Cypress.env('home'))
    auth.username().type('standard_user')
    auth.password().type('secret_sauce')
    auth.submitDetails().click()
}