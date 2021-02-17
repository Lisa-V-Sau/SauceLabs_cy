/// <reference types ="Cypress"/>
import { beforeEach } from 'mocha'
import Basket from '../Page_object/basket'

const basket = new Basket

beforeEach( () => {
    cy.visit(Cypress.env('home'))
    basket.username().type('standard_user')
    basket.password().type('secret_sauce')
    basket.submitDetails().click()
    basket.firstItemOnList().click()
})

context('Verify item', () => {
    it('Navigates to basket and verifies item', () => {
        basket.verifyItem().click()
    })
})

beforeEach( () => {
    cy.visit(Cypress.env('cart'))
})

context('Continue Shopping', () => {
    it('Clicks on continue button which would take user back to inventory', () => {
        basket.cntBtn().click()
    })
})

context('Remove item from basket', () => {
    it('Clicks on the remove button on cart page and remove items', () => {
        basket.rmBtn().click()
        basket.qtyCheck().eq(0)
    })
})

context('Check Price of item', () => {
    it('Checks that the price of item is 29.99', () => {
        basket.itemPrice().contains('29.99')
    })
})