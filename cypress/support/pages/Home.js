/// <reference types="cypress" />

export class Home {
    constructor () {}

    selectOnlineShopModule () {
        cy.get("#onlineshoplink").click()
    }
}