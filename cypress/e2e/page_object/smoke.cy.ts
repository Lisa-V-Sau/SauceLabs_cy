/// <reference types ="Cypress"/>

export const smokeTest = () => {
    // imported from tst_01: navigate to URL home
    // Log in using credentials 
    cy.visit(Cypress.env('home'));
    cy.userName().type('standard_user');
    cy.password().type('secret_sauce');
    cy.loginButton().click();

    // imported from tst_02: return number of items within inventory container
    cy.inventoryContainer().eq(5);

    // import from tst_02: adds an item to basket and returns updated button display after item is added to basket
    cy.inventoryFirstItem().click();
    cy.inventoryFirstItemBtn().then(($itemAdded) => {
        const itemAddedtxt = $itemAdded.text();
        cy.log(itemAddedtxt);
        expect(itemAddedtxt).eq('REMOVE');
    })

    // imported from tst_02: removes item from basket
    cy.inventoryFirstItemRmvBtn().click();

    // imported from tst_02: checks the title of item
    cy.inventoryFirstItemChckTitle().contains('Sauce Labs Backpack');

    // imported from tst_02: checks the price of item
    cy.inventoryFirstItemChckItemPrice().contains('29.99');

    // imported from tst_01
    // Logout: This is to be executed in the end of tests
    cy.burgerMenu().click();
    cy.logOutSlider().click();
}