import { signup } from '../pages/SignupPage';

describe('Signup – fields & labels', () => {
  it('validates fields and their labels, based on selected language', () => {
    const lang = (Cypress.env('LANG') as 'en' | 'fr') || 'en';

    cy.fixture('signup.i18n.json').then((i18n) => {
      const L = i18n[lang];

      signup.open();

      // first name
      cy.get(signup.firstNameField).should('be.visible');
      cy.get(signup.firstNameLabel).should('contain.text', L.firstName);

      // last name
      cy.get(signup.lastNameField).should('be.visible');
      cy.get(signup.lastNameLabel).should('contain.text', L.lastName);

      // phone
      cy.get(signup.phoneField).should('be.visible');
      cy.get(signup.phoneLabel).should('contain.text', L.phone);

      // region
      cy.get(signup.regionField).should('be.visible');
      cy.get(signup.regionLabel).should('contain.text', L.region);

      // email
      cy.get(signup.emailField).should('be.visible');
      cy.get(signup.emailLabel).should('contain.text', L.email);

      // password
      cy.get(signup.passField).should('be.visible');
      cy.get(signup.passLabel).should('contain.text', L.password);

      // confirm password
      cy.get(signup.confirmField).should('be.visible');
      cy.get(signup.confirmLabel).should('contain.text', L.confirm);

      // submit
      cy.get(signup.submitButton).should('be.visible').and('contain.text', L.submit);
    });
  });
});
