/// <reference types ="Cypress"/>
import * as _ from 'lodash'
import Auth from '../Page_object/auth'

//this is a test for viewport: mobile mode
describe('Viewport', () => {
    context('iOS view', () => {
        beforeEach(() => {
            cy.viewport(375, 667)
        })
    })
})

describe('Log into Swag Labs', () => {
    const auth = new Auth
    it('It Logs user in with available credentials', () => {
        cy.visit(Cypress.env('home'))
        auth.username().type('standard_user')
        auth.password().type('secret_sauce')
        auth.submitDetails().click()
    })
})

context('logout', () => {
    const auth = new Auth
    it('Navigates to burger menu and clicks on logout', () => {
        auth.burgerMenu().click()
        auth.logOutSlider().click()
    })
})