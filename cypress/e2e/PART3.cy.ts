/// <reference types="cypress" />
/// <reference types="cypress-iframe" />

import {
    find
} from "cypress/types/lodash";

describe('Browser actions', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            if (err.message.includes('Error log in')) {
                return false
            }
        })
        cy.visit('/')
        cy.iframe('[title="SP Consent Message"]', {
            timeout: 30000
        }).should('be.visible');
        cy.iframe('[title="SP Consent Message"]').find('button:contains("Akkoord")').click();
    })

    it('Should load correct URL', () => {
        cy.visit('/')
        cy.iframe('[title="SP Consent Message"]', {
            timeout: 30000
        }).should('be.visible');
        cy.iframe('[title="SP Consent Message"]').find('button:contains("Akkoord")').click();
    })

    it('Task 2 + assert', () => {
        cy.visit('https://dpg-ads-test.selfservice-advertising.dpgmedia.cloud/auth')
        cy.get('form', {
            timeout: 5000
        }).within(($form) => {

            cy.get('input[name="email"]').type('s.yurkiv@gmail.com')
            cy.get('input[name="password"]').type('NewPass')
        })
        cy.get('button[type="submit"]').click()
        cy.contains('Incorrecte e-mailadres of wachtwoord.').should('be.visible')
    })


    it('Should open next web page', () => {
        cy.get('p').eq(0).should('contain', 'Zet in 3 stappen je advertentie online')
        cy.get('p').eq(2).should('contain', 'Adverteer al vanaf €1, per dag')
        cy.get('[data-testid="appHeader"] header > div');
        cy.get('[data-testid="appHeader"] header > div').eq(0);
        cy.get('[data-testid="appHeader"] header > div').eq(1);

    })

    it('Task3', () => {
        cy.visit('https://dpg-ads-test.selfservice-advertising.dpgmedia.cloud/direct/wizard/goal-and-template-type')
        cy.get('div.MuiFormGroup-root').parents()
        cy.get('div.MuiFormGroup-root').parent()
        cy.get('.css-whqcg').siblings()
        cy.get('label').siblings('.css-kd6x82')
        cy.get('div.MuiFormGroup-root').children()
        cy.get('.MuiFormGroup-root').find('label')

    })

    it('Task 4', () => {
        cy.visit('https://dpg-ads-test.selfservice-advertising.dpgmedia.cloud/')
        //1)
        cy.get('form').within(($form) => {

            cy.get('input[name="Achternaam"]')
            cy.get('input[name="Bedrijf"]')
        })
        //2 
        cy.get('.MuiGrid-container').parent('div').find('[alt="merk logo 3 bd"]').eq(1)
        //3
        cy.contains('[data-testid="nextButton"]', 'Maak direct een advertentie')
        cy.contains('div', 'Samen groeien met deze betrouwbare merken').siblings('.MuiGrid-grid-xs-12')
        //4
        cy.get('div.MuiGrid-root').parents()
        cy.get('div.MuiGrid-root').parent()
        cy.get('div.MuiGrid-root').children()
        cy.get('.MuiGrid-container').parents()
        cy.get('.MuiGrid-container').parent('div')



    })

    //Saving Subject of the Command 
    it('Then and wrap methods', () => {
        // cy.get('#contact-form').find('[name="E-mail"]').should('contain', '')
        // cy.get('#contact-form').find('[name="Telefoon"]').should('contain', '')
        // cy.get('#contact-form').find('h3').should('contain', 'Telefoonnummer').eq(3)

        //cypress
        cy.get('#contact-form').then(firstPosition => {
            const email = firstPosition.find('[name="E-mail"]').text()
            const telefoon = firstPosition.find('[name="Telefoon"]').text()
            expect(email).to.equal('')
            expect(telefoon).to.equal('')
        })
    })



    it('second tests(Olha)', () => {
        cy.get('[data-text="ja-ik-wil-beginnen"]').click();

        cy.get('[data-text="doelstelling-meer-bezoekers"]').find('[data-testid="infoModalButton"]').should('be.visible');
        cy.get('[data-text="doelstelling-meer-bezoekers"]').find('[data-testid="icon-traffic"]').should('exist');
        cy.get('[data-text="doelstelling-meer-bezoekers"]').find('input').should('have.value', 'traffic');
        cy.get('[data-text="doelstelling-meer-bezoekers"]').find('h4').should('have.text', 'Meer bezoekers');

        cy.get('[data-text="doelstelling-meer-bezoekers"]').then(moreVisitors => {
            // moreVisitors - JQuery object (not Cypress object)
            // find - JQuery method NOT Cypress method
            cy.wrap(moreVisitors).find('[data-testid="infoModalButton"]').should('be.visible');
            cy.wrap(moreVisitors).find('[data-testid="icon-traffic"]').should('exist');
            cy.wrap(moreVisitors).find('input').should('have.value', 'traffic');
            const title = moreVisitors.find('h4').text();
            cy.wrap(title).should('be.eq', 'Meer bezoekers');
        })


    })

    it('Task 5', () => {
        cy.get('[data-text="ja-ik-wil-beginnen"]').click();


        cy.get('[data-text="doelstelling-product-of-dienst-verkopen"]').find('[data-testid="infoModalButton"]').should('be.visible')
        cy.get('[data-text="doelstelling-product-of-dienst-verkopen"]').find('[data-testid="icon-promotion"]').should('exist')
        cy.get('[data-text="doelstelling-product-of-dienst-verkopen"]').find('input').should('have.value', 'promotion')
        cy.get('[data-text="doelstelling-product-of-dienst-verkopen"]').find('h4').should('have.text', 'Product of dienst verkopen')

        cy.get('[data-text="doelstelling-product-of-dienst-verkopen"]').then(moreVisitors2 => {

            cy.wrap(moreVisitors2).find('[data-testid="infoModalButton"]').should('be.visible')
            cy.wrap(moreVisitors2).find('[data-testid="icon-promotion"]').should('exist')
            cy.wrap(moreVisitors2).find('input').should('have.value', 'promotion')
            const title = moreVisitors2.find('h4').text()
            cy.wrap(title).should('be.eq', 'Product of dienst verkopen')
        })
    })

    it('Test 6', () => {
        cy.visit('/')
        //1) Check that H1 “Direct adverteren in jouw regio” title is visible;
        cy.contains('Direct adverteren in jouw regio').should('be.visible')
        //2) Check that button [data-text="starttegoed aanvragen"] has text “€100,- starttegoed aanvragen”
        cy.get('[data-text="starttegoed aanvragen"]').contains('€100,- starttegoed aanvragen')
        //3) Check that 10 elements (a) are shown here (tip: you can find title by text and use .siblings() or + selector; ‘have.length’): 
        cy.contains('div', 'Jouw advertentie is zichtbaar op deze websites').find('div').should('have.length', 14)
        //4) Check this element is collapsed:
        cy.get('#1-header').should('not.contain', 'Advertenties aangemaakt via Direct zijn zichtbaar op NU.nl, Indebuurt, het Algemeen Dagblad en alle regionale AD-titels zoals De Stentor, Eindhovens Dagblad, Brabants Dagblad, BN De Stem, Tubantia, De Gelderlander en PZC. Op basis van de door jou ingevoerde locatie, laten wij de advertentie zien op titels die daar gelezen worden.')

    })
    // Using .expect():
    // 1)	Check h3 Achternaam from [data-testid="contactForm"] has class “MuiTypography-root”
    //2)	Check input Achternaam is required
    //3)	Check input Achternaam does not have class “New”
    //4)	Check button [data-text="verzenden"] include text “zen”
    // 5)	Check contactForm has method POST
    // 6)	Check h3 E-mailadres has color rgb(0, 0, 0);

    it('expect 4', () => {
        cy.contains('button', 'Verzenden').then(buttonText => {
            expect(buttonText).to.contain('zen')
        })
    })

    it('expect 1', () => {
        cy.contains('h3', 'Achternaam').then(hasClass => {
            expect(hasClass).to.have.class('MuiTypography-root')
        })
    })

    // it.only('expect 2', () => {
    //     cy.get('[placeholder="Achternaam"]').then(required => {
    //         expect(required).to.not.be.empty
    //     })
    // })

    it('expect 3', () => {
        cy.get('[placeholder="Achternaam"]').then(notHaveClass => {
            expect(notHaveClass).to.not.have.class('New')
        })
    })

    it('expect 5', ()=>{
        cy.get('[data-testid="contactForm"]').then(methodPOST =>{
            expect(methodPOST).to.have.attr('method', 'post')
        })
    })

    it.only('expect 6', ()=>{
        cy.contains('h3', 'E-mailadres').then(colorRgb =>{
            expect(colorRgb).to.have.css('color', 'rgb(0, 0, 0)')
        })
    })










    // cy.get('#contact-form').then(firstPosition =>{
    //     const email = firstPosition.find('[name="E-mail"]').text()
    //     const telefoon = firstPosition.find('[name="Telefoon"]').text()
    //          expect(email).to.equal('')
    //          expect(telefoon).to.equal('')
    //      })
});