/// <reference types ="Cypress"/>
export default class basket{

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

    // CMS First item within container
    firstItemOnList(){
        return cy.get('.inventory_container > div > div:eq(0) > .pricebar > button')
    }

    // CMS Verify item title for the first item within container
    verifyItem(){
        return cy.get('#header_container > div > a > svg')
    }

    // CMS Continue button within the container
    cntBtn(){
        return cy.get('.cart_footer > .btn_secondary')
    }

    // CMS Remove button from within the basket
    rmvBtn(){
        return cy.get('.cart_item_label > div > button')
    }

    // CMS Quantity check after item has been removed
    qtyCheck(){
        return cy.get('.cart_list > .cart_quantity_label')
    }

    // CMS Item price of the first item within container
    itemPrice(){
        return cy.get('.inventory_item_price:eq(0)')
    }
}
