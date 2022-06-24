class MainPage{
    clickDiscoverMedicalDropdown(){
        cy.get('[href="#"][data-even-name="Menu Opened"]').click();
    }
    freeSuggestedQuestionsAndAnswersSection(){
        return cy.get('[class="title-container"]');
    }
    clickMedicalVideosLink(){
        cy.get('[href="#"][data-even-name="Menu Opened"] ~ ul>li:nth-child(5)>ul>li:nth-child(1)>a').click();
    }
    clickMedicalArticlesLink(){
        cy.get('[href="#"][data-even-name="Menu Opened"] ~ ul>li:nth-child(4)>ul>li:nth-child(4)>a').click({force: true} );
    }
    clickMedicalNewsLink(){
        cy.get('[href="#"][data-even-name="Menu Opened"] ~ ul>li:nth-child(4)>ul>li:nth-child(3)>a').click();
    }
    clickShowAllQuestionsButton(){
        cy.get('[class="show-all-questions-button"]').click({force: true});
    }
    clickShareLink(){
        cy.get('[class="title-section"]>div>div>div>div:nth-child(2)').click({force: true});
    }
    shareWithSocialLink(index){    //facebook, twitter, linkedin, instagram
        return cy.get(`[id="share-section"]>div>div>section>article>div:nth-child(${index})>a`);
    }
    shareWithWhatsAppLink(){
        return cy.get('[class="title-section"]>div>div>div>div>a');
    }
    findADoctorHeader(){
        return cy.get('[class="main-search-header"]');
    }
    clickAppointmentButton(){
        cy.get('[data-event-name="Booking CTA Clicked"]').click({force: true});
    }
    clickSecondVideoHeader(){
        cy.xpath('//div[@id="right_bar_content"]/article[2]/div/a/h2').click({force: true});
    }
    infectiousDiseasesMedicalQuestionsAndAnswersHeader(){
        return cy.get('[class="page-title"]');
    }
    clickFirstNewsArticle(){
        cy.get('[class="news-article-item-container"]:nth-child(2)>div:nth-child(1)>a:nth-child(1)').click({force: true});
    }
    medicalNewsAndArticlesTitle(){
        return cy.get('[class*="primary"]');
    }
    medicalNewsAndArticlesContent(index){
        return cy.get(`div[class="container"]>div[class="row"]:nth-child(2)>div:nth-child(${index})`);
    }
    latestMedicalVideosTitle(){
        return cy.get('[class="primary"]');
    }
    latestMedicalVideo(){
        return cy.get('[class="video-box"]');
    }
    clickTalkToADoctorButton(){
        cy.get('[class="news-article-view-inread-cta"]>a:nth-child(1)').click({force: true});
    }
    talkToADoctorTitle(){
        return cy.get('[class="ask-question-title"]');
    }
    clickFirstArticle(){
        cy.get('article:nth-child(5)>div:nth-child(1)>a:nth-child(1)').click({force: true});
    }
    clickSecondArticle(){
        cy.get('article:nth-child(6)>div>a[class="id-32-1 d-block"]').click({force: true});
    }
    questionBoxArticle(index){
        return cy.get(`[class="question-wrapper"]>article:nth-child(${index})`);
    }
    interalMedicineQuestionsAndAnswersHeader(){
        return cy.get('[class="page-title"]');
    }
    clickUsefulContentLink(){
        cy.get('[class="useful-content-left-side"]>a:nth-child(1)').click();
    }
}

module.exports = new MainPage