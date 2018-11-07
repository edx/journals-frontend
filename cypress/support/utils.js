// Common functions

export const expandTocItem = listItem =>
  cy.get(listItem)
    .find('button').first()
    .should('have.attr', 'aria-expanded', 'false')
    .click()
    .should('have.attr', 'aria-expanded', 'true')

export const verifyLogo = (parentCss, logoAltText, logoName) => {
  cy.get(parentCss)
    .find('.site-logo')
    .should('have.attr', 'alt', logoAltText)
    .and('have.attr', 'src')
    .and('match', logoName)
}
