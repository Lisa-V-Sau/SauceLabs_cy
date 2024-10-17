/// <reference types ="Cypress"/>
import { beforeEach } from 'mocha'

//this is a test for viewport: mobile mode
describe('Viewport', () => {
    context('iOS view', () => {
        beforeEach(() => {
            cy.viewport(375, 667)
            cy.viewport(768, 1024)
        })
    })
})

beforeEach( ()=> {
    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    cy.get('.inventory_container > div > div:eq(0) > .pricebar > button').click()
})

// context('Payment details')