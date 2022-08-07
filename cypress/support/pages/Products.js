/// <reference types="cypress" />

export class Products {
    constructor(){

    }

    producSelect (name) {
        cy.xpath(`//*[text()="${name}"]`).siblings('[type="button"]').click()
    };

    goToShoppingCat () {
        cy.get('#goShoppingCart').click()
    }
}