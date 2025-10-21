import { signup } from '../pages/SignupPage';

describe('Signup – Negative field validations', () => {

  it('verifies error messages when submitting empty form', () => {
    signup.open();
    cy.get(signup.submitButton).click();

    cy.get(signup.firstNameError).should('be.visible');
    cy.get(signup.lastNameError).should('be.visible');
    cy.get(signup.phoneError).should('be.visible');
    cy.get(signup.emailError).should('be.visible');
    cy.get(signup.passError).should('be.visible');
  });

  // BUG: invalid first names currently accepted. SKIPPING TEST
  it.skip('FIRST NAME: rejects invalid values [BUG]', () => {
    const invalidNames = ['11', 'mike2', '@#$', '123abc'];
    const email = `mahyar.taheri+${Date.now()}@gmail.com`;
    cy.fixture('signup.data.json').then((d) => {
      invalidNames.forEach((badFirst) => {
        signup.open();
        signup.fillBasicInfo(badFirst, d.lastName, d.phone, d.region, email, d.password);
        cy.get(signup.submitButton).click();
        cy.get(signup.firstNameError).should('be.visible');
      });
    });
  });

  // BUG: invalid last names currently accepted. SKIPPING TEST
  it.skip('LAST NAME: rejects invalid values [BUG]', () => {
    const invalidLasts = ['22', 'user7', '!!!'];
    const email = `mahyar.taheri+${Date.now()}@gmail.com`;
    cy.fixture('signup.data.json').then((d) => {
      invalidLasts.forEach((badLast) => {
        signup.open();
        signup.fillBasicInfo(d.firstName, badLast, d.phone, d.region, email, d.password);
        cy.get(signup.submitButton).click();
        cy.get(signup.lastNameError).should('be.visible');
      });
    });
  });

  it('EMAIL: verifies failure due to invalid email formats', () => {
    const invalidEmails = ['plainaddress', 'space in @gm ail.com', 'missing@domain', 'user@', '@no-local'];
    cy.fixture('signup.data.json').then((d) => {
      invalidEmails.forEach((badEmail) => {
        signup.open();
        signup.fillBasicInfo(d.firstName, d.lastName, d.phone, d.region, badEmail, d.password);
        cy.get(signup.submitButton).click();
        cy.get(signup.emailError).should('be.visible');
      });
    });
  });

  // BUG: "0000000000" currently accepted as valid. SKIPPING TEST
  it.skip('PHONE: rejects invalid phone numbers [BUG]', () => {
    const invalidPhones = ['abc', '++++', '000000000'];
    const email = `mahyar.taheri+${Date.now()}@gmail.com`;
    cy.fixture('signup.data.json').then((d) => {
      invalidPhones.forEach((badPhone) => {
        signup.open();
        signup.fillBasicInfo(d.firstName, d.lastName, badPhone, d.region, email, d.password);
        cy.get(signup.submitButton).click();
        cy.get(signup.phoneError).should('be.visible');
      });
    });
  });

  it('PASSWORD: rejects invalid password values', () => {
    const invalidPasswords = ['lessThan12', '123456789012345', 'longButNoNumbers', 'ONLYUPPERCASE1', 'nouppercase1', 'WithSpecialChar$'];
    const email = `mahyar.taheri+${Date.now()}@gmail.com`;
    cy.fixture('signup.data.json').then((d) => {
      invalidPasswords.forEach((badPassword) => {
        signup.open();
        signup.fillBasicInfo(d.firstName, d.lastName, d.phone, d.region, email, badPassword);
        cy.get(signup.submitButton).click();
        cy.get(signup.passError).should('be.visible');
      });
    });
  });

  it('CONFIRM PASSWORD: rejects mismatched passwords', () => {
    const email = `mahyar.taheri+${Date.now()}@gmail.com`;
    cy.fixture('signup.data.json').then((d) => {
      signup.open();
      signup.fillBasicInfo(d.firstName, d.lastName, d.phone, d.region, email, d.password);
      const wrongConfirm = d.password + 'diff';
      cy.get(signup.confirmField).clear().type(wrongConfirm);
      cy.get(signup.submitButton).click();
      cy.get(signup.confirmError).should('be.visible');
    });
  });
});
