import login from "../../pages/loginZeno";
import dataUserZenoData from "../../fixtures/userZeno.json"
import portfolios from "../../pages/portfoliosZeno";
import dataPortfolios from "../../fixtures/portfoliosZeno.json"
describe('Verify Portfolios', function(){
 
    beforeEach(()=> {
       cy.visit('/');  
       login.fillUsername(dataUserZenoData.username);
       login.fillPassword(dataUserZenoData.password);
       login.submit();    
       login.clickTeam(dataUserZenoData.TeamZeno);
       login.clickOpen();
    })
    it('Create portfolios with Entity is ' + dataPortfolios.searchEntityName, function(){
        portfolios.clickPortfoliosPage();
        portfolios.clickIconNew();
        portfolios.selectedCreatePortfolio();
        portfolios.clickEditNamePortfolio();
        portfolios.inputNamePortfolio(dataPortfolios.namePortfolio);
        portfolios.searchByEntityName(dataPortfolios.searchEntityName);
        portfolios.selectedEntity();
        portfolios.clickAddToPortfolios();
        portfolios.clickNextButton();
        portfolios.clickResetAvg();
        portfolios.clickConfirm();

    })
    it('Create portfolios with Entity is ' + dataPortfolios.searchEntityName, function(){
        portfolios.clickPortfoliosPage();

    })
})