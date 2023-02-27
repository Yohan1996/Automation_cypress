describe("Verify checkboxes", () => {
    it("Check and validate checkbox", () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})

//There are two ways
//type - radio is common for all radio buttons so we have to select one to check
        cy.get('#radio-buttons').find("[type='radio']").first().check()


        cy.get('#radio-buttons').find("[type='radio']").eq(1).check()

    });


})