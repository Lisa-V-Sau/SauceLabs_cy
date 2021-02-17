/// <reference types ="Cypress"/>

class inventory{
    username(){
        return cy.get('#user-name')
    }

    password(){
        return cy.get('#password')
    }

    submitDetails(){
        return cy.get('#login-button')
    }

    container(){
        return cy.get('.inventory_container > div > div')
    }
    
    addItemBtn(){
        return cy.get('.inventory_container > div > div:eq(0) > .pricebar > button')
    }

    itemAddedbtn(){
        return cy.get('.inventory_container > div > div:eq(0) > .pricebar > button')
    }

    rmvBtn(){
        return cy.get('.inventory_container > div > div:eq(0) > .pricebar > button')
    }

    chckTitle(){
        return cy.get('.inventory_item_name:eq(0)')
    }

    chckItemPrice(){
        return cy.get('.inventory_item_price:eq(0)')
    }
}

export default inventory