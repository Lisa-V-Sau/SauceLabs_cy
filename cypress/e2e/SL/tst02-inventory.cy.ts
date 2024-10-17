// This is the second test within this package - it returns number of items and also selects first item on page.

/// <reference types ="Cypress"/>

//A temporary viewport placeholder 
//this is a test for viewport: mobile mode
describe('Viewport', () => {
    context('iOS view', () => {
        beforeEach(() => {
            cy.viewport(375, 667)
        })
    })
})

// This test is to replicate auth.spec login
// Website can be found in cypress.json
// Page objects can be found in inventory.js
beforeEach( () => {
    cy.visit(Cypress.env('home'))
    cy.userName().type('standard_user')
    cy.password().type('secret_sauce')
    cy.loginButton().click()
})

// This test returns total number of items within the container
// Page objects can be found in inventory.js
describe('To Check items on list', () => {
    it('returns total of items on list', () => {
        cy.inventoryContainer().eq(5)
    })
})

// This test returns selects the first item within the container
// This test adds the item into the basket and also checks that the button 'itemAdded' is triggered and 'remove' appears
// Page objects can be found in inventory.js
context('Select and purchase item', () => {
    it('Selects first and adds to basket', () => {
        cy.inventoryFirstItem().click()
        cy.inventoryFirstItemBtn().then(($itemAdded) => {
              const itemAddedtxt = $itemAdded.text()
              cy.log(itemAddedtxt)
              expect(itemAddedtxt).eq('REMOVE')
        })
    })
})

// This test removes item from basket, clicking on the button within the item container
// Page objects can be found in inventory.js
context('Remove item from basket', () => {
    it('Clicks on remove button on item page', () => {
        cy.inventoryFirstItemRmvBtn().click()
    })
})

// This test is to check the title of the item which is added to the basket - first item within inventory
// Page objects can be found in inventory.js
context('Check Title of item', () => {
    it('Check that item displays Sauce Labs Backpack', () => {
        cy.inventoryFirstItemChckTitle().contains('Sauce Labs Backpack')
    })
})

// This test is to check the price of the item which is added to the basket - first item within inventory
// Page Objects can be found in inventory.js
context('Check Price of item', () => {
    it('Checks that the price of item is $29.99', () => {
        cy.inventoryFirstItemChckItemPrice().contains('29.99')
    })
})