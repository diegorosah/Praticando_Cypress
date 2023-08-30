import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";

Given("que estou logando na pagina do Salesforce", () => {
  cy.visit("https://cunning-moose-5fsno9-dev-ed.trailblaze.lightning.force.com/lightning/n/trlhdtips__Welcome");
  cy.pause();
});

When("I type and submit in the board name", () => {
  cy.get("[data-cy=first-board]").type('new board{enter}');
});

Then("I should be redirected to the board detail", () => {
  cy.location("pathname").should('match', /\/board\/\d/);
});
