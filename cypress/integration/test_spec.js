describe('Mercadolibre Triana Search', () => {
    it('Get Iphones', () => {
        //Join
        cy.visit('http://localhost:3000/');
        //Search and click
        cy.get('[type="text"]').clear()
        cy.get('[type="text"]').type('Android {enter}');
        cy.wait(2000)
        cy.contains('Android');
        cy.get('.btn btn-primary btn-block').click();
       

        cy.url().should('include', '/mco'); //assert

    });
});