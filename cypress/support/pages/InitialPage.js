/// <reference types="cypress" />

export class InitialPage {
    constructor(){
        this.userInput = "#user";
        this.passwordInput = "#pass";
        this.buttonSubmitForm ="#submitForm";
        this.linkChangeForm ="#registertoggle"
    }

    login (user, password) {
        cy.visit("/");
        cy.get(this.linkChangeForm).dblclick()
        cy.get(this.userInput).type(user)
        cy.get(this.passwordInput).type(password)
        cy.get(this.buttonSubmitForm).click()
    }
}