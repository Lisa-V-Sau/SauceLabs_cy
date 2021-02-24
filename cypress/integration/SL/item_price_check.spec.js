/// <reference types ="Cypress"/>
import { beforeEach } from 'mocha'
import Pricecheck from '../Page_object/item_price_check'

const pricecheck = new Pricecheck

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
        pricecheck.username().type('standard_user')
        pricecheck.password().type('secret_sauce')
        pricecheck.submitDetails().click()
        pricecheck.firstItemOnList().click()
    })
})

context('Check Price of item', () => {
    it('Checks that the price of item is $29.99', () => {
        cy.get('.inventory_item_price:eq(0)').contains('29.99')
    })
})

context('Checkout information', () => {
    it('checks item price in basket against that of checkout page', () => {
        cy.visit(Cypress.env('chckoutStepOne'))
        pricecheck.firstName().type('user')
        pricecheck.lastName().type('user')
        pricecheck.postCode().type('sw1 2de')
    })
})
