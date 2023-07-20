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
       surveys.inputServeyName(dataSurveys.SurveyFrameworkClone);
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
      surveys.inputServeyName(dataSurveys.SurveyFrameworkCreate);
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
      surveys.inputServeyName(dataSurveys.SurveyFrameworkPreset);
      surveys.inputTextFrameworkName(dataSurveys.FrameworkRevelioLabs);
      surveys.selectFolderPortfolio(dataSurveys.folderMyPortfolio);
      surveys.inputPortfolioName(dataPortfolios.namePortfolio);
      surveys.clickSubmit();       
      // cy.get('tr[data-row-key="f9af2fb3-ca6d-4f88-9b67-0a938b0ab744"]>td.ant-table-cell>button[_nk="Akk681"]').click();
      // cy.get('span.ant-dropdown-menu-title-content').contains('Promote').click()                                     
   })
   it.only('Create Surveys by Framework Clone', function(){
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
                    cy.log('index:.......',indexOfIcon)
                    cy.get('.ant-btn.ant-btn-text.ant-btn-sm.ant-dropdown-trigger').eq(indexOfIcon).click()
                    cy.get('span.ant-dropdown-menu-title-content').contains('Setup').click()  
                    cy.wait(100000);
                    cy.log()
                    break;
                }
         }
         cy.log(survayName)
      })                              
   })                 
   // it(' Setup Surveys', function(){
   //    let searchName = 
   //    surveys.clickSurveysPage();
   //    const a ='tr[data-row-key="58b96acd-f766-4cc4-a7fd-702e9c092dcc"]'
   //    cy.get(a+'>td.ant-table-cell>button[_nk="Akk681"]').click();
   //    cy.get('span.ant-dropdown-menu-title-content').contains('Setup').click()  
   //    cy.get('input.ant-checkbox-input').click();
   //    cy.get('button.ant-btn.ant-btn-primary').click()
 
   // })
   // it(' Delegate Surveys', function(){
   //    surveys.clickSurveysPage();
   //    cy.get('tr.ant-table-row.ant-table-row-level-0.row--item>td.ant-table-cell>button[_nk="Akk681"]:parent').click();
   //    cy.get('tr.ant-table-row.ant-table-row-level-0.row--item>td.ant-table-cell>button[_nk="Akk681"]:nth-child(5)').click();
   //    cy.get('span.ant-dropdown-menu-title-content').contains('Delegate').click()  
   //    cy.get('#5d77e401-d87a-44db-a845-bf1be81231f6-email').clear().type('thanhhoa592000@gmail.com');
   //    cy.get('#5d77e401-d87a-44db-a845-bf1be81231f6-first_name').clear().type('Thanh');
   //    cy.get('#5d77e401-d87a-44db-a845-bf1be81231f6-last_name').clear().type('Hoa');
   //    cy.get('button.ant-btn.ant-btn-primary').click()
 
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