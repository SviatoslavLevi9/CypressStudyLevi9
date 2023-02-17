
describe('MasterCard Test', ()=>{
    it('Find button', ()=>{

        cy.visit('https://bilshe.mastercard.ua/')
        cy.get('[aria-label="увійти"]').click()
        
        cy.get('input[type="tel"]').type('636484290')
        cy.get('input[type="password"]').type('sava1992')

        cy.get('button[type="submit"]').click()



    })
})