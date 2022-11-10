/// <reference types="cypress" />
/// <reference types="cypress-iframe" />


describe('Our first suite', ()=>{
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            if (err.message.includes('Error log in')) {
                return false
              }
        });

        cy.visit('/'); // visit our site

        cy.iframe('[title="SP Consent Message"]', {timeout: 30000}).should('be.visible');

        cy.iframe('[title="SP Consent Message"]').find('button:contains("Akkoord")').click();
    });

it('first test', ()=>{

    
    cy.contains('Inloggen').click() // will find the text and click on it



    // by Tag Name
    cy.get('input')

    //by ID (# = id)
    cy.get('#mui-11')

    //by Class name (. = class name)
    cy.get('.MuiOutlinedInput-input')

    //by Attribute name ([] = attribute)
    cy.get('[placeholder]')

    // by Attribute name and value ([*** ="name of the attribute"])
    cy.get('[placeholder="gebruiker@emailadres.nl"]')

    //by Classe value ([*** ="name of value"])
    cy.get('[class="MuiOutlinedInput-input MuiInputBase-input css-z0sprp"]')

    //by Tag name and Attribute with value
    cy.get('input[placeholder="gebruiker@emailadres.nl"]')

    // by two different Attributes
    cy.get('[placeholder="gebruiker@emailadres.nl"][name="email"]')

    //by tag name, Attribute with value, ID and Class name
    cy.get('input[placeholder="gebruiker@emailadres.nl"]#mui-11.MuiOutlinedInput-input')

    //The most recommended way by Cypress
    //cy.get('[data-cy="name of your own tag"]')

    //by element inside element (el el)
   

    // by -	child element (>)
    cy.get('nav.MuiGrid-root > div').children().should('have.length', 6) //find element with 6 childrens

    //by -	siblings (+)
    cy.get('div.MuiGrid-grid-xs-9').siblings 
    //питання чому такий локатор як в коді показує 13 хоча він бльш точний, h5.MuiTypography-root а такий показує 6 хоча він не такйи точний як попередній

    // by data test id attribute
    cy.get('[data-testid="nextButton"]')
})

it.only('Second test', ()=>{
    
    cy.contains('Inloggen').click()
    cy.contains('Inloggen')
    //cy.contains('[class="MuiTypography-root]','Inloggen')
    cy.get('[name="email"]')
        .parents('form')
        .find('button')
        .should('contain', 'Inloggen')
        .parents('form')
        .find('[href="/forgot-password"]')
        .click()
    cy.contains('div','Inloggen')

})

    



})