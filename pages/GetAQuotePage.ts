export class GetAQuotePage {
    // ─── URLs ─────────────────────────────
    getAQuoteEn = '/getaquote';
    getAQuoteFr = '/getaquote/fr';

    // ─── Selectors ────────────────────────────
    newMortgageCard = '[data-testid="new-mortgage"]';
    renewalCard = '[data-testid="renewal"]';
    refinanceCard = '[data-testid="refinance"]';
}
export const getaquote = new GetAQuotePage();