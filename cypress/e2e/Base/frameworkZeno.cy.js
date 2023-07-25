import login from "../../pages/loginZeno";
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

        framework.clickFrameworkPage();

        framework.createFramework();
    })

    it('Clone framework with valid values', function(){

        framework.clickFrameworkPage();

        framework.cloneFramework();
    })

    it('', function(){

    })
})
   
    