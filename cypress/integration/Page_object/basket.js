class basket{
    username(){
        return cy.get('#user-name')
    }

    password(){
        return cy.get('#password')
    }

    submitDetails(){
        return cy.get('#login-button')
    }

    firstItemOnList(){
        return cy.get('.inventory_container > div > div:eq(0) > .pricebar > button')
    }

    verifyItem(){
        return cy.get('#header_container > div > a > svg')
    }

    cntBtn(){
        return cy.get('.cart_footer > .btn_secondary')
    }


    rmBtn(){
        return cy.get('.cart_item_label > div > button')
    }

    qtyCheck(){
        return cy.get('.cart_list > .cart_quantity_label')
    }

    itemPrice(){
        return cy.get('.inventory_item_price:eq(0)')
    }
}

export default basket