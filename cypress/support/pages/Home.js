/// <reference types="cypress" />

export class Home {
    constructor () {}

    // Agregue timeout por el tiempo de respuesta del servidor al iniciar sesión
    selectOnlineShopModule () {
        cy.get("#onlineshoplink", {timeout: 20000}).click()
    }
}