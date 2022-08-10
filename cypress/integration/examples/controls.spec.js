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

    it('testing static dropdowns', function() {
      cy.get('select')
        .select('Option2')
        .should('have.value', 'option2')
    })

    it('testing dynamic dropdowns', function() {
      cy.get('#autocomplete')
        .type('co')
      cy.get('li>div')
        .contains('Colombia')
        .click()
      cy.get('#autocomplete').should('have.value', 'Colombia')
    })

    it('handling visible and invisible elements', function(){
      cy.get('#displayed-text').should('be.visible')
      cy.get('#hide-textbox').click()
      cy.get('#displayed-text').should('not.be.visible')
      cy.get('#show-textbox').click()
      cy.get('#displayed-text').should('be.visible')
    })

    it('testing radio buttons', function(){
      cy.get('input[value="radio2"]')
        .check()
        .should('be.checked')
    })

})