describe('Verify Scores', function(){
 
    beforeEach(()=> {
        cy.visit('/');  
        login.fillUsername(dataUserZenoData.username);
        login.fillPassword(dataUserZenoData.password);
        login.submit();
        
        login.clickTeam(dataUserZenoData.TeamZeno);
        login.clickOpen();
    })
})