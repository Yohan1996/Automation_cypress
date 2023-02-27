/// <reference types= "Cypress" />

describe("Test Contact Us form via WebdriverUni", () =>{
    it("Should be able to sumbit a successful submission via contact us form", () => {
        //cypress code
    //cy.visit("http://www.webdriveruniversity.com/");
    //cy.get('#contact-us > .thumbnail').click()
    

    cy.visit("http://www.webdriveruniversity.com/");
    cy.get('#to-do-list').invoke('removeAttr','target').click({force:true})

    
    cy.url().should('include','To-Do-List/index.html');
    cy.go('back');

    cy.reload();

    cy.go('forward');

   

    
    
    
    });

})