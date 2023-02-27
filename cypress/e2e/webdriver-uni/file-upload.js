/// <reference types="cypress"/>

describe('Test file upload', () => {
    
it('Upload a file', () => {
    
cy.visit("http://www.webdriveruniversity.com")

cy.get('#file-upload').invoke('removeAttr', 'target').click({force:true});

cy.get("#myFile").selectFile("cypress/fixtures/new02.png");
cy.get("#submit-button").click();


});


});