/// <reference types="cypress" />

describe('Sauce Labs Demo Accessibility Testing', () => {
    
    const su = 'standard_user'
    const lu = 'locked_out_user'
    const pw = 'secret_sauce'

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/v1/index.html')
        // cy.injectAxe() must be called after cy.visit()
        cy.injectAxe()
    })
    afterEach(() => {
        cy.clearAllCookies()
        cy.clearAllLocalStorage()
        cy.clearAllSessionStorage()
    })

    it('TC01: Login page accessbility testing', () => {
        // cy.checkAlly() can be used only once cy.injectAxe() is called
        // cy.checkAlly() also takes parameters
        // The following parameters will allow for temporary by pass
        cy.checkA11y(null, 
            {runOnly: {
                type: 'tag',
                values: ['wcag2a','wcag2aa', 'cat.*']
            },
             rules: {
                 'color-contrast': { enabled: true },
                 'valid-lang': { enabled: true }
             },
             includedImpacts: 
                ['low'],
             tags: {
                 'wcag2a': { enabled: true },
                 'wcag411': { enabled: true },
                 'cat.parsing': { enabled: true },
                 'cat.keyboard': { enabled: true },
                 'best-practice': { enabled: true }
             }}
        )
        
    })
})