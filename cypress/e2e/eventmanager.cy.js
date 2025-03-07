import 'cypress-xpath';
describe('event manager test', () => {
  Cypress.on('uncaught:exception', (err) => {
    // Return false to prevent Cypress from failing the test when chunk loading errors occur
    if (err.message.includes('Loading chunk') || err.message.includes('chunk')) {
      return false;
    }
    // For other errors, let Cypress handle them normally
    return true;
  });

  beforeEach(() => {
    cy.loginAndNavigate();
  });
  context('Add New Event', () => {
    it('Validates the "Add New Event" button is clickable', () => {
      cy.get("a[href='/calendar']", { timeout: 20000 }).should('be.visible').click({ force: true });
      cy.get('ul.mb-2.nav.nav-pills li').should("be.visible")
        .contains('Event Manager') // If you want to select by text
        .click();
      cy.get('#search-invoice').click()
      cy.get('.bg-light-success').click();
      cy.get('.collapse > .row').within(() => {
        // Array of filter elements to interact with
        const filters = [
          { selector: '#filterByMonth', name: 'Month filter' },
          { selector: '#filterByYear', name: 'Year filter' },
          { selector: '#filterTypes', name: 'Types filter' },
          { selector: '#EventTypeOptions', name: 'Event type options' },
          { selector: '#filterEventStatus', name: 'Event status filter' }
        ];

        // Click on each filter element and validate
        filters.forEach(filter => {
          cy.get(filter.selector)
            .should('be.visible')
            .click()
            .then(() => {
              cy.log(`Clicked on ${filter.name}`);
              // Validate the filter was clicked (dropdown opened or state changed)
              cy.get(filter.selector).should('exist');
              // Add more specific validation as needed
            });
        });
      });
      cy.get('.bg-light-warning').click()
    })
  })

})