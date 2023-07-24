import login from "../../pages/loginZeno";
import dataUserZenoData from "../../fixtures/userZeno.json";
import surveys from "../../pages/surveysZeno";
import dataSurveys from "../../fixtures/surveysZeno.json";
import dataFramework from "../../fixtures/frameworkZeno.json";
import dataPortfolios from "../../fixtures/portfoliosZeno.json";
describe('Verify Surveys', function(){
 
    beforeEach(()=> {
       cy.visit('/');  
       login.fillUsername(dataUserZenoData.username);
       login.fillPassword(dataUserZenoData.password);
       login.submit();
       login.clickTeam(dataUserZenoData.TeamZeno);
       login.clickOpen();
    })
    it(' Create Surveys by My Framework Clone', function(){
      
       surveys.clickSurveysPage();
       surveys.clickIconNew();
       surveys.selectedCreateSurvey();
       surveys.inputServeyName('Test Surveys ' + dataSurveys.SurveyFrameworkClone);
       surveys.selectedFolderFramework(dataSurveys.folderMyFramework);
       surveys.inputFrameworkName(dataFramework.nameFrameworkClone);
       surveys.selectFolderPortfolio(dataSurveys.folderMyPortfolio);
       surveys.inputPortfolioName(dataPortfolios.namePortfolio);
       surveys.clickSubmit();                                           
    })
    it(' Create Surveys by My Framework Create', function(){
      surveys.clickSurveysPage();
      surveys.clickIconNew();
      surveys.selectedCreateSurvey();
      surveys.inputServeyName('Test Surveys ' + dataSurveys.SurveyFrameworkCreate);
      surveys.selectedFolderFramework(dataSurveys.folderMyFramework);
      surveys.inputFrameworkName(dataFramework.nameFrameworkCreate);
      surveys.selectFolderPortfolio(dataSurveys.folderMyPortfolio);
      surveys.inputPortfolioName(dataPortfolios.namePortfolio);
      surveys.clickSubmit();                                            
   })
    it(' Create Surveys by Preset Framework Create', function(){
      surveys.clickSurveysPage();
      surveys.clickIconNew();
      surveys.selectedCreateSurvey();
      surveys.inputServeyName('Test Surveys ' + dataSurveys.SurveyFrameworkPreset);
      surveys.inputTextFrameworkName(dataSurveys.FrameworkRevelioLabs);
      surveys.selectFolderPortfolio(dataSurveys.folderMyPortfolio);
      surveys.inputPortfolioName(dataPortfolios.namePortfolio);
      surveys.clickSubmit();                                          
   })
   it('Delete Surveys', function(){
      surveys.clickSurveysPage();  
      const searchName = surveys.createServeyName();
      console.log("@",searchName);
      let survayName =[];
      let name;
      cy.get('.ant-table-row.ant-table-row-level-0.row--item .ant-table-cell.col--name .flexBox >div').then(($list)=>{
         for (let j = 0; j < $list.length; j++) {
          name =$list[j].textContent
            survayName.push(name)
                if ($list[j].textContent==searchName) {
                  let indexOfIcon =j
                    cy.log('index:.......',indexOfIcon);
                    cy.get('.ant-btn.ant-btn-text.ant-btn-sm.ant-dropdown-trigger').eq(indexOfIcon).click();
                    cy.get('span.ant-dropdown-menu-title-content').contains('Delete').click();
                    cy.get('.ant-btn.ant-btn-default.ant-btn-dangerous').click();
                  //   .ant-btn.ant-btn-default.ant-btn-dangerous
                    cy.wait(1000);
                    break;
             }
         }
      })                              
   })   
   it('Setup Surveys', function(){
      surveys.clickSurveysPage();  
      const searchName = surveys.createServeyName();
      console.log("@",searchName);
      let survayName =[];
      let name;
      cy.get('.ant-table-row.ant-table-row-level-0.row--item .ant-table-cell.col--name .flexBox >div').then(($list)=>{
         for (let j = 0; j < $list.length; j++) {
          name =$list[j].textContent
            survayName.push(name)
                if ($list[j].textContent==searchName) {
                  let indexOfIcon =j
                    cy.log('index:.......',indexOfIcon);
                    cy.get('.ant-btn.ant-btn-text.ant-btn-sm.ant-dropdown-trigger').eq(indexOfIcon).click();
                    cy.get('span.ant-dropdown-menu-title-content').contains('Setup').click();
                    cy.get('input.ant-checkbox-input').click();
                    cy.get('button.ant-btn.ant-btn-primary').click();
                    cy.wait(1000);
                    break;
             }
         }
      })                              
   })  
   it(' Delegate Surveys', function(){
      surveys.clickSurveysPage();
      cy.wait(1000)
     
      const searchName = surveys.createServeyName();
      console.log("@",searchName);
      let survayName =[];
      let name;
      cy.get('.ant-table-row.ant-table-row-level-0.row--item .ant-table-cell.col--name .flexBox >div').then(($list)=>{
         for (let j = 0; j < $list.length; j++) {
          name =$list[j].textContent
            survayName.push(name)
                if ($list[j].textContent==searchName) {
                  let indexOfIcon =j
                    cy.log('index:.......',indexOfIcon);
                    cy.get('.ant-btn.ant-btn-text.ant-btn-sm.ant-dropdown-trigger').eq(indexOfIcon).click();
                    cy.get('span.ant-dropdown-menu-title-content').contains('Setup').click();
                    cy.get('input.ant-checkbox-input').click();
                    cy.get('button.ant-btn.ant-btn-primary').click();
                    cy.get('.ant-btn.ant-btn-text.ant-btn-sm.ant-dropdown-trigger').eq(indexOfIcon).click();
                    cy.get('span.ant-dropdown-menu-title-content').contains('Delegate').click()  
                    cy.get('.ant-table-row.ant-table-row-level-0:first-child').type('thanhhoa592000@gmail.com');
                    cy.get('input[aria-required="true"][placeholder="First Name"]').type('Thanh');
                    cy.get('input[placeholder="Last Name"]').type('Hoa');
                    cy.get('button.ant-btn.ant-btn-primary').click()
                    cy.wait(1000);
                    break;
             }
         }
      })                              
   })  
   it('Promote Surveys', function(){
      surveys.clickSurveysPage();
      cy.wait(1000)
     
      const searchName = surveys.createServeyName();
      console.log("@",searchName);
      let survayName =[];
      let name;
      cy.get('.ant-table-row.ant-table-row-level-0.row--item .ant-table-cell.col--name .flexBox >div').then(($list)=>{
         for (let j = 0; j < $list.length; j++) {
          name =$list[j].textContent
            survayName.push(name)
                if ($list[j].textContent==searchName) {
                  let indexOfIcon =j
                    cy.log('index:.......',indexOfIcon);
                    cy.get('.ant-btn.ant-btn-text.ant-btn-sm.ant-dropdown-trigger').eq(indexOfIcon).click();
                    cy.get('span.ant-dropdown-menu-title-content').contains('Setup').click();
                    cy.get('input.ant-checkbox-input').click();
                    cy.get('button.ant-btn.ant-btn-primary').click();
                    cy.get('.ant-btn.ant-btn-text.ant-btn-sm.ant-dropdown-trigger').eq(indexOfIcon).click();
                    cy.get('span.ant-dropdown-menu-title-content').contains('Delegate').click()  
                    cy.get('.ant-table-row.ant-table-row-level-0:first-child').type('thanhhoa592000@gmail.com');
                    cy.get('input[aria-required="true"][placeholder="First Name"]').type('Thanh');
                    cy.get('input[placeholder="Last Name"]').type('Hoa');
                    cy.get('button.ant-btn.ant-btn-primary').click();
                    cy.get('.ant-btn.ant-btn-text.ant-btn-sm.ant-dropdown-trigger').eq(indexOfIcon).click();
                    cy.get('span.ant-dropdown-menu-title-content').contains('Promote').click();
                     cy.get('button.ant-btn.ant-btn-primary').click();  
                    cy.wait(1000);
                    break;
             }
         }
      })                              
   }) 

   // })
   // it(' Promote Surveys', function(){
   //    surveys.clickSurveysPage();
   //    cy.get('tr[data-row-key="c0aae1b3-6759-4283-8a3d-c63304f0f6da"]>td.ant-table-cell>button[_nk="Akk681"]').click();
   //    cy.get('span.ant-dropdown-menu-title-content').contains('Promote').click()  
   //    // cy.get('input.ant-checkbox-input').click();
   //    cy.get('button.ant-btn.ant-btn-primary').click()
 
   // })
   // it(' Promote Surveys', function(){
   //    surveys.clickSurveysPage();
   //    cy.get('tr[data-row-key="c0aae1b3-6759-4283-8a3d-c63304f0f6da"]>td.ant-table-cell>button[_nk="Akk681"]').click();
   //    cy.get('div[_nk="E/oG11"]').contains('Portfolio AutoTest 01').click()  
   //    // // cy.get('input.ant-checkbox-input').click();
   //    // cy.get('button.ant-btn.ant-btn-primary').click()
   //    cy.wait(1000)
     
   //    cy.visit('https://zeno.java.senecaesg.com/share/survey/a06e500c-a7c3-4cf0-a39e-82cdec525b23')
   //    cy.wait(1000);

   // })
})

