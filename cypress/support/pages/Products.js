/// <reference types="cypress" />

export class Products {
    constructor(){

    }

    addProducToCart (name) {
        cy.xpath(`//*[text()="${name}"]`).siblings('[type="button"]').click()
        cy.alertHandling();
    };

    goToShoppingCart () {
        cy.get('#goShoppingCart').click()
    };
}