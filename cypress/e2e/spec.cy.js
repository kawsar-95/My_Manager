describe('File Manager Tests', () => {
  beforeEach(() => {
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
    cy.wait(35000);
    cy.get('.nav-menu-main', { timeout: 30000 })
      .should('be.visible')
      .click();
  });

  context('Add New Folder', () => {
    it('Validates the "Add New Folder" button is clickable', () => {
      // Navigate to file manager
      cy.get("a[href='/filemanager']", { timeout: 20000 })
        .should('be.visible')
        .click();

      // Check and click Add New Folder button
      cy.get('.p-2 > .w-100')
        .should('be.visible')
        .click();

      // Verify modal appears
      cy.get("div[class='modal-body'] input[type='text']").type('Test Folder')
      cy.get("button[class='btn-next btn btn-primary']").click();


      // Attempt to type excessively
      // Type a very long folder name (600+ characters)
      cy.get("div[class='modal-body'] input[type='text']")
        .type('ThisIsAnExcessivelyLongFolderNameWithLotsOfWordsToTestTheBoundariesAndLimitationsOfTheFolderNamingSystemInTheFileManagerApplicationAndToEnsureThatItHandlesLongInputsGracefullyWhileAlsoValidatingAnyPotentialCharacterLimitsOrRestrictionsInPlaceForFolderNamesThisStringContainsMultipleWordsAndCharactersToReachTheDesiredLengthAndTestTheSystemThoroughlyForAnyPotentialIssuesOrLimitationsWhenItComesToHandlingLongFolderNamesInTheApplicationThisTestWillHelpIdentifyAnyPotentialProblemsWithTheUserInterfaceOrBackendProcessingOfLongFolderNamesAndEnsureThatTheSystemCanHandleSuchInputsAppropriatelyWithoutCrashingOrCausingAnyUnexpectedBehaviorInTheApplicationThisIsParticularlyImportantForQualityAssuranceAndTestingPurposesEspeciallyWhenValidatingTheBoundaryConditionsAndEdgeCasesInTheFileManagerSystemToEnsureRobustAndReliableOperation');
      // cy.get("button[class='btn-next btn btn-primary']").click();
      cy.get('.p-2 > .w-100')
        .should('be.visible')
        .click();
      cy.get("div[class='modal-body'] input[type='text']").type('Test Folder')
      cy.get("button[class='btn-prev btn btn-outline-primary']").click()
      cy.get('.p-2 > .w-100')
        .should('be.visible')
        .click();
      cy.get("div[class='modal-body'] input[type='text']").type('Test Folder')
      cy.get("button[aria-label='Close']").click()
    });
  });
  context('File Manager Additional Tests', () => {
    it('Validates the "My Files" section is clickable', () => {
      cy.get("a[href='/filemanager']", { timeout: 20000 })
        .should('be.visible')
        .click();
      cy.get("a[href='/filemanager/all']").click();
      cy.url().should('include', '/filemanager/all');
      // 3 dots clickable or not validation
      // cy.get("(//a[@class='active list-group-item-action list-group-item'])[1]").click();
      // cy.get("((//button[@type='button'])[4]").click()
      cy.get(':nth-child(2) > .shadow-none > .justify-content-between > .dropdown > .bg-transparent').click()
      cy.get('body').click(0, 0); // Click at coordinates (0,0) to close any open menus
      cy.get(':nth-child(3) > .shadow-none > .position-absolute > .me-0 > .dropdown > .bg-transparent').click()
      cy.get('.dropdown-menu.show > :nth-child(1)').click()
      cy.get("button[aria-label='Close']").click()
      //make a copy ok
      cy.get(':nth-child(2) > .shadow-none > .justify-content-between > .dropdown > .bg-transparent').click()
      cy.get('body').click(0, 0); // Click at coordinates (0,0) to close any open menus
      cy.get(':nth-child(3) > .shadow-none > .position-absolute > .me-0 > .dropdown > .bg-transparent').click()
      cy.get('.dropdown-menu.show > :nth-child(4)').click()
      cy.get('.swal2-confirm').click()
      //make a copy cancel

      cy.get(':nth-child(2) > .shadow-none > .justify-content-between > .dropdown > .bg-transparent').click()
      cy.get('body').click(0, 0); // Click at coordinates (0,0) to close any open menus
      cy.get(':nth-child(3) > .shadow-none > .position-absolute > .me-0 > .dropdown > .bg-transparent').click()
      cy.get('.dropdown-menu.show > :nth-child(4)').click()
      cy.get('.swal2-cancel').click()
      //important
      cy.get(':nth-child(2) > .shadow-none > .justify-content-between > .dropdown > .bg-transparent').click()
      cy.get('body').click(0, 0); // Click at coordinates (0,0) to close any open menus
      cy.get(':nth-child(3) > .shadow-none > .position-absolute > .me-0 > .dropdown > .bg-transparent').click()
      cy.get('.dropdown-menu.show > :nth-child(2)').click()
      //share
      cy.get(':nth-child(2) > .shadow-none > .justify-content-between > .dropdown > .bg-transparent').click()
      cy.get('body').click(0, 0); // Click at coordinates (0,0) to close any open menus
      cy.get(':nth-child(3) > .shadow-none > .position-absolute > .me-0 > .dropdown > .bg-transparent').click()
      cy.get('.dropdown-menu.show > :nth-child(3)').click()
      cy.get("cy.get('.justify-content-end > .me-1')").click()
      cy.get('.btn-outline-danger').click()


    });







    // it('Validates "Upload" section is clickable inside a folder', () => {
    //   cy.get('.folder-item').first().click();
    //   cy.get('#uploadBtn').click();
    //   // Assert file upload if needed
    // });










    // it('Validates file 3-dot "Rename" button is clickable', () => {
    //   cy.get('.file-dot-btn').click();
    //   cy.contains('Rename').click();
    // });

    // it('Validates the "Rename File" section input field is limited', () => {
    //   cy.get('#renameInput').type('ExcessiveFileName');
    //   // Assert limitation or error
    // });

    // it('Validates the "Rename File" section "Ok" button is clickable', () => {
    //   cy.get('#renameOkBtn').click();
    // });

    // it('Validates the "Rename File" section "Cancel" button is clickable', () => {
    //   cy.get('#renameCancelBtn').click();
    // });

    // it('Validates the "Rename File" section "Cross" button is clickable', () => {
    //   cy.get('#renameCloseBtn').click();
    // });

    // it('Validates the file check button is clickable', () => {
    //   cy.get('.file-check').first().click();
    // });

    // it('Validates the Delete button is visible after checking file(s)', () => {
    //   cy.get('.file-check').click();
    //   cy.get('#deleteBtn').should('be.visible');
    // });

    // it('Validates the Delete button is clickable', () => {
    //   cy.get('#deleteBtn').click();
    // });

    // it('Validates the Delete "Delete" button is functional', () => {
    //   cy.get('#confirmDeleteBtn').click();
    // });

    // it('Validates the Delete "Cancel" button is clickable', () => {
    //   cy.get('#cancelDeleteBtn').click();
    // });

    // it('Validates the "Per Page" dropdown is clickable', () => {
    //   cy.get('#perPageDropdown').click();
    // });

    // it('Validates the "Per Page" dropdown section number is selectable', () => {
    //   cy.get('#perPageDropdown').select('10');
    // });

    // it('Validates the "Per Page" Next button is clickable', () => {
    //   cy.get('#nextPageBtn').click();
    // });

    // it('Validates the "Per Page" Previous button is clickable', () => {
    //   cy.get('#prevPageBtn').click();
    // });
  });


});
