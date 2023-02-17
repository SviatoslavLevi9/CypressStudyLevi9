import 'cypress-file-upload'


import signUpData from '../fixtures/signUp.json'

describe('Browser actions', () => {


    // beforeEach(() => {
    //     cy.on('uncaught:exception', (err, runnable) => {

    //         if (err.message.includes('Error log in')) {

    //             return false

    //         }
    //     })
    //     cy.visit('/')

    //     cy.iframe('[title="SP Consent Message"]', {

    //         timeout: 30000

    //     }).should('be.visible');

    //     cy.iframe('[title="SP Consent Message"]').find('button:contains("Akkoord")').click();
        
    // })






    it.only('New User Login', () => {


        cy.visit('/auth')

        cy.login(signUpData.email, signUpData.pass)

    })







})