describe('The Home Page', function() {
    it('successfully loads', function() {
        cy.visit('/');
    })
});

describe('Routers', function () {
    it('Open Details page by click', function () {
        var elementNumber = 3;

        cy.visit('/');

        cy.get('.poster-wrapper').eq(elementNumber).click();
        cy.url().should('include', '/details/' + (++elementNumber) );

        cy.screenshot();
    });
});