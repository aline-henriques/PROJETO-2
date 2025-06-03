describe('Publicação no fórum', () => {
  beforeEach(() => {
    cy.clearLocalStorage();
  });

  it('redireciona para login ao tentar publicar sem estar logado', () => {
    cy.visit('http://localhost:5173/forum');
    cy.contains('Publique').click();
    cy.url().should('include', '/login'); // corrigido lowercase
  });

  it('loga com cy.login e publica um novo post', () => {
    cy.login(); // seu comando customizado

    cy.visit('http://localhost:5173/forum');
    cy.contains('Publique').click();

    cy.get('input[name="publish"]')
      .type('Post de teste Cypress');
    cy.get('button[type="submit"]').click();

    cy.contains('Post de teste Cypress').should('exist');
  });
});