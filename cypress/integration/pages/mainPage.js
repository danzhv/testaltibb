class MainPage{
    clickDiscoverMedicalDropdown(){
        cy.get('[href="#"][data-even-name="Menu Opened"]').click();
    }
    clickMedicalVideosLink(){
        cy.get('[href="#"][data-even-name="Menu Opened"] ~ ul>li:nth-child(5)>ul>li:nth-child(1)>a').click();
    }
    

}

module.exports = new MainPage