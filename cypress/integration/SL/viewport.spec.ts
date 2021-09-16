/* eslint-disable no-undef */
/// <reference types ="Cypress"/>
import { smokeTest } from '../page_object/smoke';

Cypress._.each(['macbook-15', 'iphone-6'], (viewport) => {
  it(`works on ${viewport}`, () => {
    cy.viewport(viewport);
    smokeTest();
  });
});