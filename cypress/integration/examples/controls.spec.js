describe('Testing web controls', function() {

    beforeEach(()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    })

    it('testing checkboxes', function() {
        cy.get('#checkBoxOption1')
          .as('checkbox1')

        cy.get('@checkbox1')
          .check()
          .should('be.checked')
          .and('have.value', 'option1')

        cy.get('@checkbox1')
          .uncheck()
          .should('not.be.checked')

        cy.get('input[type="checkbox"]')
          .check(['option2', 'option3'])
    })

    
    it('testing selects', function() {

    })

})