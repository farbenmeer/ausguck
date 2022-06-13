/// <reference types="cypress" />

context('Navigation', () => {
  it('Show the index page with content', function () {
    cy.visit("/");
    cy.contains("All decks from farbenmeer");
    cy.contains("farbenmeer.de");
  });

  it('should redirect to path', function () {
    cy.visit("/");
    cy.contains("All decks from farbenmeer");
    cy.get("a").contains("async-javascript").click()
  })

  it('to deep link should work', function () {
    cy.visit("/async-javascript");
    cy.contains("by Henrik Wenz");
  })

  it('to next page', function () {
    cy.visit("/async-javascript");
    cy.get("#___gatsby").contains("by Henrik Wenz").type("{rightarrow}");
    cy.contains("Asynchrony, in computer programming");
  })
})
