/// <reference types ="Cypress"/>
import Auth from './auth';
import Inventory from './inventory';

const auth = new Auth();
const inventory = new Inventory();

export const smokeTest = () => {
    // imported from tst_01: navigate to URL home
    // Log in using credentials 
    cy.visit(Cypress.env('home'));
    auth.username().type('standard_user');
    auth.password().type('secret_sauce');
    auth.submitDetails().click();

    // imported from tst_02: return number of items within inventory container
    inventory.container().eq(5);

    // import from tst_02: adds an item to basket and returns updated button display after item is added to basket
    inventory.addItemBtn().click();
    inventory.itemAddedbtn().then(($itemAdded) => {
        const itemAddedtxt = $itemAdded.text();
        cy.log(itemAddedtxt);
        expect(itemAddedtxt).eq('REMOVE');
    })

    // imported from tst_02: removes item from basket
    inventory.rmvBtn().click();

    // imported from tst_02: checks the title of item
    inventory.chckTitle().contains('Sauce Labs Backpack');

    // imported from tst_02: checks the price of item
    inventory.chckItemPrice().contains('29.99');

    // imported from tst_01
    // Logout: This is to be executed in the end of tests
    auth.burgerMenu().click();
    auth.logOutSlider().click();
}