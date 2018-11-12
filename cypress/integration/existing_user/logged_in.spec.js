import {
  expandTocItem,
} from '../../support/utils'

describe('Verify Journal contents', () => {
  // Login to edX stage using request and get user session
  beforeEach(() => {
    cy.login_request(Cypress.env('JOURNAL_USER_EMAIL'), Cypress.env('JOURNAL_USER_PASSWORD'))
    // Use the above user session to login to Journals
    cy.visit('/')
    cy.get('.header-actions > .btn').contains('Login').click()
  })

  it('checks TOC panel for logged in user', () => {
    // Click on the Journal card
    cy.contains('E2E Tests Journal').click()
    // Check for the presence of TOC panel
    cy.get('#side-nav-panel-toggle').should('have.text', 'Contents')
    // Check that by default TOC panel is closed
    cy.get('#nav-panel')
      .should('have.class', 'nav-panel-closed')
    // Click on the toggle button to open the TOC Panel
    cy.contains('#side-nav-panel-toggle', 'Content').click()
    // Check that TOC panel is now open and verify Title
    cy.get('#nav-panel')
      .should('have.class', 'nav-panel-open')
      .find('.toc-title').should('have.text', 'TABLE OF CONTENTS')
    // Check the presence of First Main Item(Chapter)
    cy.get('.toc>ul>li').first().as('firstMainItem')
    // Check Chapter Name
    cy.get('@firstMainItem')
      .find('a').first()
      .should('have.text', 'Chapter 1')
    // Check that by default chapter is not expanded but expands on click
    expandTocItem('@firstMainItem')
    // Check the presence of First Main Item's child
    cy.get('@firstMainItem').find('ul').first().as('firstChildItem')
    // Check Child Name
    cy.get('@firstChildItem')
      .find('a').first()
      .should('have.text', '1.1')
    // Check that by default child is not expanded but expands on click
    expandTocItem('@firstChildItem')
    // Check the presence of First Main Item's grandchild
    cy.get('@firstChildItem').find('ul').first().as('firstGrandChildItem')
    // Check GrandChild Name
    cy.get('@firstGrandChildItem')
      .find('a').first()
      .should('have.text', '1.1.1')
  })
})
