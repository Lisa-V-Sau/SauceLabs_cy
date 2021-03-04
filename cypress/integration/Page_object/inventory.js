/// <reference types ="Cypress"/>

export default class inventory{

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

    // CMS Items container
    container(){
        return cy.get('.inventory_container > div > div')
    }
    
    // CMS First item within container
    addItemBtn(){
        return cy.get('.inventory_container > div > div:eq(0) > .pricebar > button')
    }

    // CMS Add item button, first item within container
    itemAddedbtn(){
        return cy.get('.inventory_container > div > div:eq(0) > .pricebar > button')
    }

    // CMS Remove item button, first item within container
    rmvBtn(){
        return cy.get('.inventory_container > div > div:eq(0) > .pricebar > button')
    }

    // CMS Check title, first item within container
    chckTitle(){
        return cy.get('.inventory_item_name:eq(0)')
    }

    // CMS Check price, first item within container
    chckItemPrice(){
        return cy.get('.inventory_item_price:eq(0)')
    }
}