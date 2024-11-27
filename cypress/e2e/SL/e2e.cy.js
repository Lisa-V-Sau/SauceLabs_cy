/// <reference types="cypress" />

describe('Credentials Login Test', () => {
    const su = 'standard_user'
    const lu = 'locked_out_user'
    const pw = 'secret_sauce'
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/v1/index.html')
    })
    afterEach(() => {
        cy.clearAllCookies()
        cy.clearAllLocalStorage()
        cy.clearAllSessionStorage()
    })

    it('TC01: Standard User - checks validity of login', () => {
        cy.get('[data-test="username"]').click().type(su)
        .invoke('val')
        .should('have.length', 13)
        cy.get('[data-test="password"]').click().type(pw)
        .invoke('val')
        .should('have.length', 12)
        cy.get('[id="login-button"]').click()
        cy.url()
        .should('equal', 'https://www.saucedemo.com/v1/inventory.html')
    })

    it('TC02: Lockedout User - check that the correct error message is triggered', () => {
        cy.get('[data-test="username"]').click().type(lu)
        .invoke('val')
        .should('have.length', 15)
        cy.get('[data-test="password"]').click().type(pw)
        .invoke('val')
        .should('have.length', 12)
        cy.get('[id="login-button"]').click()
        cy.get('h3')
        .should('contain', 'Epic sadface: ', 'Sorry, this user has been locked out.')
    })

    it('TC03: No credentials entered - to check that the correct error message is triggered', () => {
        cy.get('[id="login-button"]').click()
        cy.get('h3')
        //console.log()
        .should('contain', 'Epic sadface: ', 'Username is required')
    })

    it('TC04: No password entered', () => {
        cy.get('[data-test="username"]').click().type(su)
        .invoke('val')
        .should('have.length', 13)
        cy.get('[id="login-button"]').click()
        cy.get('h3')
        .should('contain', 'Epic sadface: ', 'Password is required')
    })

    it('TC05: Name sort in alphebetical order asc & dec', () => {
        cy.get('[data-test="username"]').click().type(su)
        cy.get('[data-test="password"]').click().type(pw)
        cy.get('[id="login-button"]').click()
        cy.url()
        .should('equal', 'https://www.saucedemo.com/v1/inventory.html')
        cy.get('[class="product_sort_container"]').select('Name (Z to A)').should('have.value', 'za')
        cy.get('[class="product_sort_container"]').select('Name (A to Z)').should('have.value', 'az')
        cy.get('[class="product_sort_container"]').select('Price (low to high)').should('have.value', 'lohi')
        cy.get('[class="product_sort_container"]').select('Price (high to low)').should('have.value', 'hilo')
    })

    it.only('TC06: Adding and removing items from checkout', () => {
        cy.get('[data-test="username"]').click().type(su)
        cy.get('[data-test="password"]').click().type(pw)
        cy.get('[id="login-button"]').click()
        cy.url()
        .should('equal', 'https://www.saucedemo.com/v1/inventory.html')
        cy.get('.inventory_container > div > div:eq(0) > .pricebar > button').click()
        cy.get('[id="shopping_cart_container"]').click()
        cy.url()
        .should('equal', 'https://www.saucedemo.com/v1/cart.html')
        cy.get('.cart_item > .cart_quantity')
        .invoke('text')
        .then(text => +text)
        .should('eql', 1)
    })
})