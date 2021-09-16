/// <reference types ="Cypress"/>

// -- This is a parent command --

// --auth----

// CMS Username
Cypress.Commands.add("userName", () => {
    cy.get('#user-name')
})

// CMS Password
Cypress.Commands.add("password", () => {
    cy.get('#password')
})

// CMS Login button
Cypress.Commands.add("loginButton", () => {
    cy.get('#login-button')
})

// CMS Burger Menu button
Cypress.Commands.add("burgerMenu", () => {
    cy.get('.bm-burger-button')
})

// CMS Logout button within Burger Menu
Cypress.Commands.add("logOutSlider", () => {
    cy.get('div .bm-menu-wrap > div > nav > #logout_sidebar_link')
})
//---auth--

//--inventory---

// CMS Items container
Cypress.Commands.add("inventoryContainer", () => {
    cy.get('.inventory_container > div > div')
})

// CMS First item within container
Cypress.Commands.add("inventoryFirstItem", () => {
    cy.get('.inventory_container > div > div:eq(0) > .pricebar > button')
})

// CMS Add item button, first item within container
Cypress.Commands.add("inventoryFirstItemBtn", () => {
    cy.get('.inventory_container > div > div:eq(0) > .pricebar > button')
})

// CMS Remove item button, first item within container
Cypress.Commands.add("inventoryFirstItemRmvBtn", () => {
    cy.get('.inventory_container > div > div:eq(0) > .pricebar > button')
})

// CMS Check title, first item within container
Cypress.Commands.add("inventoryFirstItemChckTitle", () => {
    cy.get('.inventory_item_name:eq(0)')
})

// CMS Check price, first item within container
Cypress.Commands.add("inventoryFirstItemChckItemPrice", () => {
    cy.get('.inventory_item_price:eq(0)')
})

//---inventory--
//--item-price-check---

Cypress.Commands.add("inventoryFirstItemPricePoint", () => {
    cy.get('.inventory_item_price:eq(0)').contains('29.99')
})

//---item-price-check--

//--basket---

// CMS Continue button within the container
Cypress.Commands.add("cntBtn", () => {
    cy.get('.cart_footer > .btn_secondary')
})

// CMS Remove button from within the basket
Cypress.Commands.add("rmvbtn", () => {
    cy.get('.cart_item_label > div > button')
})

// CMS Quantity check after item has been removed
Cypress.Commands.add("qtyCheck", () => {
    cy.get('.cart_list > .cart_quantity_label')
})

//---basket--

//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
