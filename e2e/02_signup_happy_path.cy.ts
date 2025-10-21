import { signup } from '../pages/SignupPage';
import { getaquote } from '../pages/GetAQuotePage';

describe('Signup – happy path for account creation', () => {
  it('fills singup form with valid data, submits, confirms account creation', () => {
    cy.fixture('signup.data.json').then((d) => {
      const email = `mahyar.taheri+${Date.now()}@gmail.com`;

      cy.intercept({ method: 'POST', url: '**' }, (req) => {
        const body = req.body ? JSON.stringify(req.body) : '';
        if (body.includes(email)) {
          req.alias = 'signup';
        }
      });

      signup.open();
      signup.fillBasicInfo(d.firstName, d.lastName, d.phone, d.region, email, d.password);

      cy.get(signup.submitButton).should('be.enabled').click();

      cy.wait('@signup', { timeout: 10000 }).then(({ request, response }) => {
        expect(response, 'response present').to.exist;
        expect(response!.statusCode, 'status code').to.eq(201);
        expect(JSON.stringify(request.body)).to.include(email);
        expect(JSON.stringify(response!.body)).to.include(email);
      });

      cy.get(getaquote.newMortgageCard).should('be.visible', { timeout: 10000 });
    });
  });
});
