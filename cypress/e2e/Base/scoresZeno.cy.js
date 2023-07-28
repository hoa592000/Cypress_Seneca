import login from "../../pages/loginZeno";
import dataUserZenoData from "../../fixtures/userZeno.json"
import dataPortfolios from "../../fixtures/portfoliosZeno.json"
describe('Verify Scores', function(){
 
    beforeEach(()=> {
        cy.visit('/');  
        login.fillUsername(dataUserZenoData.username);
        login.fillPassword(dataUserZenoData.password);
        login.submit();
        
        login.clickTeam(dataUserZenoData.TeamZeno);
        login.clickOpen();
    })
    it('Veiry Scores', function(){

        cy.get('.ant-menu-title-content').contains('Scores').click();
        cy.wait(1000);
        cy.get('input[id="GENERAL::Name"]').type(dataPortfolios.searchEntityName);
        // ant-btn ant-btn-dashed
        cy.get('.ant-btn.ant-btn-dashed').click();
        cy.get('.ant-btn.ant-btn-primary').click();
    })
})