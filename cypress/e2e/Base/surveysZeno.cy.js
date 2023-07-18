import login from "../../pages/loginZeno";
import dataUserZenoData from "../../fixtures/userZeno.json"
import surveys from "../../pages/surveysZeno";
import dataSurveys from "../../fixtures/surveysZeno.json"
import dataFramework from "../../fixtures/frameworkZeno.json"
import dataPortfolios from "../../fixtures/portfoliosZeno.json"
describe('Verify Surveys', function(){
 
    beforeEach(()=> {
       cy.visit('/');  
       login.fillUsername(dataUserZenoData.username);
       login.fillPassword(dataUserZenoData.password);
       login.submit();
       
       login.clickTeam(dataUserZenoData.TeamZeno);
       login.clickOpen();
    })
    it('Create Surveys by Framework Clone', function(){
       surveys.clickSurveysPage();
       surveys.clickIconNew();
       surveys.selectedCreateSurvey();
       surveys.inputServeyName(dataSurveys.nameSurvey);
       surveys.inputFrameworkName(dataFramework.nameFrameworkClone);
       surveys.inputPortfolioName(dataPortfolios.namePortfolio)


                                                           
    })
})