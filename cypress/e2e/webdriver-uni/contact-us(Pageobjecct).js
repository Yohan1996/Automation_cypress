import Homepage_PO from '../../support/pageObjects/webdriver-uni/Homepage_PO'
import Contact_Us_PO from '../../support/pageObjects/webdriver-uni/Contact_Us_PO'

/// <reference types= "Cypress" />

describe("Test Contact Us form via WebdriverUni", () => {
    const homepage_PO = new Homepage_PO();
    const contact_Us_PO = new Contact_Us_PO();

    before(function () {
      cy.fixture("example").then(function (data) {
        //this.data = data;
        globalThis.data = data;
      });
    });

    beforeEach(function () {
   
        //const homepage_PO = new Homepage_PO();
        homepage_PO.visitHomepage();
        homepage_PO.clickOn_ContactUs_Button();
      });

      it("Should be able to submit a successful submission via contact us form", () => {
        cy.document().should("have.property", "charset").and("eq", "UTF-8");
        cy.title().should("include", "WebDriver | Contact Us");
        cy.url().should("include", "contactus");
        //const contact_Us_PO = new Contact_Us_PO();
        contact_Us_PO.contactForm_Submission(Cypress.env("first_name"), data.last_name, data.email, "How can I learn Cypress?", "h1", "Thank You for your Message!");
      
      });
    
      it("Should not be able to submit a successful submission via contact us form as all fields are required", () => {
        //const contact_Us_PO = new Contact_Us_PO();
        contact_Us_PO.contactForm_Submission(data.first_name, data.last_name," ", "How can I learn Cypress?", "body", "Error: Invalid email address")
      
    
    });
    });
    
    
    
