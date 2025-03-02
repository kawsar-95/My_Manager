// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

// context('File Manager Additional Tests', () => {
//   it('Validates the "My Files" section is clickable', () => {
//     cy.get("a[href='/filemanager']", { timeout: 20000 })
//       .should('be.visible')
//       .click();
//     cy.get("a[href='/filemanager/all']").click();
//     cy.url().should('include', '/filemanager/all');

//     // cy.get("(//a[@class='active list-group-item-action list-group-item'])[1]").click();
//     cy.get("((//button[@type='button'])[4]").click()
//     cy.get("(//button[@role='menuitem'][normalize-space()='Preview'])[2]").click()
//     cy.get("button[aria-label='Close']").click()
//     cy.get("(//button[@role='menuitem'][normalize-space()='Make a copy'])[2]").click()
//     cy.get("button[class='swal2-confirm btn btn-primary']").click()
//     cy.get("button[class='swal2-cancel btn btn-outline-danger ms-1']").click()
//   });






//   // it('Validates 3-dot "Download" button is clickable', () => {
//   //   cy.get('.folder-options-btn').click();
//   //   cy.contains('Download').click();
//   // });

//   // it('Validates any folder is clickable', () => {
//   //   cy.get('.folder-item').first().click();
//   // });

//   // it('Validates "Upload" section is clickable inside a folder', () => {
//   //   cy.get('.folder-item').first().click();
//   //   cy.get('#uploadBtn').click();
//   //   // Assert file upload if needed
//   // });

//   // it('Validates file 3-dot button is clickable', () => {
//   //   cy.get('.file-dot-btn').click();
//   // });

//   // it('Validates file 3-dot "Preview" button is clickable', () => {
//   //   cy.get('.file-dot-btn').click();
//   //   cy.contains('Preview').click();
//   // });

//   // it('Validates file 3-dot "Important" button is clickable', () => {
//   //   cy.get('.file-dot-btn').click();
//   //   cy.contains('Important').click();
//   // });

//   // it('Validates file 3-dot "Share" button is clickable', () => {
//   //   cy.get('.file-dot-btn').click();
//   //   cy.contains('Share').click();
//   // });

//   // it('Validates file 3-dot "Make a Copy" button is clickable', () => {
//   //   cy.get('.file-dot-btn').click();
//   //   cy.contains('Make a copy').click();
//   // });

//   // it('Validates file 3-dot "Rename" button is clickable', () => {
//   //   cy.get('.file-dot-btn').click();
//   //   cy.contains('Rename').click();
//   // });

//   // it('Validates the "Rename File" section input field is limited', () => {
//   //   cy.get('#renameInput').type('ExcessiveFileName');
//   //   // Assert limitation or error
//   // });

//   // it('Validates the "Rename File" section "Ok" button is clickable', () => {
//   //   cy.get('#renameOkBtn').click();
//   // });

//   // it('Validates the "Rename File" section "Cancel" button is clickable', () => {
//   //   cy.get('#renameCancelBtn').click();
//   // });

//   // it('Validates the "Rename File" section "Cross" button is clickable', () => {
//   //   cy.get('#renameCloseBtn').click();
//   // });

//   // it('Validates the file check button is clickable', () => {
//   //   cy.get('.file-check').first().click();
//   // });

//   // it('Validates the Delete button is visible after checking file(s)', () => {
//   //   cy.get('.file-check').click();
//   //   cy.get('#deleteBtn').should('be.visible');
//   // });

//   // it('Validates the Delete button is clickable', () => {
//   //   cy.get('#deleteBtn').click();
//   // });

//   // it('Validates the Delete "Delete" button is functional', () => {
//   //   cy.get('#confirmDeleteBtn').click();
//   // });

//   // it('Validates the Delete "Cancel" button is clickable', () => {
//   //   cy.get('#cancelDeleteBtn').click();
//   // });

//   // it('Validates the "Per Page" dropdown is clickable', () => {
//   //   cy.get('#perPageDropdown').click();
//   // });

//   // it('Validates the "Per Page" dropdown section number is selectable', () => {
//   //   cy.get('#perPageDropdown').select('10');
//   // });

//   // it('Validates the "Per Page" Next button is clickable', () => {
//   //   cy.get('#nextPageBtn').click();
//   // });

//   // it('Validates the "Per Page" Previous button is clickable', () => {
//   //   cy.get('#prevPageBtn').click();
//   // });
// });s