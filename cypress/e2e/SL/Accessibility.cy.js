describe('Sauce Labs Demo Accessibility Testing', () => {
    const su = 'standard_user'
    const lu = 'locked_out_user'
    const pw = 'secret_sauce'
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/v1/index.html')
        cy.injectAxe()
    })
    afterEach(() => {
        cy.clearAllCookies()
        cy.clearAllLocalStorage()
        cy.clearAllSessionStorage()
    })

    it('TC01: Login page accessbility testing', () => {
        
    })
})