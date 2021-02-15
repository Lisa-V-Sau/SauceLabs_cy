import { beforeEach } from 'mocha'

beforeEach( ()=> {
    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    cy.get('.inventory_container > div > div:eq(0) > .pricebar > button').click()
})

context('Check Price of item', () => {
    it('Checks that the price of item is $29.99', () => {
        cy.get('.inventory_item_price:eq(0)').contains('$29.99')
    })
})

context('Checkout information', () => {
    it('checks item price in basket against that of checkout page', () => {
        cy.get('')
    })
})
