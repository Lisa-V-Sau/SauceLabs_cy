// First Test within folder - starting from Login Screen
/// <reference types ="Cypress"/>
import * as _ from 'lodash'
import Auth from '../Page_object/auth'

const auth = new Auth

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
        auth.username().type('standard_user')
        auth.password().type('secret_sauce')
        auth.submitDetails().click()
    })
})

// Page objects can be found in auth.js
context('logout', () => {
    it('Navigates to burger menu and clicks on logout', () => {
        auth.burgerMenu().click()
        auth.logOutSlider().click()
    })
})