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
    it.only('Chaining Assertions (2)', () => {
        cy.visit('https://dpg-ads-test.selfservice-advertising.dpgmedia.cloud/forgot-password')

        cy.get('form', {
            timeout: 5000
        }).within(($form) => {
            cy.get('input[name="email"]').type('dnad@mail.com')
        })
        cy.get('button[type="submit"]').click()

        cy.get('[data-testid="alertBox"]', {timeout:10000}).should('be.visible')
            .and('contain', 'Er is iets fout gegaan.')
            .and('have.css', 'font-family')

        //cy.contains('[data-testid="forgotPasswordSuccess"]', 'Herstel e-mail verstuurd').should('be.visible')
    })


    it('Interacting with elements ', () => {

    })

})