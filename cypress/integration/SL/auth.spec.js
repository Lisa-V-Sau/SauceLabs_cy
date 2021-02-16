import * as _ from 'lodash'
import Auth from '../Page_object/auth'

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