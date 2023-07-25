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

    CreateSurveysbyMyFrameworkClone(){
        this.clickIconNew();
        this.selectedCreateSurvey();
        this.inputServeyName('Test Surveys ' + dataSurveys.SurveyFrameworkClone);
        this.selectedFolderFramework(dataSurveys.folderMyFramework);
        this.inputFrameworkName(dataFramework.nameFrameworkClone);
        this.selectFolderPortfolio(dataSurveys.folderMyPortfolio);
        this.inputPortfolioName(dataPortfolios.namePortfolio);
        this.clickSubmit();               
    }

    CreateSurveysbyMyFrameworkCreate(){
        this.clickIconNew();
        this.selectedCreateSurvey();
        this.inputServeyName('Test Surveys ' + dataSurveys.SurveyFrameworkCreate);
        this.selectedFolderFramework(dataSurveys.folderMyFramework);
        this.inputFrameworkName(dataFramework.nameFrameworkCreate);
        this.selectFolderPortfolio(dataSurveys.folderMyPortfolio);
        this.inputPortfolioName(dataPortfolios.namePortfolio);
        this.clickSubmit();   
    }

    CreateSurveysbyPresetFrameworkCreate(){
        this.clickIconNew();
        this.selectedCreateSurvey();
        this.inputServeyName('Test Surveys ' + dataSurveys.SurveyFrameworkPreset);
        this.inputTextFrameworkName(dataSurveys.FrameworkRevelioLabs);
        this.selectFolderPortfolio(dataSurveys.folderMyPortfolio);
        this.inputPortfolioName(dataPortfolios.namePortfolio);
        this.clickSubmit();                    
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
    deleteSurveyName(){
        const searchName = surveys.createServeyName();
        console.log("@",searchName);
        let survayName =[];
        let name;
        cy.get(surveysLocator.listSurveyName).then(($list)=>{
           for (let j = 0; j < $list.length; j++) {
            name =$list[j].textContent
              survayName.push(name)
                  if ($list[j].textContent==searchName) {
                    let indexOfIcon =j
                      cy.log('index:.......',indexOfIcon);
                      cy.get(surveysLocator.buttonEdit).eq(indexOfIcon).click();
                      cy.get(surveysLocator.selecteEdit).contains('Delete').click();
                      cy.get(surveysLocator.confirmDelete).click();
                      cy.wait(1000);
                      break;
               }
           }
        })                  
    }
    SetupSurveys(){
        const searchName = surveys.createServeyName();
        console.log("@",searchName);
        let survayName =[];
        let name;
        cy.get(surveysLocator.listSurveyName).then(($list)=>{
           for (let j = 0; j < $list.length; j++) {
            name =$list[j].textContent
              survayName.push(name)
                  if ($list[j].textContent==searchName) {
                    let indexOfIcon =j
                    cy.get(surveysLocator.buttonEdit).eq(indexOfIcon).click();
                    cy.get(surveysLocator.selecteEdit).contains('Setup').click();
                    cy.get('input.ant-checkbox-input').click();
                    cy.get('button.ant-btn.ant-btn-primary').click();
                    cy.wait(1000);
                      break;
               }
           }
        })                         
    }
    DelegateSurveys(){
        const searchName = surveys.createServeyName();
        console.log("@",searchName);
        let survayName =[];
        let name;
        cy.get(surveysLocator.listSurveyName).then(($list)=>{
           for (let j = 0; j < $list.length; j++) {
            name =$list[j].textContent
              survayName.push(name)
                  if ($list[j].textContent==searchName) {
                    let indexOfIcon =j
                    cy.log('index:.......',indexOfIcon);
                    cy.get(surveysLocator.buttonEdit).eq(indexOfIcon).click();
                    cy.get(surveysLocator.selecteEdit).contains('Setup').click();
                    cy.get('input.ant-checkbox-input').click();
                    cy.get('button.ant-btn.ant-btn-primary').click();
                    cy.get(surveysLocator.buttonEdit).eq(indexOfIcon).click();
                    cy.get(surveysLocator.selecteEdit).contains('Delegate').click()  
                    cy.get('.ant-table-row.ant-table-row-level-0:first-child').type('thanhhoa592000@gmail.com');
                    cy.get('input[aria-required="true"][placeholder="First Name"]').type('Thanh');
                    cy.get('input[placeholder="Last Name"]').type('Hoa');
                    cy.get('button.ant-btn.ant-btn-primary').click()
                    cy.wait(1000);
                      break;
               }
           }
        })            
    }
    PromoteSurveys(){
        const searchName = surveys.createServeyName();
        console.log("@",searchName);
        let survayName =[];
        let name;
        cy.get(surveysLocator.listSurveyName).then(($list)=>{
           for (let j = 0; j < $list.length; j++) {
            name =$list[j].textContent
              survayName.push(name)
                  if ($list[j].textContent==searchName) {
                    let indexOfIcon =j
                    cy.log('index:.......',indexOfIcon);
                    cy.get(surveysLocator.buttonEdit).eq(indexOfIcon).click();
                    cy.get(surveysLocator.selecteEdit).contains('Setup').click();
                    cy.get('input.ant-checkbox-input').click();
                    cy.get('button.ant-btn.ant-btn-primary').click();
                    cy.get(surveysLocator.buttonEdit).eq(indexOfIcon).click();
                    cy.get(surveysLocator.selecteEdit).contains('Delegate').click()  
                    cy.get('.ant-table-row.ant-table-row-level-0:first-child').type('thanhhoa592000@gmail.com');
                    cy.get('input[aria-required="true"][placeholder="First Name"]').type('Thanh');
                    cy.get('input[placeholder="Last Name"]').type('Hoa');
                    cy.get('button.ant-btn.ant-btn-primary').click();
                    cy.get(surveysLocator.buttonEdit).eq(indexOfIcon).click();
                    cy.get('span.ant-dropdown-menu-title-content').contains('Promote').click();
                     cy.get('button.ant-btn.ant-btn-primary').click();  
                    cy.wait(1000);
                      break;
               }
           }
        })            
    }

}
const surveys = new Surveys();
export default surveys;