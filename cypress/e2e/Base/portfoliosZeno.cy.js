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
        portfolios.clickPortfoliosPage();

    })
    it('Create portfolios with Entity is ' + dataPortfolios.searchEntityName, function(){
        portfolios.clickPortfoliosPage();
        a = 'tr[data-row-key="f9af2fb3-ca6d-4f88-9b67-0a938b0ab744"]'
        cy.get(a +'>td.ant-table-cell>button[_nk="Akk681"]').click();
        cy.get('span.ant-dropdown-menu-title-content').contains('Promote').click()
    })
})