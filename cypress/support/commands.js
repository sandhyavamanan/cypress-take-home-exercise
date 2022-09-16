
// custom command to visit google translator url
Cypress.Commands.add('visitGoogleTranslator',() =>{
    cy.visit('https://translate.google.com/');
})