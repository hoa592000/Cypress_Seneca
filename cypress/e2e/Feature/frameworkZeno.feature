Feature: : Create_Framework

    Test cases to verify the Create Framework

    # Background behaves like Before each hook
    Background: Login to Seneca
        Given I login into Seneca
        Then I should see the Seneca screen
    
    @View
    Scenario: Verify the Framework screen
        Given I open the Framework list screen
        Then I should see the framework