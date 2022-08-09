describe('Sample Tests', function(){
    it('Firts test', function(){
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword')
          .type('ca')
        cy.get('.products>.product')
          .should('have.length',4)
          .each(($el)=>{
            if($el.find('.product-name').text().includes('Cashews')){
                cy.wrap($el).find('button').click()
            }
        });
        cy.get('a.cart-icon').click()
        cy.get('.cart-preview.active button').click()
        cy.get('table.cartTable').should('be.visible')
        cy.get('.products')
          .find('button').eq(1).click()
    })
})