import { defineConfig } from 'cypress'

export default defineConfig({
  projectId: 'm84kq7',
  env: {
    home: 'https://www.saucedemo.com/',
    cart: 'https://www.saucedemo.com/cart.html',
    chckoutStepOne: 'https://www.saucedemo.com/checkout-step-one.html',
  },
  chromeWebSecurity: false,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
  },
})
