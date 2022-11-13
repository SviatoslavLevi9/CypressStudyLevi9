/// <reference types="cypress" />
/// <reference types="cypress-iframe" />

describe('Browser actions', ()=>{
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            if (err.message.includes('Error log in')) {
                return false
              }
        })
    })
    it('Should load correct URL',()=>{
        cy.visit('/')
        cy.iframe('[title="SP Consent Message"]', {timeout: 30000}).should('be.visible');
        cy.iframe('[title="SP Consent Message"]').find('button:contains("Akkoord")').click();
    })
    it('Should open next web page',()=>{
        cy.visit('/', { timeout:30000 })
        //cy.visit('/')
        cy.get('p').eq(0).should('contain', 'Zet in 3 stappen je advertentie online')
        cy.get('p').eq(2).should('contain', 'Adverteer al vanaf €1, per dag')
    })
});