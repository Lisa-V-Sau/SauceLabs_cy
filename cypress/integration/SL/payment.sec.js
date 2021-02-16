import { beforeEach } from 'mocha'

beforeEach( ()=> {
    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    cy.get('.inventory_container > div > div:eq(0) > .pricebar > button').click()
})

// context('Payment details')