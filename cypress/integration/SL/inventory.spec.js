/// <reference types ="Cypress"/>
import { beforeEach } from 'mocha'
import Inventory from '../Page_object/inventory'

const inventory = new Inventory

//this is a test for viewport: mobile mode
describe('Viewport', () => {
    context('iOS view', () => {
        beforeEach(() => {
            cy.viewport(375, 667)
        })
    })
})


beforeEach( ()=> {
    cy.visit(Cypress.env('home'))
    inventory.username().type('standard_user')
    inventory.password().type('secret_sauce')
    inventory.submitDetails().click()
})


describe('To Check items on list', () => {
    it('returns total of items on list', () => {
        inventory.container().eq(5)
    })
})

context('Select and purchase item', () => {
    it('Selects first and adds to basket', () => {
        inventory.addItemBtn().click()
        inventory.itemAddedbtn().then(($itemAdded) => {
              const itemAddedtxt = $itemAdded.text()
              cy.log(itemAddedtxt)
              expect(itemAddedtxt).eq('REMOVE')
        })
    })
})

context('Remove item from basket', () => {
    it('Clicks on remove button on item page', () => {
        inventory.rmvBtn().click()
    })
})

context('Check Title of item', () => {
    it('Check that item displays Sauce Labs Backpack', () => {
        inventory.chckTitle().contains('Sauce Labs Backpack')
    })
})

context('Check Price of item', () => {
    it('Checks that the price of item is $29.99', () => {
        inventory.chckItemPrice().contains('29.99')
    })
})