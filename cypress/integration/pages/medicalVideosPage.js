class MedicalVideosPage{
    clickSecondVideoHeader(){
        cy.xpath('//div[@id="right_bar_content"]/article[2]/div/a/h2').click({force: true});
    }
    clickShareLink(){
        cy.get('[id="js-gtm-observer"]>div>div>[id="social"]').click({force: true});
    }
    shareWithSocialLink(index){    //facebook, twitter, linkedin, instagram
        return cy.get(`[id="js-gtm-observer"]>div>div>[id="toggle-menu"]>article>div:nth-child(${index})>a`);
    }
    shareWithWhatsAppLink(){
        return cy.get('[class="id-34-1"]>a');
    }
    clickAppointmentButton(){
        cy.get('[class*="ask-doctor"]').click({force: true});
    }
    findADoctorHeader(){
        return cy.get('[class="main-search-header"]');
    }
    freeSuggestedQuestionsAndAnswersSection(){
        return cy.get('[class="title-container"]');
    }
    clickShowAllQuestionsButton(){
        cy.get('[class="show-all-questions-button"]').click({force: true});
    }
    infectiousDiseasesMedicalQuestionsAndAnswersHeader(){
        return cy.get('[class="page-title"]');
    }
    medicalNewsAndArticlesTitle(){
        return cy.get('[class="primary-article-title"]');
    }
    medicalNewsAndArticlesContent(index){
        return cy.get(`[id="suggested-articles-news"]>div>div[class="row"]>div:nth-child(${index})`);
    }
    latestMedicalVideosTitle(){
        return cy.get('[class="primary"]');
    }
    latestMedicalVideo(){
        return cy.get('[class="video-box"]');
    }
}

module.exports = new MedicalVideosPage