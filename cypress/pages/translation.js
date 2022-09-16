export const translationPage = {
    selectSourceLanguage(){
        cy.get('.zQ0atf').first().click({force: true});
        cy.fixture('translationData').then((translationData)=>{
            cy.get('.OoYv6d').find('.yFQBKb').eq(0).type(translationData.sourceLanguage);
        });
        cy.get('.hBxMjb').click({force: true});
    },

    selectTranslationLanguage(){
        cy.get('.zQ0atf').eq(1).click({force: true});
        cy.fixture('translationData').then((translationData)=>{
            cy.get('.ykTHSe').find('.yFQBKb').eq(0).type(translationData.translationLanguage,{force: true});
        });
        cy.get('.hBxMjb').click({force: true});
    },

    textToBeTranslated(){
        cy.fixture('translationData').then((translationData)=>{
            cy.get('textarea').type(translationData.initialText);
        });
    },

    validateTranslatedText(){

        cy.fixture('translationData').then((translationData)=>{
            cy.get('.Q4iAWc').should('have.text',translationData.expectedResult);
        });
    },

    verifySwapLanguage(){
        cy.get('.dePhmb').click();
        cy.fixture('translationData').then((translationData)=>{
            cy.get('.eyKpYb').find('.J0lOec').eq(0).should('contain',translationData.initialText);
        });
    },

    clearingInputField(){
        cy.get('.DVHrxd').click();
    },

    typeUsingScreenKeyboard(){
        cy.get('*[class^="ita-kd-icon-button"]').eq(0).click();
        cy.get('#K16').click();
        cy.get('#K72').click();
        cy.get('#K73').click();
        cy.get('#K16').click();
        cy.get('#K49').click();
    }
}