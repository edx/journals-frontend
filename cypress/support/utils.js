// Common functions

// Expand TOC Item
export const expandTocItem = listItem =>
  cy.get(listItem)
    .find('button').first()
    .should('have.attr', 'aria-expanded', 'false')
    .click()
    .should('have.attr', 'aria-expanded', 'true')

// Check for logo presence in parent container and verify logo attributes
export const verifyLogo = (parentCss, logoAltText, logoName) => {
  cy.get(parentCss)
    .find('.site-logo')
    .should('have.attr', 'alt', logoAltText)
    .and('have.attr', 'src')
    .and('match', logoName)
}

// check the page title and highlighted toc item
export const verifyPageTitle = (pageTitle) => {
  cy.get('.article-title').should('have.text', pageTitle)
  cy.get('.toc .highlight a').should('have.text', pageTitle)
}
