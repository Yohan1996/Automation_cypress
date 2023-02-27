describe("Verify checkboxes", () => {
    it("Check and validate checkbox", () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})

//c# is a value of the dropdown
        cy.get('#dropdowm-menu-1').select('c#')
        cy.get('#dropdowm-menu-2').select('testing')
        cy.get('#dropdowm-menu-3').select('jquery')

    });


})