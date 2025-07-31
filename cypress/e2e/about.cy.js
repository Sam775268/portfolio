/// <reference types="cypress" />

describe('About Page Test', () => {
  it('should show About page content', () => {
    cy.visit('/about');
    cy.contains('About Me').should('exist');
    cy.contains('Howard Liu').should('exist');
    cy.contains('Skills').should('exist');
    cy.contains('Resume').should('exist');
  });
});