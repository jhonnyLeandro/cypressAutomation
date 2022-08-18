describe('Testing Tables', function() {

    beforeEach(()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    })

    it('testing tables', function() {
        cy.get('tr td:nth-child(2)').each(($el, index, $list) => {
            const text = $el.text()
            if (text.includes('python')){
                cy.get('tr td:nth-child(2)').eq(index).next().then((price) => {
                    const expectedValue = price.text()
                    expect(expectedValue).to.be.equal('25')
                })
            }
        })
    })
})