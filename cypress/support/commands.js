// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
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
//// filepath: /c:/Users/Nuruddin Kawsar/Videos/WSDassignmentCy/cypress/support/commands.js
Cypress.Commands.add('loginAndNavigate', () => {
  cy.visit('https://me.mymanager.com');

  // Login flow with visibility checks
  cy.get("input[placeholder='Write your email']", { timeout: 10000 })
    .should('be.visible')
    .click()
    .type('frnz.bagheri@gmail.com');

  cy.get('input[placeholder="············"]')
    .should('be.visible')
    .click()
    .type('FarnazMA3#');

  cy.get("label[for='remember-me']")
    .should('be.visible')
    .click();

  cy.get("button[type='submit']")
    .should('be.visible')
    .click();

  // Wait for page load after login
  cy.get(":nth-child(1) > .card-body > .d-flex")
    .should('be.visible')
    .click();

  cy.get("button[type='button']")
    .should('be.visible')
    .click();

  // Instead of cy.wait(35000), wait for network idle
  cy.intercept('**/*').as('networkRequests');
  cy.wait('@networkRequests');

  cy.get('.nav-menu-main', { timeout: 30000 })
    .should('exist')
    .should('be.visible')
    .click();
});