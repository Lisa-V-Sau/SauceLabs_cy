/// <reference types ="Cypress"/>
class auth{
    username(){
        return cy.get('#user-name')
    }

    password(){
        return cy.get('#password')
    }

    submitDetails(){
        return cy.get('#login-button')
    }

    burgerMenu(){
        return cy.get('.bm-burger-button')
    }

    logOutSlider(){
        return cy.get('div .bm-menu-wrap > div > nav > #logout_sidebar_link')
    }
}

export default auth