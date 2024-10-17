// First Test within folder - starting from Login Screen
/// <reference types ="Cypress"/>

// Current Place Holder
describe('Nav Menus', () => {
    context('720p resolution', () => {
      beforeEach(() => {
        // run these tests as if in a desktop
        // browser with a 720p monitor
        cy.viewport(1280, 720)
        })
    })
})

// Current Place Holder
describe('Nav Menus', () => {
    context('iPhone6 resolution', () => {
      beforeEach(() => {
        // run these tests as if in a desktop
        // browser with a 720p monitor
        cy.viewport('iphone-6')
        })
    })
})

// Website can be found in cypress.json
// Page objects can be found in auth.js
describe('Log into Swag Labs', () => {
    it('It Logs user in with available credentials', () => {
        cy.visit(Cypress.env('home'))
        cy.userName().type('standard_user')
        cy.password().type('secret_sauce')
        cy.loginButton().click()
    })
})

// Page objects can be found in auth.js
context('logout', () => {
    it('Navigates to burger menu and clicks on logout', () => {
        cy.burgerMenu().click()
        cy.logOutSlider().click()
    })
})