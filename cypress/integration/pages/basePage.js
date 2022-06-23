class basePage{
    openURL(){
        cy.visit("https://automation.altibb.com/");
    }
}

module.exports = new basePage