import login from "../../pages/loginZeno";
import dataFramework from "../../fixtures/frameworkZeno.json"
import framework from "../../pages/frameworkZeno"
import dataUserZenoData from "../../fixtures/userZeno.json"


describe('Verify framework', function(){
 
    beforeEach(()=> {
        cy.visit('/');  
        login.fillUsername(dataUserZenoData.username);
        login.fillPassword(dataUserZenoData.password);
        login.submit();
        
        login.clickTeam(dataUserZenoData.TeamZeno);
        login.clickOpen();
    })
    
    it('Create framework with valid values', function(){

    // click framework page
        framework.clickFrameworkPage();
        framework.clickIconNew();
        framework.selectedCreateFramework();

    // Edit create framework
        framework.clickEditButton();
        framework.inputNameFramework(dataFramework.nameFrameworkCreate);
        framework.clickAddQuestion();
        framework.clickCustonQuestion();
        framework.inputCode(dataFramework.code);
        framework.inputPillar();
        framework.inputCategory();
        framework.inputIndicator(dataFramework.inputIndicator);
        framework.inputDatatype();
        framework.inputPolarity();
        framework.inputQuestion(dataFramework.inputQuestion);
        framework.clickConfirm();
        framework.clickNextButton();
        framework.clickNextButton();
        framework.clickNextButton();
    })

    it('Clone framework with valid values', function(){

    // click framework page
        framework.clickFrameworkPage();
        framework.clickIconNew();
        framework.selectedCreateFramework();
        cy.wait(1000);

    // Edit clone framework
        framework.clickEditButton();
        framework.inputNameFramework(dataFramework.nameFrameworkClone);
        framework.clickAddQuestion();
        framework.clickSearchButton(dataFramework.searchFramework)
        framework.clickSearch()
        framework.selectedQuestionSupplyChainMgmt()
        framework.clickNextButton();
        framework.clickNextButton();
        framework.clickNextButton(); 
        })
})
   
    