/// <reference types= "Cypress" />

describe("Test Contact Us form via WebdriverUni", () =>{
it("Should be able to sumbit a successful submission via contact us form", () => {
    //cypress code
//cy.visit("http://www.webdriveruniversity.com/");
//cy.get('#contact-us > .thumbnail').click()


cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
cy.visit("http://www.webdriveruniversity.com/");

cy.document().should('have.property','charset').and('eq','UTF-8');

cy.title().should('include','WebDriver | Contact Us');

cy.url().should('include','contactus');

cy.get('[name="first_name"]').type("Yohan");
cy.get('[name="last_name"]').type("Jayasuriya");
cy.get('[name="email"]').type("yohanjayasuriya01@gmail.com");
cy.get('textarea.feedback-input').type("Jayantha garden, galle");
cy.get('[type="submit"]').click();
cy.get('h1').should('have.text','Thank You for your Message!');




});

it("Should not be able to sumbit a successful submission via contact us form as all fields are required", () => {
    
cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");

cy.get('[name="first_name"]').type("Pavan")
cy.get('[name="last_name"]').type("Jayasuriya")
cy.get('textarea.feedback-input').type("Jayantha garden, galle")
cy.get('[type="submit"]').click()

cy.get('body').contains('Error: all fields are required');

});


it.only("Should not be able to sumbit a successful submission via contact us form as all fields are required", () => {
    
    cy.visit("http://www.webdriveruniversity.com/");
    cy.get('#contact-us').invoke('removeAttr','target').click({force:true})
    
    cy.get('[name="first_name"]').type("Pavan")
    cy.get('[name="last_name"]').type("Jayasuriya")
    cy.get('textarea.feedback-input').type("Jayantha garden, galle")
    cy.get('[type="submit"]').click()
    
    cy.get('body').contains('Error: all fields are required');
    
    });


})