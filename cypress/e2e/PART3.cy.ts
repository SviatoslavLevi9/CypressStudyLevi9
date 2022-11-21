/// <reference types="cypress" />
/// <reference types="cypress-iframe" />

describe('Browser actions', ()=>{
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            if (err.message.includes('Error log in')) {
                return false
              }
        })
        cy.visit('/')
        cy.iframe('[title="SP Consent Message"]', {timeout: 30000}).should('be.visible');
        cy.iframe('[title="SP Consent Message"]').find('button:contains("Akkoord")').click();
    })

    it('Should load correct URL',()=>{
        cy.visit('/')
        cy.iframe('[title="SP Consent Message"]', {timeout: 30000}).should('be.visible');
        cy.iframe('[title="SP Consent Message"]').find('button:contains("Akkoord")').click();
    })

    it('Task 2 + assert',()=>{
        cy.visit('https://dpg-ads-test.selfservice-advertising.dpgmedia.cloud/auth')
        cy.get('form', {timeout:5000}).within(($form)=>{

            cy.get('input[name="email"]').type('s.yurkiv@gmail.com')
            cy.get('input[name="password"]').type('NewPass')
        })
        cy.get('button[type="submit"]').click()
        cy.contains('Incorrecte e-mailadres of wachtwoord.').should('be.visible')
    })


    it('Should open next web page',()=>{
        cy.get('p').eq(0).should('contain', 'Zet in 3 stappen je advertentie online')
        cy.get('p').eq(2).should('contain', 'Adverteer al vanaf €1, per dag')
        cy.get('[data-testid="appHeader"] header > div');
        cy.get('[data-testid="appHeader"] header > div').eq(0);
        cy.get('[data-testid="appHeader"] header > div').eq(1);

    })

    it('Task3', ()=>{
        cy.visit('https://dpg-ads-test.selfservice-advertising.dpgmedia.cloud/direct/wizard/goal-and-template-type')
        cy.get('div.MuiFormGroup-root').parents()
        cy.get('div.MuiFormGroup-root').parent()
        cy.get('.css-whqcg').siblings()
        cy.get('label').siblings('.css-kd6x82')
        cy.get('div.MuiFormGroup-root').children()
        cy.get('.MuiFormGroup-root').find('label')       

    })

    it.only('Task 4',()=>{
        cy.visit('https://dpg-ads-test.selfservice-advertising.dpgmedia.cloud/')
        cy.get('form').within(($form)=>{
        
            cy.get('input[name="Achternaam"]')
            cy.get('input[name="Bedrijf"]')
            })
            //cy.contains('img').eq(2)
            cy.contains('[data-testid="nextButton"]','Maak direct een advertentie')
            cy.get('div.MuiGrid-root').parents()
            cy.get('div.MuiGrid-root').parent()
            cy.get('div.MuiGrid-root').children
            cy.get('.MuiGrid-container').parent('div').find('[alt="merk logo 3 bd"]')
            cy.get('.MuiGrid-container').parents()
            cy.get('.MuiGrid-container').parent('div')
            cy.contains('div','Samen groeien met deze betrouwbare merken').siblings('.MuiGrid-grid-xs-12')


    })


});