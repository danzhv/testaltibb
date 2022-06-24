import basePage from '../pages/basePage';
import mainPage from '../pages/mainPage';;

describe("Altibb test", () =>{
    beforeEach(function(){
        cy.viewport(1920, 1080);
        basePage.openURL();
    })
    it('verify social links at second medical video link', function()
    {
        mainPage.clickDiscoverMedicalDropdown();
        mainPage.clickMedicalVideosLink();
        mainPage.clickSecondVideoHeader();
        mainPage.clickShareLink();
        let link = ['facebook.com', 'twitter.com', 'linkedin.com', 'instagram.com'];
        for(let i = 0; i < 4; i++){
            mainPage.clickShareLink();
            mainPage.shareWithSocialLink(i+1).invoke('removeAttr', 'target').click({force: true});
            basePage.checkIfLinkContains(link[i]);
            cy.go('back');
        }
        mainPage.shareWithWhatsAppLink().invoke('removeAttr', 'target').click({force: true});
        basePage.checkIfLinkContains('whatsapp');
    })
    it('verify find a doctor header at second medical video link', function()
    {
        mainPage.clickDiscoverMedicalDropdown();
        mainPage.clickMedicalVideosLink();
        mainPage.clickSecondVideoHeader();
        mainPage.clickAppointmentButton();
        mainPage.findADoctorHeader()
        .should('be.visible')
        .contains("ابحث عن طبيب واحجز موعد بكل سهولة");
    })    
    it('verify free suggested question and answer and infectious diseases medical at second medical video link', function()
    {
        mainPage.clickDiscoverMedicalDropdown();
        mainPage.clickMedicalVideosLink();
        mainPage.clickSecondVideoHeader();
        mainPage.freeSuggestedQuestionsAndAnswersSection()
        .should('be.visible')
        .contains('أسئلة وإجابات مجانية مقترحة');
        mainPage.clickShowAllQuestionsButton();
        mainPage.infectiousDiseasesMedicalQuestionsAndAnswersHeader().should('have.text', "أسئلة واجابات طبية الامراض المعدية");  
    })
    it('verify medical news articles and video at second medical video link', function()
    {
        mainPage.clickDiscoverMedicalDropdown();
        mainPage.clickMedicalVideosLink();
        mainPage.clickSecondVideoHeader();
        mainPage.medicalNewsAndArticlesTitle().should('be.visible');
        for(let i = 1; i < 4; i++){
            mainPage.medicalNewsAndArticlesContent(i).should('be.visible');
            }
            mainPage.latestMedicalVideosTitle().should('be.visible');
            mainPage.latestMedicalVideo().should('be.visible');
    })

    it('verify medical news article and question box at second medical articles link', function()
    {
        mainPage.clickDiscoverMedicalDropdown();
        mainPage.clickMedicalArticlesLink();
        mainPage.clickSecondArticle();
        mainPage.freeSuggestedQuestionsAndAnswersSection()
        .should('be.visible')
        .contains('أسئلة وإجابات مجانية مقترحة');
        for(let i = 1; i < 6; i++){
            if(i != 2){
                mainPage.questionBoxArticle(i).should('be.visible');
            }
        }
    })
    it('verify medical news interal medicine questions and answer header at second medical articles link', function()
    {
        mainPage.clickDiscoverMedicalDropdown();
        mainPage.clickMedicalArticlesLink();
        mainPage.clickSecondArticle();
        mainPage.clickShowAllQuestionsButton();
        mainPage.interalMedicineQuestionsAndAnswersHeader()
        .should('be.visible')
        .should('have.text', 'أسئلة واجابات طبية أمراض باطنية');
    })
    it('verify medical news articles and video at second medical articles link', function()
    {
        mainPage.clickDiscoverMedicalDropdown();
        mainPage.clickMedicalArticlesLink();
        mainPage.clickSecondArticle();
        mainPage.medicalNewsAndArticlesTitle().should('be.visible');
        for(let i = 1; i < 4; i++){
            mainPage.medicalNewsAndArticlesContent(i).should('be.visible');
            }
            mainPage.latestMedicalVideosTitle().should('be.visible');
            mainPage.latestMedicalVideo().should('be.visible');
    })
    
    it('verify social links at first medical news link', function()
    {
        mainPage.clickDiscoverMedicalDropdown();
        mainPage.clickMedicalArticlesLink();
        mainPage.clickFirstArticle();
        mainPage.clickShareLink();
        let link = ['facebook.com', 'twitter.com', 'linkedin.com', 'instagram.com'];
        for(let i = 0; i < 4; i++){
            mainPage.clickShareLink();
            mainPage.shareWithSocialLink(i+1).invoke('removeAttr', 'target').click({force: true});
            basePage.checkIfLinkContains(link[i]);
            cy.go('back');
        }
        mainPage.shareWithWhatsAppLink().invoke('removeAttr', 'target').click({force: true});
        basePage.checkIfLinkContains('whatsapp');
    })
    it.only('verify talk to a doctor title at first medical news link', function()
    {
        mainPage.clickDiscoverMedicalDropdown();
        mainPage.clickMedicalNewsLink();
        mainPage.clickFirstNewsArticle();
        mainPage.clickTalkToADoctorButton();
        mainPage.talkToADoctorTitle()           //404 Error page  | الطبي"
        .should('be.visible')
        .contains('اطرح سؤالك الآن ليصل إلى آلاف الأطباء ');
    })
    it('verify find a doctor header at first medical news link', function()
    {
        mainPage.clickDiscoverMedicalDropdown();
        mainPage.clickMedicalNewsLink();
        mainPage.clickFirstNewsArticle();
        mainPage.clickAppointmentButton();
        mainPage.findADoctorHeader()
        .should('be.visible')
        .contains("ابحث عن طبيب واحجز موعد بكل سهولة");
    })
    it('verify video at first medical news link', function()
    {
        mainPage.clickDiscoverMedicalDropdown();
        mainPage.clickMedicalNewsLink();
        mainPage.clickFirstNewsArticle();
        mainPage.medicalNewsAndArticlesTitle().should('be.visible');
        for(let i = 1; i < 4; i++){
            mainPage.medicalNewsAndArticlesContent(i).should('be.visible');
            }
        mainPage.latestMedicalVideosTitle().should('be.visible');
        mainPage.latestMedicalVideo().should('be.visible');
    })
    it('verify social links and useful content link at first medical articles link', function()
    {
        mainPage.clickDiscoverMedicalDropdown();
        mainPage.clickMedicalArticlesLink();
        mainPage.clickFirstArticle();
        mainPage.clickShareLink();
        let link = ['facebook.com', 'twitter.com', 'linkedin.com', 'instagram.com'];
        for(let i = 0; i < 4; i++){
            mainPage.clickShareLink();
            mainPage.shareWithSocialLink(i+1).invoke('removeAttr', 'target').click({force: true});
            basePage.checkIfLinkContains(link[i]);
            cy.go('back');
        }
        mainPage.shareWithWhatsAppLink().invoke('removeAttr', 'target').click({force: true});
        basePage.checkIfLinkContains('whatsapp');
        mainPage.clickUsefulContentLink();
    })
    it('verify find a doctor header at first medical articles link', function()
    {
        mainPage.clickDiscoverMedicalDropdown();
        mainPage.clickMedicalArticlesLink();
        mainPage.clickFirstArticle();
        mainPage.clickAppointmentButton();
        mainPage.findADoctorHeader()
        .should('be.visible')
        .contains("ابحث عن طبيب واحجز موعد بكل سهولة");
    })
    it('verify video at first medical article link', function()
    {
        mainPage.clickDiscoverMedicalDropdown();
        mainPage.clickMedicalArticlesLink();
        mainPage.clickFirstArticle();
        mainPage.medicalNewsAndArticlesTitle().should('be.visible');
        for(let i = 1; i < 4; i++){
            mainPage.medicalNewsAndArticlesContent(i).should('be.visible');
            }
        mainPage.latestMedicalVideosTitle().should('be.visible');
        mainPage.latestMedicalVideo().should('be.visible');
    })
})
