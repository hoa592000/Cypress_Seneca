import { After, And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import login from "../../pages/loginZeno";
import dataUserZenoData from "../../fixtures/userZeno.json"

describe('Verify function login', function(){
 
    beforeEach(()=> {
        cy.visit('/');  
    })
   
    it('Login with ' +dataUserZenoData.username+' Team '+dataUserZenoData.TeamZeno, function(){
    //  input username and password and click submit
       login.fillUsername(dataUserZenoData.username);
       login.fillPassword(dataUserZenoData.password);
       login.submit();
    // verify team and selected Team
       login.clickTeam(dataUserZenoData.TeamZeno)
       login.clickOpen();
    })
    it('Login with '+ dataUserZenoData.username+' Team '+dataUserZenoData.TeamAceCapital, function(){
    //  input username and password and click submit
        login.fillUsername(dataUserZenoData.username);
        login.fillPassword(dataUserZenoData.password);
        login.submit();
    // verify team and selected Team
        login.clickTeam(dataUserZenoData.TeamAceCapital)
        login.clickOpen();
        })
})