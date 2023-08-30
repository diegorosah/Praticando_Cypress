import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";

Given("I am on empty home page", () => {
  cy.visit("www.google.com");
  cy.pause();
});

When("I type and submit in the board name", () => {
  cy.get("[data-cy=first-board]").type('new board{enter}');
});

Then("I should be redirected to the board detail", () => {
  cy.location("pathname").should('match', /\/board\/\d/);
});
