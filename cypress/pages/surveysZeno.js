import surveysLocator from "./locator/surveysLocatorZeno";

class Surveys{
    clickSurveysPage(){
        cy.get(surveysLocator.iconSurveys).click();
        cy.wait(1000);
    }
    clickIconNew(){
        cy.get(surveysLocator.iconNew)
            .click();
        cy.wait(1000);
    }
    selectedCreateSurvey(){
        cy.get(surveysLocator.selectSurveys).contains('Survey')
            .click();
        cy.wait(1000);
    }
    inputServeyName(serveyName){
        cy.get(surveysLocator.textfillServeyName).type(serveyName);
        cy.wait(1000);
    }
    inputFrameworkName(frameworkName){
        cy.get(surveysLocator.textfillFramework).click()
        .type(frameworkName);
        cy.wait(100);
        cy.get(surveysLocator.clickFramework).click();
    }
    inputPortfolioName(portfolioName){
        cy.get(surveysLocator.textfillPortfolio).click()
        .type(portfolioName);
        cy.wait(100);
    }



}
const surveys = new Surveys();
export default surveys;