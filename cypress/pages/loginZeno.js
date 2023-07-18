import loginLocators from "./locator/loginLocatorZeno";
class Login{ 
    fillUsername(name){
        cy.get(loginLocators.userName)
            .clear()
            .type(name);
        cy.wait(1000);
    }
    fillPassword(pass){
        cy.get(loginLocators.passWord)
            .clear()
            .type(pass);
        cy.wait(1000);
    }
    submit(){
        cy.get(loginLocators.buttonSingIn)
            .click(); 
        cy.wait(1000);    
    }
    clickTeam(team){
        cy.get(loginLocators.buttonTeam).contains(team)
            .click();
        cy.wait(1000);
    }
    getTeam(){
        cy.get(loginLocators.getTeam).find(loginLocators.getTeam).eq(2);
        cy.wait(1000);

    }
    clickOpen(){
        cy.get(loginLocators.buttonOpen)
            .click();
        cy.wait(1000);
    }

}

const login = new Login();

export default login;