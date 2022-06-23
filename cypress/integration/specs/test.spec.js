import basePage from '../pages/basePage';
import mainPage from '../pages/mainPage';
import medicalVideosPage from '../pages/medicalVideosPage';

describe("Altibb test", () =>{
    beforeEach(function(){
        cy.viewport(1920, 1080);
        basePage.openURL();
    })
    it('verify altibb website', function()
    {
        mainPage.clickDiscoverMedicalDropdown();
        mainPage.clickMedicalVideosLink();
        medicalVideosPage.clickSecondVideoHeader();medicalVideosPage.clickShareLink();
        let link = ['facebook.com', 'twitter.com', 'linkedin.com', 'instagram.com'];
        for(let i = 0; i < 4; i++){
        medicalVideosPage.shareWithSocialLink(i+1).should('have.attr', 'href').and('include', link[i]);
        }
        medicalVideosPage.shareWithWhatsAppLink().should('have.attr', 'href').and('include', 'whatsapp');
        medicalVideosPage.clickAppointmentButton();
        medicalVideosPage.findADoctorHeader().contains("ابحث عن طبيب واحجز موعد بكل سهولة");
        cy.go('back');
        medicalVideosPage.freeSuggestedQuestionsAndAnswersSection().should('be.visible');
        medicalVideosPage.clickShowAllQuestionsButton();
        medicalVideosPage.infectiousDiseasesMedicalQuestionsAndAnswersHeader().contains("أسئلة واجابات طبية الامراض المعدية");
        cy.go('back');
        medicalVideosPage.medicalNewsAndArticlesTitle().should('be.visible');
        for(let i = 1; i < 4; i++){
            medicalVideosPage.medicalNewsAndArticlesContent(i).should('be.visible');
        }
        medicalVideosPage.latestMedicalVideosTitle().should('be.visible');
        medicalVideosPage.latestMedicalVideo().should('be.visible');
     })
})
