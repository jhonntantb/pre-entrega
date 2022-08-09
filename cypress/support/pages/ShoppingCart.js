/// <reference types="cypress" />

export class ShoppingCart {
    constructor () {}

    checkProductInListCartList (name, price) {
        cy.contains(name).should('have.attr','name').and('equal', name);
        cy.contains(name).siblings(`[name="${price}"]`).should('contain.text',`$${price}`); 
    }

    checkTotalPriceOfProducts (totalPrice) {
        cy.xpath('//button[text()="Show total price"]').should('exist').click()
        cy.get('p#price').invoke('text').then((text) =>{
            expect(text).is.equal(totalPrice)
        })
    }
}