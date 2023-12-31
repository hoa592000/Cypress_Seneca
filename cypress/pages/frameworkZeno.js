import frameworkLocator from "./locator/frameworkLocatorZeno"
import dataFramework from "../fixtures/frameworkZeno.json"
class Framework{

    clickFrameworkPage(){
        cy.get(frameworkLocator.iconFramework)
            .click();
        cy.wait(1000);
    }
    clickIconNew(){
        cy.get(frameworkLocator.iconNew)
            .click();
        cy.wait(1000);
    }
    selectedCreateFramework(){
        cy.get(frameworkLocator.selectedFramework).contains('Framework')
            .click();
        cy.wait(1000);
    }
    clickEditNameFamework(){
        cy.get(frameworkLocator.iconEditName)
            .click();
        cy.wait(1000);
    }
    inputNameFramework(name){
        cy.get(frameworkLocator.nameFramework).clear();
        cy.wait(1000);
        cy.get(frameworkLocator.nameFramework).type(name);
    }
    clickAddQuestion(){
        cy.get(frameworkLocator.addQuestions)
            .click();
        cy.wait(1000);
    }
    clickCustonQuestion(){
        cy.get(frameworkLocator.createCustomQuestion)
        .click(); 
        cy.wait(1000); 
    }
    clickEditButton(){
        cy.get(frameworkLocator.iconEdit)
        .click();
        cy.wait(1000);
    }
    inputCode(inputCode){
        cy.get(frameworkLocator.inputCode).type(inputCode);
        cy.wait(1000);
    }      
    inputPillar(){
        cy.get(frameworkLocator.clickPillar).click();
        cy.wait(1000);
        cy.get(frameworkLocator.inputPillar).click();
        cy.wait(1000);
    }
    inputCategory(){
        cy.get(frameworkLocator.clickCategory).click();
        cy.wait(1000);
        cy.get(frameworkLocator.inputCategory).click();
        cy.wait(1000);
    }
    inputIndicator(indicator){
        cy.get(frameworkLocator.clickIndicator).click();
        cy.wait(1000);
        cy.get(frameworkLocator.clickEditIndicator).click();
        cy.wait(1000);
        cy.get(frameworkLocator.inputIndicator).type(indicator).type("{enter}");
        cy.wait(1000);
        cy.get(frameworkLocator.clickIndicator).click();
        cy.wait(1000);
        cy.get(frameworkLocator.selectedIndicator).contains(indicator).click();
        cy.wait(1000);                     
    }
    inputDatatype(){
        cy.get(frameworkLocator.clickQuestionType).click();
        cy.wait(1000);   
        cy.get(frameworkLocator.inputQuestionType).click();
        cy.wait(1000);   
    }
    inputPolarity(){
        cy.get(frameworkLocator.clickPolarity).click();
        cy.wait(1000);
        cy.get(frameworkLocator.inputPolarity).click();
        cy.wait(1000);
    }
    inputQuestion(question){
        cy.get(frameworkLocator.inputQuestion).type(question);
        cy.wait(1000);
    }
    clickConfirm(){
        cy.get(frameworkLocator.clickConfirmButton).contains('Confirm').click();
        cy.wait(1000);
    }
    clickNextButton(){
        cy.get(frameworkLocator.clickNextButton).click();
        cy.wait(1000);
    }
    clickSearchButton(search){
        cy.get(frameworkLocator.clickSearchButton).click().type(search);
        cy.wait(1000);
    }
    clickSearch(){
        cy.get(frameworkLocator.clickSearch).click();
    }
    selectedQuestionSupplyChainMgmt(){
        cy.get(frameworkLocator.selectedQuestionSupplyChainMgmt).contains('Supply Chain Mgmt').click();
    }
    createFramework(){
        const nameFramework = dataFramework.nameFrameworkCreate;
        this.clickIconNew();
        this.selectedCreateFramework();
        this.clickEditButton();
        this.inputNameFramework(nameFramework);
        this.clickAddQuestion();
        this.clickCustonQuestion();
        this.inputCode(dataFramework.code);
        this.inputPillar();
        this.inputCategory();
        this.inputIndicator(dataFramework.inputIndicator);
        this.inputDatatype();
        this.inputPolarity();
        this.inputQuestion(dataFramework.inputQuestion);
        this.clickConfirm();
        this.clickNextButton();
        this.clickNextButton();
        this.clickNextButton();                               
        return nameFramework;
    }
    cloneFramework(){
        this.clickIconNew();
        this.selectedCreateFramework();
        cy.wait(1000);
        this.clickEditButton();
        this.inputNameFramework(dataFramework.nameFrameworkClone);
        this.clickAddQuestion();
        this.clickSearchButton(dataFramework.searchFramework)
        this.clickSearch()
        this.selectedQuestionSupplyChainMgmt()
        this.clickNextButton();
        this.clickNextButton();
        this.clickNextButton(); 
    }
    // deleteFramework(){
    //     const searchName = framework.createFramework();
    //     console.log("@",searchName);
    //     let survayName =[];
    //     let name;
    //     cy.get(frameworkLocator.listFrameworkName).then(($list)=>{
    //        for (let j = 0; j < $list.length; j++) {
    //         name =$list[j].textContent
    //           survayName.push(name)
    //               if ($list[j].textContent==searchName) {
    //                 let indexOfIcon =j
    //                   cy.log('index:.......',indexOfIcon);
    //                   cy.get(frameworkLocator.iconEdit).eq(indexOfIcon).click();
    //                 //   cy.get(surveysLocator.selecteEdit).contains('Delete').click();
    //                 //   cy.get(surveysLocator.confirmDelete).click();
    //                   cy.wait(1000);
    //                   break;
    //            }
    //        }
    // //     })            

    // }
}
const framework = new Framework();
export default framework;