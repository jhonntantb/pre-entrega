/// <reference types="cypress" />

export class Home {
    constructor () {}

    selectOnlineShowModule () {
        cy.get("#onlineshoplink").click()
    }
}