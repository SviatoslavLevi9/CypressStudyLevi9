import 'cypress-file-upload'


import signUpData from '../fixtures/signUp.json'

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

    it('Login by an ADMIN', () => {
        cy.visit('/auth')
        cy.login('demoadmin@yopmail.com', 'Sava1992!')
        //`user-${Math.floor(Math.random() * 1000)}@mail.com`
        cy.get('[data-testid="section-managerAdvertisementsPage"]', {
            timeout: 10000
        }).should('be.visible')

        cy.get('[role="button"]:contains("Je account")', {
            timeout: 15000
        }).click()

        cy.get('[role="menu"]').should('be.visible')

        cy.get('[role="menuitem"]:contains("Uitloggen")').should('be.visible').click()

        cy.url().should('contain', 'https://dpg-ads-stage-nl.selfservice-advertising.dpgmedia.cloud/')
        cy.contains('Inloggen').should('be.visible')

    })
})