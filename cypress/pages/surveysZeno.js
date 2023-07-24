import surveysLocator from "./locator/surveysLocatorZeno";
import dataSurveys from "../fixtures/surveysZeno.json"
import dataFramework from "../fixtures/frameworkZeno.json";
import dataPortfolios from "../fixtures/portfoliosZeno.json";
class Surveys{
    clickSurveysPage(){
        cy.get(surveysLocator.iconSurveys).click();
        cy.wait(1000);
    }
    clickIconNew(){
        cy.get(surveysLocator.iconNew).click();
        cy.wait(1000);
    }
    selectedCreateSurvey(){
        cy.get(surveysLocator.selectSurveys).contains('Survey').click();
        cy.wait(1000);
    }
    inputServeyName(name){
        // const randomChars = Cypress._.random(1000, 9999);
        // const nameSurvey = name + randomChars
        cy.get(surveysLocator.textfillServeyName).type(name);

    }
    selectedFolderFramework(folderFramework){
        cy.get(surveysLocator.textfillFramework).click();
        cy.wait(1000);
        cy.get(surveysLocator.selectFolderFramework).contains(folderFramework).click();
        cy.wait(1000);
        return false;
    }
    inputFrameworkName(nameFramework){
        cy.get(surveysLocator.selectFramework).contains(nameFramework).click();
        cy.wait(1000);
    }
    inputTextFrameworkName(textFramework){
        cy.wait(1000);
        cy.get(surveysLocator.textfillFramework).type(textFramework).type('{downArrow}')
        .type('{enter}')
    }
    inputTextPortfolioName(textPortfolio){
        cy.wait(1000);
        cy.get(surveysLocator.textfillPortfolio).type(textPortfolio).type('{downArrow}')
        .type('{enter}')

    }
    selectFolderPortfolio(folderPortfolio){
        cy.get(surveysLocator.textfillPortfolio).click();
        cy.wait(1000);
        cy.get(surveysLocator.selectFolderPortfolio).contains(folderPortfolio).click();
        cy.wait(1000);

    }
    inputPortfolioName(namePortfolio){
        cy.get(surveysLocator.selectPortfolio).contains(namePortfolio).click();
        cy.wait(1000);
    }
    clickSubmit(){
        cy.get(surveysLocator.buttonSubmit).contains('Submit').click();
        cy.wait(1000);
    }

    createServeyName(){
        const randomChars = Cypress._.random(1000, 9999);
        const nameSurvey = 'Surveys Test '+ randomChars;
        this.clickSurveysPage();
        this.clickIconNew();
        this.selectedCreateSurvey();
        this.inputServeyName(nameSurvey);
        this.inputTextFrameworkName('Framework Create AutoTest 01');
        this.inputTextPortfolioName('Portfolio AutoTest 01');
        this.clickSubmit();                                   
        return nameSurvey;
    }
}
const surveys = new Surveys();
export default surveys;