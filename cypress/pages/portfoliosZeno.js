import portfoliosLocator from "./locator/portfoliosLocatorZeno";

class Portfolios{
    clickPortfoliosPage(){
        cy.get(portfoliosLocator.iconPortfolios).click();
        cy.wait(1000);
    }
    clickIconNew(){
        cy.get(portfoliosLocator.iconNew)
            .click();
        cy.wait(1000);
    }
    selectedCreatePortfolio(){
        cy.get(portfoliosLocator.selectPortfolio).contains('Portfolio')
            .click();
        cy.wait(1000);
    }
    clickEditNamePortfolio(){
        cy.get(portfoliosLocator.iconEditName)
            .click();
        cy.wait(1000);
    }
    inputNamePortfolio(name){
        cy.get(portfoliosLocator.namePortfolios).clear();
        cy.wait(1000);
        cy.get(portfoliosLocator.namePortfolios).type(name);
    }
    searchByEntityName(entity){
        cy.get(portfoliosLocator.searchByEntityName)
        .click()
        .type(entity)
        .type("{enter}");
        cy.wait(1000);
    }
    selectedEntity(){
        cy.get(portfoliosLocator.selectedEntity).click();
    }
    clickAddToPortfolios(){
        cy.get(portfoliosLocator.buttonAddToPortfolios).click();
    }
    clickNextButton(){
        cy.get(portfoliosLocator.buttonNext).click();
    }
    clickResetAvg(){
        cy.get(portfoliosLocator.buttonResetAvg).click();
    }
    clickConfirm(){
        cy.get(portfoliosLocator.buttonConfirm).click();
    }
}
const portfolios = new Portfolios();
export default portfolios;
