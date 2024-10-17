// This is the third test within this package - it selects the items and checks it against the checkout price to ensure that the price is correct upon payment

/// <reference types ="Cypress"/>

//this is a test for viewport: mobile mode
describe('Viewport', () => {
    context('iOS view', () => {
        beforeEach(() => {
            cy.viewport(375, 667)
        })
    })
})


describe('Logs into saucedemo and selects item', () => {
    it('Logs in and seleccts item from list', ()=> {
        cy.visit(Cypress.env('home'))
        cy.userName().type('standard_user')
        cy.password().type('secret_sauce')
        cy.loginButton().click()
        cy.inventoryFirstItem().click()
    })
})

context('Check Price of item', () => {
    it('Checks that the price of item is $29.99', () => {
        cy.get("inventoryFirstItemPricePoint").contains('29.99')
    })
})
