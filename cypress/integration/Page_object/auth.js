/// <reference types ="Cypress"/>
export default class auth{

    // CMS Username
    username(){
        return cy.get('#user-name')
    }
    
    // CMS Password 
    password(){
        return cy.get('#password')
    }

    // CMS Login button
    submitDetails(){
        return cy.get('#login-button')
    }

    // CMS Burger Menu button
    burgerMenu(){
        return cy.get('.bm-burger-button')
    }

    // CMS Logout button within Burger Menu
    logOutSlider(){
        return cy.get('div .bm-menu-wrap > div > nav > #logout_sidebar_link')
    }
}