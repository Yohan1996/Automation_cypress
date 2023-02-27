/// <reference types= "cypress" />
/// <reference types= "cypress-xpath" />

describe("Test Contact Us form via Automation Test Store", () =>{
    it("Should be able to sumbit a successful submission via contact us form", () => {

    
    cy.visit("https://www.automationteststore.com/");
    cy.wait(3000);
    
    cy.get('.info_links_footer > :nth-child(5) > a').click().then(function(linkText)
{
cy.log("Click ob link using text: " + linkText.text())


})
    cy.wait(3000);
    cy.get('#ContactUsFrm_first_name').type("Yohan");
    cy.wait(3000);
    cy.get('#ContactUsFrm_email').type("yohanjayasuriya01@gmail.com");
    cy.wait(3000);
    cy.get('#ContactUsFrm_email').should('have.attr', 'name', 'email');
    cy.wait(3000);
    cy.get('#ContactUsFrm_enquiry').type("Do you provide additional discount");
    cy.wait(3000);
    cy.get('.col-md-6 > .btn').click();
    cy.wait(3000);
    cy.get('.mb40 > :nth-child(3)').should('have.text','Your enquiry has been successfully sent to the store owner!');
    
    });
    
    
    })