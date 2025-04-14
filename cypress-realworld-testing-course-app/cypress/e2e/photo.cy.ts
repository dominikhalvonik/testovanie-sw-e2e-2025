describe('Kontrola navigácie na UKF.sk', () => {
  beforeEach(() => {
    cy.visit('https://www.ukf.sk/')
  })

  it('Skontroluje, či je prvý odkaz v navUKF "UKF.sk"', () => {
    // Počkaj, kým sa stránka načíta a navigácia zobrazí
    cy.get('#navukf', { timeout: 10000 }).should('exist');

      cy.get('#crossukf > li:first-child a').then(($el) => {
          const text = $el.text().trim();
          if (text !== 'UKF.skk') {
              cy.log('Text sa nezhoduje, ukladám screenshot...');
              cy.screenshot('navukf_warning');
          }
          expect(text).to.eq('UKF.sk'); // toto vyvolá chybu a screenshot, ak treba
      });
  });
});
