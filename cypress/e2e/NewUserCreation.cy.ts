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





    it.only('New User Creation', () => {

        const imageLogoFile = 'Logo_wood.jpg'

        const imageNativeFile = 'WoodmanCrafts_2000.jpg'

        cy.visit('https://dpg-ads-stage-nl.selfservice-advertising.dpgmedia.cloud/')

        cy.get('nav button[type="submit"]:contains("Maak een advertentie")').click()


       // cy.url().should('contain', '/direct/wizard/goal-and-template-type')

        cy.get('input[value="attention"]').check()

        cy.get('p:contains("Kies het type advertentie ontwerp") + [role="radiogroup"]').should('be.visible')

        cy.get('div[role="radiogroup"]').find('[value="prepared"]').check()

        cy.get('button[type="submit"]').eq(1).should('contain', 'Volgende stap').click()
        


        //cy.url().should('contain', '/direct/wizard/template')

        cy.get('input[placeholder="https://zomercampagne.nl"]').type('https://www.dpgmedia.nl/adverteren')



        cy.get('input[name="nativeImage"]').attachFile(imageNativeFile)

        cy.get('input[name="nativeImageLogo"]').attachFile(imageLogoFile)

        cy.get('input[placeholder="Vul hier een passende titel in"]').type('New Title')

        cy.get('input[placeholder="Vul bedrijfsnaam in"]').type('New Sponsored by')

        cy.get('textarea[placeholder="De tekst van je advertentie"]').type('Hello World')

        cy.get('input[name="callToAction"]').type('New Call to Action')

        cy.get('input[name="name"]').type('New TEST name')

        cy.get('button[type="submit"]').eq(1).click()

        cy.get('input[name="location"]').type('Amsterdam')

        cy.get('.pac-container', {
            timeout: 25000
        }).should('be.visible')

        cy.get('.pac-item:contains("Nederland")').eq(0).click()

        cy.get('div[role="radiogroup"]').find('[name="gender"]').eq(1).check()

        cy.get('input[name="age"]').eq(1).check()

        cy.get('[data-testid="datePicker-endDate"]').click()

        cy.get('.DayPicker-Month', {

            timeout: 15000

        }).should('be.visible')

        cy.get('[aria-selected="true"]').click()

        cy.get('[data-testid="radioExtended-recommended"] input').check()

        cy.get('button[type="submit"]').click()

        cy.wait(1000)

        cy.get('button[type="submit"]').click()

        cy.get('form').find('h2').eq(0).should('have.text', 'Inloggen')

        cy.get('form').find('h2').eq(1).should('have.text', 'Nieuw bij Direct?')

        // You should change your email because with the existing email, this test will fall

        cy.get('input[name="name"]').eq(0).type(signUpData.name)

        cy.get('input[name="email"]').eq(1).type(signUpData.email)


        cy.get('button[type="submit"]').eq(1).should('contain', 'Creeër een account').click()


        cy.get('input[name="companyName"]').type('Levi9')

        cy.get('input[name="kvk"]').type('34224746')

        cy.get('input[name="phoneNumber"]').type('2345666484290')

        cy.get('input[name="password"]').type('Sava1992!')

        cy.get('input[name="paymentMethod"]').eq(0).check()

        cy.get('div').find('[aria-haspopup="listbox"]').click()

        cy.get('ul').find('[data-value="ideal_REVOLT21"]').click()

        cy.get('input[name="conditions"]').check()

        cy.get('button[type="submit"]').should('contain', 'Creeër een account').click().pause()

        cy.wait(30000)

        cy.get('input[value="paid"]').check()

        cy.get('button').should('contain', 'Continue').eq(0).click()

        cy.wait(20000)

    })







})