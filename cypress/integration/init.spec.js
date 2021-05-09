describe('Cypress', () => {
  it('works', () => {
    expect(true).to.equal(true);
  })

  it('opens the app', () => {
    cy.visit('http://localhost:3000/')
  })
})