import {
    contains
} from "cypress/types/jquery"
import {
    eq
} from "cypress/types/lodash"
import {
    CID
} from "multiformats/cid"
import 'cypress-file-upload'

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
        cy.visit('https://dpg-ads-stage-nl.selfservice-advertising.dpgmedia.cloud/auth')
        cy.login('demoadmin@yopmail.com', 'Sava1992!')
        //`user-${Math.floor(Math.random() * 1000)}@mail.com`
        cy.get('div').find('[tabindex="0"]').should('contain', 'Je account').eq(0).click()
        cy.get('div').find('[role="button"]').should('contain', 'Uitloggen').eq(1).click()
        cy.url().should('contain', 'https://dpg-ads-stage-nl.selfservice-advertising.dpgmedia.cloud/')
        cy.contains('Inloggen').should('be.visible')

    })

    it.only('New User Login', () => {
        const imageLogoFile = 'Logo_wood.jpg'
        const imageNativeFile = 'WoodmanCrafts_2000.jpg'

        cy.visit('https://dpg-ads-stage-nl.selfservice-advertising.dpgmedia.cloud/')
        cy.get('button[type="submit"]').should('contain', 'Maak een advertentie').eq(0).click()
        cy.url().should('contain', 'https://dpg-ads-stage-nl.selfservice-advertising.dpgmedia.cloud/direct/wizard/goal-and-template-type')
        cy.get('input[value="attention"]').check()
        cy.get('div[role="radiogroup"]').find('[value="prepared"]').check().wait(2000)
        cy.get('button[type="submit"]').click()
        cy.url().should('contain', 'https://dpg-ads-stage-nl.selfservice-advertising.dpgmedia.cloud/direct/wizard/template')
        cy.get('input[placeholder="https://zomercampagne.nl"]').type('https://www.dpgmedia.nl/adverteren')


        cy.get('input[name="nativeImage"]').attachFile(imageNativeFile)
        cy.get('input[name="nativeImageLogo"]').attachFile(imageLogoFile)
        cy.get('input[placeholder="Vul hier een passende titel in"]').type('New Title')
        cy.get('input[placeholder="Vul bedrijfsnaam in"]').type('New Sponsored by')
        cy.get('textarea[placeholder="De tekst van je advertentie"]').type('Hello World')
        cy.get('input[name="callToAction"]').type('New Call to Action')
        cy.get('input[name="name"]').type('New TEST name')
        cy.get('button[type="submit"]').click()

        cy.get('input[name="location"]').type('Amsterdam')
        cy.get('div').find('.pac-item').should('contain', 'Amsterdam').eq(0).click()
        cy.get('div[role="radiogroup"]').find('[name="gender"]').eq(1).check()
        cy.get('div').find('input[name="age"]').eq(1).check()
        cy.get('div').find('[data-testid="datePicker-endDate"]').click()
        cy.get('.DayPicker-Month', {timeout: 15000}).should('be.visible')
        cy.get('div').find('[aria-selected="true"]').click()
        cy.get('div').find('[name="budgetType"]').eq(1).check()
        cy.get('button[type="submit"]').click()
        cy.wait(1000)
        cy.get('button[type="submit"]').click()
        cy.get('form').find('h2').eq(0).should('have.text', 'Inloggen')
        cy.get('form').find('h2').eq(1).should('have.text', 'Nieuw bij Direct?')
        // You should change your email and user name because with the existing email, this test will fall
        cy.get('input[name="name"]').eq(0).type('NewRegressionUser1')
        cy.get('input[name="email"]').eq(1).type('NRU1@yopmail.com')
        
        cy.get('button[type="submit"]').eq(1).should('contain','Creeër een account').click()


        cy.get('input[name="companyName"]').type('Levi9')
        cy.get('input[name="kvk"]').type('34224746')
        cy.get('input[name="phoneNumber"]').type('2345666484290')
        cy.get('input[name="password"]').type('Sava1992!')
        cy.get('input[name="paymentMethod"]').eq(0).check()
        cy.get('div').find('[aria-haspopup="listbox"]').click()
        cy.get('ul').find('[data-value="ideal_REVOLT21"]').click()
        cy.get('input[name="conditions"]').check()
        cy.get('button[type="submit"]').should('contain','Creeër een account').click()
        cy.wait(50000)









    })
})