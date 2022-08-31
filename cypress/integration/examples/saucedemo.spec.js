describe('Testing saucedemo', function() {

    before(()=>{
        cy.visit("https://www.saucedemo.com/")
        cy.get('[data-test="username"]').type('performance_glitch_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
    })

    it('testing saucedemo', function() {
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]')
          .click()
        cy.get('.shopping_cart_badge').should('have.text', 1)
    })
})