import { After, And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import login from "../../pages/loginZeno";
import dataUserZenoData from "../../fixtures/userZeno.json"

describe('Verify function login', function(){
 
    beforeEach(()=> {
        cy.visit('/');  
    })
   
    it('Login with ' +dataUserZenoData.username+' Team '+dataUserZenoData.TeamZeno, function(){
       login.fillUsername(dataUserZenoData.username);
       login.fillPassword(dataUserZenoData.password);
       login.submit();
       login.clickTeam(dataUserZenoData.TeamZeno)
       login.clickOpen();
    })
    it('Login with '+ dataUserZenoData.username+' Team '+dataUserZenoData.TeamAceCapital, function(){
        login.fillUsername(dataUserZenoData.username);
        login.fillPassword(dataUserZenoData.password);
        login.submit();
        login.clickTeam(dataUserZenoData.TeamAceCapital)
        login.clickOpen();
        })
})