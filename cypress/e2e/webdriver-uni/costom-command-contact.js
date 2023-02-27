/// <reference types= "Cypress" />

describe("Test Contact Us form via WebdriverUni", () =>{
    before(function() {
        
       cy.fixture('example').then(function(data) {
        
       // this.data = data; 
        globalThis.data = data;
        
    })
    })


    it("Should be able to sumbit a successful submission via contact us form", () => {
    
    cy.visit("/");
    cy.get('#contact-us').invoke('removeAttr','target').click({force:true})

    // cy.get('[name="first_name"]').type(data.first_name);
    // cy.get('[name="last_name"]').type(data.last_name);
    // cy.get('[name="email"]').type(data.email);
    // cy.get('textarea.feedback-input').type("Jayantha garden, galle");
    // cy.get('[type="submit"]').click();
    // cy.get('h1').should('have.text','Thank You for your Message!');

    //Pass values
    //h1 we write diffrently because first test and second test has diffrent element and first one has should second one has contain
    cy.webdriverUni_ContactForm_Submission(Cypress.env("first_name"), data.last_name,data.email,"Jayantha garden, galle",'h1','Thank You for your Message!');

    });
    
    
    it("Should not be able to submit a successful submission via contact us form as all fields are required", () => {
        //cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true})
        // cy.get('[name="first_name"]').type(data.first_name);
        // cy.get('[name="last_name"]').type(data.last_name);
        // cy.get('textarea.feedback-input').type("How can I learn Cypress?")
        // cy.get('[type="submit"]').click();
        // cy.get('body').contains('Error: all fields are required');
    
    //Pass values
    cy.webdriverUni_ContactForm_Submission(data.first_name, data.last_name," ","Jayantha garden, galle",'body','Error: Invalid email address');
    });
})