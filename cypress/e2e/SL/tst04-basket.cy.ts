// This is the fourth test within this package - it checks on items which are added to the basket, checks the price and also removes item from basket and ensures that the item quantity reflects that to the basket.

/// <reference types ="Cypress"/>

// A temporary viewport placeholder
//this is a test for viewport: mobile mode
describe('Viewport', () => {
    context('iOS view', () => {
        beforeEach(() => {
            cy.viewport(375, 667)
        })
    })
})

// This test is to replicate auth.spec login
// This also includes selecting item and verifying selected items
// Website can be found in cypress.json
// Page objects can be found in basket.js
beforeEach( () => {
    cy.visit(Cypress.env('home'))
    cy.userName().type('standard_user')
    cy.password().type('secret_sauce')
    cy.loginButton().click()
    cy.inventoryFirstItem().click()
    cy.invetoryFirstItemBtn().click()
})

// This test checks item price within the shopping basket
context('Check Price of item', () => {
    it('Checks that the price of item is 29.99', () => {
        cy.get("inventoryFirstItemPricePoint").contains('29.99')
    })
})

// This test clicks on the continue button within the shopping basket
context('Continue Shopping', () => {
    it('Clicks on continue button which would take user back to inventory', () => {
        cy.cntBtn().click()
    })
})

// This test removes the item from within the shopping basket and also checks on total items after item has been removed
context('Remove item from basket', () => {
    it('Clicks on the remove button on cart page and remove items', () => {
        cy.rmvBtn().click()
        cy.qtyCheck().eq(0)
    })
})