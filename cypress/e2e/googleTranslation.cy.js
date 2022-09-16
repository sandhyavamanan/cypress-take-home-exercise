/// <reference types="cypress" />

import { translationPage } from "../pages/translation";

context('Testing google translation application',()=>{
//TC#2 from the sheet
    it('Verify the result when user selects different source and translation language',()=>{
        cy.visitGoogleTranslator();
        translationPage.selectSourceLanguage();
        translationPage.selectTranslationLanguage();
        translationPage.textToBeTranslated();
        translationPage.validateTranslatedText();
    });
//TC#3 from the sheet
    it('Verify the result when swap language button is clicked ',()=>{
        cy.get('.VfPpkd-Bz112c-Jh9lGc').eq(1).click({force: true});
        translationPage.verifySwapLanguage();
    });

//TC#4 from the sheet
    it("Verify the result when user clicks(X) button in the source text",()=>{
        translationPage.clearingInputField();
    });

//TC#9&10 from the sheet
    it("Verify the result when user clicks screen keyboard and enters the text",()=>{
        translationPage.typeUsingScreenKeyboard();
    });
})