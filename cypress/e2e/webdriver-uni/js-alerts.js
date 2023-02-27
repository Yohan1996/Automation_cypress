/// <reference types= "Cypress" />

describe("Hanmdle js alerts", () =>{
    it("Confirm js alert contains the correct text", () => {
 
    cy.visit("http://www.webdriveruniversity.com/");

    cy.get('#popup-alerts').invoke('removeAttr','target').click({force:true})

    cy.get('#button1').click();


   //str - parameter
   cy.on('window:alert',(str) =>
   {
expect(str).to.equal('I am an alert box!')
    })
  
});
   it("Confirm js alert contains the correct text when clicking ok", () => {
 
    cy.visit("http://www.webdriveruniversity.com/");

    cy.get('#popup-alerts').invoke('removeAttr','target').click({force:true})

    cy.get('#button4').click();

   cy.on('window:alert',(str) =>
   {
return true;
   })
   cy.get('#confirm-alert-text').contains('You pressed OK!');

});


it.only("Validate js confirm alert box using a stub", () => {
 
    cy.visit("http://www.webdriveruniversity.com/");

    cy.get('#popup-alerts').invoke('removeAttr','target').click({force:true})

const stub = cy.stub()
cy.on('window:confirm', stub)

cy.get('#button4').click().then(() => {
expect(stub.getCall(0)).to.be.calledWith('Press a button!')
}).then(() => {
return true;

}).then(() => {
    cy.get('#confirm-alert-text').contains('You pressed OK!');

})

});

   
})
