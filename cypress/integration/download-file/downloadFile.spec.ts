// downloadFile.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
/// <reference types="cypress-downloadfile"/>
describe("downloadfile", ()=> {

    it("downlaodfileTests", () => {

       // cy.log("firsttest");
    
        cy.downloadFile('https://www.learningcontainer.com/wp-content/uploads/2020/04/sample-text-file.txt',
        'cypress/downloads', 'test.txt');
    })
})