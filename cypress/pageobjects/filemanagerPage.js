export class FileManagerPage {
  // Locators
  fileManagerLink = "a[href='/filemanager']";
  addNewFolderButton = '.p-2 > .w-100';
  folderNameInput = "div[class='modal-body'] input[type='text']";
  btnNext = "button[class='btn-next btn btn-primary']";
  btnPrev = "button[class='btn-prev btn btn-outline-primary']";
  btnCloseModal = "button[aria-label='Close']";

  // Methods interacting with elements
  navigateToFileManager() {
    cy.intercept('**/*').as('pageLoad');
    cy.get(this.fileManagerLink).should('be.visible').click();
    cy.wait('@pageLoad');
  }

  clickAddNewFolder() {
    cy.get(this.addNewFolderButton).should('be.visible').click();
  }

  typeFolderName(folderName) {
    cy.get(this.folderNameInput).should('be.visible').type(folderName);
  }

  clickNext() {
    cy.get(this.btnNext).should('be.visible').click();
  }

  clickPrev() {
    cy.get(this.btnPrev).should('be.visible').click();
  }

  closeModal() {
    cy.get(this.btnCloseModal).should('be.visible').click();
  }
}