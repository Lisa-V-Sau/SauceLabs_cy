import * as _ from 'lodash'

describe('Log into Swag Labs', () => {
    it('It Logs user in with available credentials', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
    })
})

context('logout', () => {
    it('Navigates to burger menu and clicks on logout', () => {
        cy.get('.bm-burger-button').click()
        cy.get('div .bm-menu-wrap > div > nav > #logout_sidebar_link').click()
    })
})