import login from "../../pages/loginZeno";
import dataUserZenoData from "../../fixtures/userZeno.json";
import surveys from "../../pages/surveysZeno";
describe('Verify Surveys', function(){
 
    beforeEach(()=> {
       cy.visit('/');  
       login.fillUsername(dataUserZenoData.username);
       login.fillPassword(dataUserZenoData.password);
       login.submit();
       login.clickTeam(dataUserZenoData.TeamZeno);
       login.clickOpen();
    })

    it('Create Surveys by My Framework Clone', function(){
      
       surveys.clickSurveysPage();

       cy.wait(1000);

       surveys.CreateSurveysbyMyFrameworkClone();
    })

    it('Create Surveys by My Framework Create', function(){

      surveys.clickSurveysPage();

      cy.wait(1000);

      surveys.CreateSurveysbyMyFrameworkCreate();                                      
   })

    it('Create Surveys by Preset Framework Create', function(){
      surveys.clickSurveysPage();

      cy.wait(1000);

      surveys.CreateSurveysbyPresetFrameworkCreate();                   
   })

   it('Delete Surveys', function(){

      surveys.clickSurveysPage(); 

      cy.wait(2000);

      surveys.deleteSurveyName(); 

   }) 

   it('Setup Surveys', function(){
      surveys.clickSurveysPage();

      cy.wait(2000);
      

      surveys.SetupSurveys();
                           
   })  

   it('Delegate Surveys', function(){

      surveys.clickSurveysPage();

      cy.wait(2000)

      surveys.DelegateSurveys();
                           
   })  

   it('Promote Surveys', function(){

      surveys.clickSurveysPage();

      cy.wait(2000);

      surveys.PromoteSurveys();
                               
   }) 

})

