class FileManagerPage {
  navigateToFileManager() {
    cy.get("a[href='/filemanager']", { timeout: 20000 }).should('be.visible').click({ force: true });
  }

  clickAddNewFolderButton() {
    cy.get('.p-2 > .w-100').should('be.visible').click({ force: true });
  }

  typeFolderName(folderName) {
    cy.get("div[class='modal-body'] input[type='text']").clear().type(folderName);
  }

  clickNextButton() {
    cy.get("button[class='btn-next btn btn-primary']").click({ force: true });
  }

  clickPrevButton() {
    cy.get("button[class='btn-prev btn btn-outline-primary']").click({ force: true });
  }

  clickCloseButton() {
    cy.get("button[aria-label='Close']").click({ force: true });
  }
  navigateToFileManager() {
    cy.get("a[href='/filemanager']", { timeout: 20000 }).should('be.visible').click({ force: true });
  }

  clickAddNewFolderButton() {
    cy.get('.p-2 > .w-100').should('be.visible').click({ force: true });
  }

  typeFolderName(folderName) {
    cy.get("div[class='modal-body'] input[type='text']").clear().type(folderName);
  }

  clickNextButton() {
    cy.get("button[class='btn-next btn btn-primary']").click({ force: true });
  }

  clickPrevButton() {
    cy.get("button[class='btn-prev btn btn-outline-primary']").click({ force: true });
  }

  clickCloseButton() {
    cy.get("button[aria-label='Close']").click({ force: true });
  }

  clickMyFilesButton() {
    cy.get("a[href='/filemanager/all']").click({ force: true });
  }

  clickButtonByXpath(xpath) {
    cy.xpath(xpath).click({ force: true });
  }

  clickBodyAtCoordinates(x, y) {
    cy.get('body').click(x, y);
  }

  clickDropdownMenuItem(index) {
    cy.get(`.dropdown-menu.show > :nth-child(${index})`).click({ force: true });
  }

  clickCloseButton() {
    cy.get("button[aria-label='Close']").click({ force: true });
  }

  clickImportantSection() {
    cy.get('[href="/filemanager/important"]').click({ force: true });
  }

  clickRecentsSection() {
    cy.get('[href="/filemanager/recents"]').click({ force: true });
  }

  clickDeletedSection() {
    cy.get('[href="/filemanager/deleted"]').click({ force: true });
  }

  clickSharedWithMeSection() {
    cy.get('[href="/filemanager/sharedwithme"]').click({ force: true });
  }

  clickLabel(label) {
    cy.get(`a[href='/filemanager/${label}']`).click({ force: true });
  }

  checkFileUploadingSpace() {
    cy.contains('span.align-middle', '100MB').should('exist');
  }

  renameFolder(newName) {
    cy.get('.modal-body > .form-control').should('be.visible').click({ force: true }).clear().type(newName);
    cy.contains('button', 'OK').click({ force: true });
  }

  cancelRenameFolder() {
    cy.contains('button', 'Cancel').click({ force: true });
  }

  deleteFolder() {
    cy.contains('button', 'Delete anyway').click({ force: true });
  }

  clickUploadButton() {
    cy.get("h5[class='mt-4']").click({ force: true });
  }

  uploadFile(filePath) {
    cy.get('input[type="file"]').first().then(input => {
      cy.wrap(input).selectFile(filePath, { force: true });
    });
  }
}

export default FileManagerPage;