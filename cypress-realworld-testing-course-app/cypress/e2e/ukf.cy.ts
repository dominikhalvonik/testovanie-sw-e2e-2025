describe('template spec', () => {
  beforeEach(() => {
    cy.visit('https://www.ukf.sk/')
  })

  it("Halvonik search", () => {
    cy.get("#mod-finder-searchword").type("Halvonik")
    cy.get('button.btn.btn-primary.hasTooltip.finder').click();
    cy.get('.search-pages-counter strong').last().should('have.text', '1');
  })
})