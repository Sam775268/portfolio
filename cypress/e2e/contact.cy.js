/// <reference types="cypress" />

describe('Contact Page Test', () => {
  it('should fill out and submit the contact form', () => {
    cy.visit('/contact');

    // 填寫表單
    cy.get('input[name="name"]').type('Sam Liu');
    cy.get('input[name="email"]').type('sam@example.com');
    cy.get('textarea[name="message"]').type('This is a test message.');

    // 提交表單
    cy.get('button[type="submit"]').click();

    // 驗證 alert
    cy.on('window:alert', (txt) => {
      expect(txt).to.contains('Message submitted');
    });
  });
});