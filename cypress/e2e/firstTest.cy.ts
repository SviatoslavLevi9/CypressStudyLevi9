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

    
    cy.contains('Inloggen').click()



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
    cy.get('[data-cy="name of your own tag"]')
})


})