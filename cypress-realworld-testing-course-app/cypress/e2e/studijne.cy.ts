describe('Overenie osoby na stránke FPVaI UKF', () => {
    it('Nájde Ing. Zuzanu Bartošovú ako druhú v študijnom oddelení', () => {
        cy.visit('https://www.fpvai.ukf.sk/sk/');

        // Akceptuj cookies ak treba
        cy.get('body').then($body => {
            if ($body.text().includes('Táto webová stránka používa cookies')) {
                cy.contains('Rozumiem').click({ force: true });
            }
        });

        // Nájdi presne ten odkaz a klikni naň násilne, aj keď nie je viditeľný
        cy.get('.sp-dropdown a[href="/sk/fakulta/o-fakulte/pracoviska-dekanatu"]')
            .should('have.text', 'Pracoviská dekanátu')
            .click({ force: true });

        // Over že sme na správnej podstránke
        cy.url().should('include', '/pracoviska-dekanatu');

        // Skontroluj sekciu Študijné oddelenie
        cy.contains('h3', 'Študijné oddelenie')
            .scrollIntoView()
            .should('be.visible');

        // Nájdi sekciu a všetkých zamestnancov hneď pod ňou
        cy.get('div.sppb-person-information')
            .contains('Ing. Zuzana Bartošová')
            .parents('.sppb-addon-person') // alebo .sppb-addon ak chceš celý blok
            .screenshot('zuzana-bartosova-found');
    });
});
