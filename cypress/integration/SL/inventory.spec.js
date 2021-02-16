import { beforeEach } from 'mocha'

beforeEach( ()=> {
    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
})


describe('To Check items on list', () => {
    it('returns total of items on list', () => {
        cy.get('.inventory_container > div > div').eq(5)
    })
})

context('Select and purchase item', () => {
    it('Selects first and adds to basket', () => {
        cy.get('.inventory_container > div > div:eq(0) > .pricebar > button').click()
        cy.get('.inventory_container > div > div:eq(0) > .pricebar > button').then(($itemAdded) => {
              const itemAddedtxt = $itemAdded.text()
              cy.log(itemAddedtxt)
              expect(itemAddedtxt).eq('REMOVE')
        })
    })
})

context('Remove item from basket', () => {
    it('Clicks on remove button on item page', () => {
        cy.get('.inventory_container > div > div:eq(0) > .pricebar > button').click()
    })
})

context('Check Title of item', () => {
    it('Check that item displays Sauce Labs Backpack', () => {
        cy.get('.inventory_item_name:eq(0)').contains('Sauce Labs Backpack')
    })
})

context('Check Price of item', () => {
    it('Checks that the price of item is $29.99', () => {
        cy.get('.inventory_item_price:eq(0)').contains('$29.99')
    })
})