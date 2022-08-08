/// <reference types="cypress" />

export class ShoppingCart {
    constructor () {}

    verifyProductExist (name, price) {
        cy.contains(name).should('exist').and('have.id', 'productName');
        cy.contains(name).siblings(`[name="${price}"]`).should('exist').and('have.id',"productPrice");
    }

    verifyTotalPrice (totalPrice) {
        cy.xpath('//button[text()="Show total price"]').should('exist').click()
        cy.get('p#price').invoke('text').then((text) =>{
            expect(text).is.equal(totalPrice)
        })
    }
}