/// <reference types= "Cypress" />

describe("Test Contact Us form via WebdriverUni", () =>{
    before(function() {
        
       cy.fixture('example').then(function(data) {
        
       // this.data = data; 
        globalThis.data = data;
        
    })
    })


    it.only("Should be able to sumbit a successful submission via contact us form", () => {
    
    cy.visit("http://www.webdriveruniversity.com/");
    cy.get('#contact-us').invoke('removeAttr','target').click({force:true})

    cy.get('[name="first_name"]').type(data.first_name);
    cy.get('[name="last_name"]').type(data.last_namess);
    cy.get('[name="email"]').type(data.email);
    cy.get('textarea.feedback-input').type("Jayantha garden, galle");
    cy.get('[type="submit"]').click();
   
    
    
    
    
    });
    
    
    })