import 'cypress-xpath';
import FileManagerPage from '../pageobjects/filemanagerPage';

describe('File Manager Tests', () => {
  const fileManagerPage = new FileManagerPage();
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


  context('Add New Folder', () => {
    it('Validates the "Add New Folder" button is clickable', () => {
      fileManagerPage.navigateToFileManager();
      fileManagerPage.clickAddNewFolderButton();
      fileManagerPage.typeFolderName('Test Folder');
      fileManagerPage.clickNextButton();

      // Attempt to type excessively
      fileManagerPage.typeFolderName('ThisIsAnExcessivelyLongFolderNameWithLotsOfWordsToTestTheBoundariesAndLimitationsOfTheFolderNamingSystemInTheFileManagerApplicationAndToEnsureThatItHandlesLongInputsGracefullyWhileAlsoValidatingAnyPotentialCharacterLimitsOrRestrictionsInPlaceForFolderNamesThisStringContainsMultipleWordsAndCharactersToReachTheDesiredLengthAndTestTheSystemThoroughlyForAnyPotentialIssuesOrLimitationsWhenItComesToHandlingLongFolderNamesInTheApplicationThisTestWillHelpIdentifyAnyPotentialProblemsWithTheUserInterfaceOrBackendProcessingOfLongFolderNamesAndEnsureThatTheSystemCanHandleSuchInputsAppropriatelyWithoutCrashingOrCausingAnyUnexpectedBehaviorInTheApplicationThisIsParticularlyImportantForQualityAssuranceAndTestingPurposesEspeciallyWhenValidatingTheBoundaryConditionsAndEdgeCasesInTheFileManagerSystemToEnsureRobustAndReliableOperation');
      fileManagerPage.clickAddNewFolderButton();
      fileManagerPage.typeFolderName('Test Folder');
      fileManagerPage.clickPrevButton();
      fileManagerPage.clickAddNewFolderButton();
      fileManagerPage.typeFolderName('Test Folder');
      fileManagerPage.clickCloseButton();
    });
  });


  context('File Manager Additional Tests', () => {
    it('Validates the "My Files" section is clickable', () => {
      fileManagerPage.navigateToFileManager();
      fileManagerPage.clickMyFilesButton();
      cy.url().should('include', '/filemanager/all');
      fileManagerPage.clickButtonByXpath("(//button[contains(@type,'button')])[4]");
      fileManagerPage.clickBodyAtCoordinates(0, 0);
      // fileManagerPage.clickDropdownMenuItem(1);
      cy.xpath("(//button[contains(@role,'menuitem')][normalize-space()='Rename'])[1]")
        .click({ force: true });
      fileManagerPage.clickCloseButton();

      // Make a copy ok
      fileManagerPage.clickButtonByXpath("(//button[contains(@type,'button')])[4]");
      fileManagerPage.clickBodyAtCoordinates(0, 0);
      fileManagerPage.clickDropdownMenuItem(4);
      cy.get('.swal2-confirm').click({ force: true });

      // Make a copy cancel
      fileManagerPage.clickButtonByXpath("(//button[contains(@type,'button')])[4]");
      fileManagerPage.clickBodyAtCoordinates(0, 0);
      fileManagerPage.clickDropdownMenuItem(4);
      cy.get('.swal2-cancel').click({ force: true });

      // Mark as important
      fileManagerPage.clickButtonByXpath("(//button[contains(@type,'button')])[4]");
      fileManagerPage.clickBodyAtCoordinates(0, 0);
      fileManagerPage.clickDropdownMenuItem(2);

      // Share
      fileManagerPage.clickButtonByXpath("(//button[contains(@type,'button')])[4]");
      fileManagerPage.clickBodyAtCoordinates(0, 0);
      fileManagerPage.clickDropdownMenuItem(3);
      fileManagerPage.clickCloseButton();

      // Share button
      fileManagerPage.clickButtonByXpath("(//button[contains(@type,'button')])[4]");
      fileManagerPage.clickBodyAtCoordinates(0, 0);
      fileManagerPage.clickDropdownMenuItem(5);
      fileManagerPage.clickBodyAtCoordinates(0, 0);

      // Check all the main functions of file manager are clickable
      fileManagerPage.clickImportantSection();
      fileManagerPage.clickRecentsSection();
      fileManagerPage.clickDeletedSection();
      fileManagerPage.clickSharedWithMeSection();

      // Check all the labels are clickable
      fileManagerPage.clickLabel('documents');
      fileManagerPage.clickLabel('images');
      fileManagerPage.clickLabel('videos');
      fileManagerPage.clickLabel('audios');

      // Check the file uploading space that was given to user
      fileManagerPage.checkFileUploadingSpace();

      // Check folders rename and delete actions are working
      fileManagerPage.clickMyFilesButton();
      cy.wait(1000);
      fileManagerPage.clickButtonByXpath("(//button[contains(@type,'button')])[4]");
      fileManagerPage.clickButtonByXpath("(//button[contains(@role,'menuitem')][normalize-space()='Rename'])[1]");
      fileManagerPage.renameFolder('test folder22');
      fileManagerPage.clickButtonByXpath("(//button[contains(@type,'button')])[4]");
      fileManagerPage.clickButtonByXpath("(//button[contains(@role,'menuitem')][normalize-space()='Rename'])[1]");
      fileManagerPage.cancelRenameFolder();
      fileManagerPage.clickButtonByXpath("(//button[contains(@type,'button')])[4]");
      fileManagerPage.clickButtonByXpath("(//button[contains(@role,'menuitem')][normalize-space()='Delete'])[1]");
      fileManagerPage.deleteFolder();

      // Upload
      fileManagerPage.clickUploadButton();
      fileManagerPage.uploadFile('cypress/fixtures/Screenshot (137).png');
    });
  });


});



