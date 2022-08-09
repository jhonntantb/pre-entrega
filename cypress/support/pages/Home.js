/// <reference types="cypress" />

export class Home {
    constructor () {}

    // le agregue timeout por el tienpo de respuest del servidor 
    selectOnlineShopModule () {
        cy.get("#onlineshoplink", {timeout: 20000}).click()
    }
}