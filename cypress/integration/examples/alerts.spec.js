describe('Testing Alerts And Pop Ups', function() {

    beforeEach(()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    })

    it('testing alerts', function() {
        cy.get('#alertbtn')
          .click()
        cy.get('#confirmbtn')
          .click()
        cy.on('window:alert', ( str )=> {
            expect(str).to.be.equal('Hello , share this practice page and share your knowledge')
        })
        cy.on('window:confirm', ( str )=> {
            expect(str).to.be.equal('Hello , Are you sure you want to confirm?')
        })
    })

    it('other tab testing', function(){
       
        cy.get('#opentab').invoke('removeAttr', 'target').click()
        cy.url().should('include', 'https://www.rahulshettyacademy.com/')
        cy.go('back')
        cy.url().then((url)=> {
            expect(url).to.be.equal('https://rahulshettyacademy.com/AutomationPractice/')
        })
        
    })

})