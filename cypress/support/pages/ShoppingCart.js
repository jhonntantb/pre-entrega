/// <reference types="cypress" />

export class ShoppingCart {
    constructor () {}

    verifyProductExist (name) {
        cy.contains(name).should('exist');
    }

    verifyTotalPrice (totalPrice) {
        cy.xpath('//button[text()="Show total price"]').should('exist').click()
        cy.get('p#price').invoke('text').then((text) =>{
            expect(text).is.equal(totalPrice)
        })
    }
}