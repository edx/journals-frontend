import {
  verifyLogo,
} from '../../support/utils'

describe('Landing Page Configurations', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Verfies the correct header components', () => {
    // Check for presence of valid site logo in Footer, also check alt text and logo name
    verifyLogo('.site-header', 'site logo', /edx-logo/)
    // Check for the presence of Login button
    cy.get('.header-actions')
      .find('.btn')
      .should('have.text', 'Login')
  })

  it('Verfies the correct footer components', () => {
    const footerTexts = ['FAQ', 'Contact Us']
    // Check for presence of valid site logo in Footer, also check alt text and logo name
    verifyLogo('.footer-content', 'site logo', /edx-logo/)
    // Check for the presence of valid links in footer section
    cy.get('.footer-content')
      .find('u').each(($u, index) => {
        cy.wrap($u).should('have.text', footerTexts[index])
      })
  })

  it('verifies About Page contents for logged out user', () => {
    // Click on the course card containing the name of Test Journal
    cy.contains(Cypress.env('JOURNAL_NAME')).click()
    // Check for the presence of about key word in resulting url
    cy.url().should('include', '/about')
    // Check for the Course Information on about page
    cy.contains('.hero h1', Cypress.env('JOURNAL_NAME'))
    cy.contains('.hero h2', `${Cypress.env('JOURNAL_NAME')} description`)
    cy.contains('.hero .btn', Cypress.env('JOURNAL_PRICE'))
  })
})
