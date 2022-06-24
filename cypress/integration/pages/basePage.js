class basePage{
    openURL(){
        cy.visit("https://automation.altibb.com/");
    }

    checkIfLinkContains(url){
        cy.url().should('include', url);
    }
}

module.exports = new basePage