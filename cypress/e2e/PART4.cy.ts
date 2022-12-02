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

    it('Chaining Assertions (.and())', () => {
        cy.visit('https://dpg-ads-test.selfservice-advertising.dpgmedia.cloud/auth')
        cy.get('form').within(($form) => {

            cy.get('input[name="email"]').type('s.yurkiv@gmail.com')
            cy.get('input[name="password"]').type('NewPass')
        })
        cy.get('button[type="submit"]').click()
        cy.contains('Incorrecte e-mailadres of wachtwoord.').should('be.visible')
            .and('contain', 'Incorrecte e-mailadres of wachtwoord.')
    })
    // Мені потрібо тут використати if але я ще хз як це зробити, тоущо там може бути 2 перевірки.
    // Запусти даний тест декілька раз поки не вискочить .Er is iets fout gegaan.
    it('Chaining Assertions (2)', () => {
        cy.visit('https://dpg-ads-test.selfservice-advertising.dpgmedia.cloud/forgot-password')

        cy.get('form', {
            timeout: 5000
        }).within(($form) => {
            cy.get('input[name="email"]').type('dnad@mail.com')
        })
        cy.get('button[type="submit"]').click()

        cy.get('[data-testid="alertBox"]', {
                timeout: 10000
            }).should('be.visible')
            .and('contain', 'Er is iets fout gegaan.')
            .and('have.css', 'font-family')

        //cy.contains('[data-testid="forgotPasswordSuccess"]', 'Herstel e-mail verstuurd').should('be.visible')
    })


    // INTERACTING WITH ELEMENTS


    it('Interacting with elements: click ', () => {
        //cy.contains('Maak direct een advertentie').click()
        cy.visit('https://dpg-ads-test.selfservice-advertising.dpgmedia.cloud/about-us')
        cy.get('div').find('a[data-testid="externalLink"]').eq(0).click()



    })

    it('Interacting with elements: dbclick ', () => {
        cy.get('div').find('[aria-controls="1-content"]', {
            timeout: 5000
        }).dblclick()


    })


    it('Interacting with elements: Rightclick ', () => {

        cy.get('div').find('[alt="merk logo 5 tu"]').eq(0).rightclick()


    })

    it('Interacting with elements: type ', () => {
        cy.get('div').find('h5[data-text="inloggen"]').click()
        cy.get('input[name="email"]').type('Hello World')
    })

    it('Interacting with elements: clear ', () => {
        cy.get('div').find('h5[data-text="inloggen"]').click()
        cy.get('input[name="email"]').type('Hello World').clear()
    })

    it('Interacting with elements: check ', () => {
        cy.get('div').find('input[type="checkbox"]').check()
        cy.get('div').find('button[data-text="maak-een-advertentie"]').eq(0).click()
        cy.get('div').find('input[value="attention"]').check()
        cy.get('div').find('input[value="prepared"]').check()

    })
    it('Interacting with elements: Uncheck ', () => {
        cy.get('div').find('input[type="checkbox"]').check()
        cy.get('div').find('input[type="checkbox"]').uncheck()

    })

    it('Interacting with elements: Select', () => {
        cy.visit('https://dpg-ads-stage.selfservice-advertising.dpgmedia.cloud/')
        cy.get('div').find('h5[data-text="inloggen"]').click()
        cy.get('input[name="email"]').type('demoadmin@yopmail.com')
        cy.get('input[name="password"]').type('Sava1992!')
        cy.get('div').find('button[type="submit"]').click()
        cy.get('div').find('div[role="button"]').click()
        //we don't have any select class in the site(or I didn't find it)
        //cy.get('div').find('div[role="menu"]').select('role="menuitem"').should('have.value', 'Je gegevens')
    })

    // I will use the stage env 
    it('Task: use .click(), .check(), .uncheck(), .select(), .clear(), .type(), and work with table: ', () => {
        cy.visit('https://dpg-ads-stage.selfservice-advertising.dpgmedia.cloud/')
        cy.get('div').find('h5[data-text="inloggen"]').click()
        cy.wait(1000)

        cy.get('form').within(($form) => {
            cy.get('input[name="email"]').type('deemoadmin@yopmail.com')
            cy.get('input[name="password"]').type('Sava19921!')
            cy.get('button[type="submit"]').click()
            cy.contains('Incorrecte e-mailadres of wachtwoord.').should('be.visible')
            cy.get('input[name="email"]').clear().type('demoadmin@yopmail.com')
            cy.get('input[name="password"]').clear().type('Sava1992!')
        })

        cy.get('div').find('button[type="submit"]').click()
        cy.get('div').find('div[role="button"]').click()
        cy.get('div[role="menuitem"]').find('h5').should('contain', 'Je gegevens').eq(0).click()
        cy.url().should('contain', 'https://dpg-ads-stage.selfservice-advertising.dpgmedia.cloud/account-details')
        cy.get('button[data-testid="backButton"]').should('contain', 'Terug').click()
        cy.get('div').find('[role="row"]').should('have.length', 11)
        cy.wait(1000)
        cy.get('.MuiSelect-select', {
            timeout: 5000
        }).click()
        cy.get('ul').find('li[data-value="30"]').click()
        cy.get('div').find('[role="row"]').should('have.length', 31)
    })
            // You should run test above first
    it('Trigger', ()=>{
        cy.visit('https://dpg-ads-stage.selfservice-advertising.dpgmedia.cloud/advertisers/07311119-279f-4dfc-8b63-496d6fada798/performance-dashboard/844')
        cy.wait(1000)
        cy.get('g').find('circle[r="4"]').eq(1).trigger('mouseover').pause()
        debugger
        cy.get('div').find('[role="dialog"]').should('be.visible').debug()
        //cy.get('button[data-testid="backButton"]')
    })



})