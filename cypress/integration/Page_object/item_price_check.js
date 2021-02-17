export default class pricecheck{

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

    chckItemPrice(){
        return cy.get('.inventory_item_price:eq(0)').contains('29.99')
    }

    firstName(){
        return cy.get('#first-name')
    }

    lastName(){
        return cy.get('#last-name').type('user')
    }

    postCode(){
        return cy.get('#postal-code').type('sw1 2de')
    }



    

}