import { smokeTest } from './smoke-spec'

Cypress._.each(['macbook-15', 'iphone-6'], viewport => {
  it(`works on ${viewport}`, () => {
    cy.viewport(viewport)
    smokeTest()
  })
})