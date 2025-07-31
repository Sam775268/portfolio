/// <reference types="cypress" />

describe('Home Page Test', () => {
  it('shows welcome text', () => {
    cy.visit('/');
    cy.contains('Welcome to My Portfolio').should('exist');
  });
});