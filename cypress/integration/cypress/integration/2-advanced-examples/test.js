
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

describe('Test Suite 1',function(){
it('Test case 1',function(){
    cy.visit('http://localhost:8888/Complete_assignment_web_page.html')
    cy.get('#Username').type('demo')
    cy.wait(3000)
    cy.get('#Password').type('demopassword')
    cy.wait(3000)
    cy.get('#loginbutton').click()
    console.log("clicked")
   // cy.get('#Username').within('//iframe[src="http://localhost:8888/Form_User_Name_Password.html"]').type('demoif')

    //cy.get('#Username').within(()=>{return cy.get('//iframe[src="http://localhost:8888/Form_User_Name_Password.html"]').type('demoif')})
    cy.wait(3000)
cy.get('iframe[src="http://localhost:8888/Form_User_Name_Password.html"]').then(function(ele){
let ifele=ele.contents().find('#Username')
cy.wrap(ifele).type('demo')
cy.wait(3000)
let ifele1=ele.contents().find('#loginbutton')
cy.wrap(ifele1).click()
})
cy.wait(3000)
cy.get('input[value="Male"]').click()
cy.wait(3000)
cy.get('input[value="U-19"]').click()
cy.wait(3000)
 cy.get('select[name="sport"]').select('Javelin')
cy.wait(3000)
cy.get('#btn').click()
cy.wait(3000)
 cy.get('select[name="indoorsport"]').select('Carrom')
cy.wait(3000)
cy.get('input[type="submit"]').click()

cy.get('a[href="https://cricbuzz.com"]').should('have.prop', 'href', 'https://cricbuzz.com/')
//cy.wait(3000)
//cy.get('a[href="https://cricbuzz.com"]').contains('Help').click()
//cy.get('a[href="https://cricbuzz.com"]').invoke('removeAttr', 'target').click()
//cy.wait(3000)
//cy.title().should('eq','T20 World Cup Cricket Score, Schedule, Latest News, Stats & Videos | Cricbuzz.com')

})

})



