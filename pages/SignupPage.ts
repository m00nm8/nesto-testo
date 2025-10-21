export class SignupPage {
  // ─── URLs ─────────────────────────────
  signupEn = '/signup';
  signupFr = '/fr/signup';

  // ─── Fields ─────────────────────────────
  firstNameField = '[data-testid="first-name-input"]';
  lastNameField = '[data-testid="last-name-input"]';
  phoneField = '[data-testid="phoneInput"]';
  regionField = '[data-testid="region-select"]';
  emailField = '[data-testid="email-input"]';
  passField = '[data-testid="password-input"]';
  confirmField = '[data-testid="passwordConfirmation-input"]';
  marketingConsent = '[data-testid="agreement-checkbox"]';
  submitButton = '[data-testid="submit-button"]';
  loginLink = '[data-testid="login-link"]';
  phoneCountrySelect = '.PhoneInputCountrySelect';

  // ─── Labels ─────────────────────────────
  firstNameLabel = '[data-testid="first-name-input-placeholder"]';
  lastNameLabel = '[data-testid="last-name-input-placeholder"]';
  phoneLabel = '[data-testid="input-placeholder"]';
  regionLabel = '[data-testid="select-placeholder"]';
  emailLabel = '[data-testid="email-input-placeholder"]';
  passLabel = '[data-testid="password-input-placeholder"]';
  confirmLabel = '[data-testid="passwordConfirmation-input-placeholder"]';

  // ─── Error messages ─────────────────────────────
  firstNameError = '[data-testid="first-name-error-message-typography"]';
  lastNameError  = '[data-testid="last-name-error-message-typography"]';
  phoneError     = '[data-testid="phone-error-message-typography"]';
  regionError    = '[data-testid="region-error-message-typography"]';
  emailError     = '[data-testid="email-error-message-typography"]';
  passError      = '[data-testid="password-error-message-typography"]';
  confirmError   = '[data-testid="passwordConfirmation-error-message-typography"]';

  // ─── Functions ─────────────────────────────
  open() {
    const lang = (Cypress.env('LANG') as 'en' | 'fr') || 'en';
    cy.visit(lang === 'fr' ? this.signupFr : this.signupEn);
    cy.document().its('readyState').should('eq', 'complete');
  }

  fillBasicInfo(first: string, last: string, phone: string, region: string, email: string, password: string) {
    cy.get(this.firstNameField).clear().type(first);
    cy.get(this.lastNameField).clear().type(last);
    cy.get(this.phoneField).clear().type(phone);
    cy.get(this.regionField).select(region);
    cy.get(this.emailField).clear().type(email);
    cy.get(this.passField).clear().type(password);
    cy.get(this.confirmField).clear().type(password);
  }
}

export const signup = new SignupPage();
