/// <reference types= "cypress" />


describe("Inspect Automation Test Store items using chain of commands", () =>{
    it("Click on the first item using item header", () => { 
    cy.visit("https://www.automationteststore.com/");
    cy.get('#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .fixed_wrapper > .fixed > .prdocutname').click();
    
      });

    it("Click on the first item using item text", () => { 
    cy.visit("https://www.automationteststore.com/");

    //.prdocutname - is a commom class name for all items
    //Skinsheen Bronzer Stick - name of first item
    cy.get('.prdocutname').contains('Skinsheen Bronzer Stick').click();
        
     });


    it("Click on the first item using item index", () => { 
    cy.visit("https://www.automationteststore.com/");

      //S.fixed_wrapper - is a commom div class
      //.prdocutname - is a commom class name for all items
    
    cy.get('.fixed_wrapper').find('.prdocutname').eq(0).click();
    
      });      
    
    




    })