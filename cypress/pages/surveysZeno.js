import surveysLocator from "./locator/surveysLocatorZeno";
// import dataSurveys from "../fixtures/surveysZeno.json"
// import dataFramework from "../fixtures/frameworkZeno.json";
// import dataPortfolios from "../fixtures/portfoliosZeno.json"
// import { random } from "cypress/types/lodash";

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
        cy.get(surveysLocator.selectSurveys).contains('Survey').click();
        cy.wait(1000);
    }
    inputServeyName(serveyName){
        const randomChars = Cypress._.random(1000, 9999)
        const nameSurvey = 'Survey '+ serveyName + randomChars
        cy.get(surveysLocator.textfillServeyName).type(nameSurvey);
        return nameSurvey;
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
}
const surveys = new Surveys();
export default surveys;