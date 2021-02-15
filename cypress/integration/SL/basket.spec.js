import { beforeEach } from 'mocha'

beforeEach( ()=> {
    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    cy.get('.inventory_container > div > div:eq(0) > .pricebar > button').click()
})

context('Verify item', () => {
    it('Navigates to basket and verifies item', () => {
        cy.get('#header_container > div > a > svg').click()
    })
})

beforeEach( () => {
    cy.visit('https://www.saucedemo.com/cart.html')
})

context('Continue Shopping', () => {
    it('Clicks on continue button which would take user back to inventory', () => {
        cy.get('.cart_footer > .btn_secondary').click()
    })
})

context('Remove item from basket', () => {
    it('Clicks on the remove button on cart page and remove items', () => {
        cy.get('.cart_item_label > div > button').click()
        cy.get('.cart_list > .cart_quantity_label').eq(0)
    })
})

context('Check Price of item', () => {
    it('Checks that the price of item is $29.99', () => {
        cy.get('.inventory_item_price:eq(0)').contains('$29.99')
    })
})

context('Checkout information')

// context('Payment details')


