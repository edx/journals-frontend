import {
  expandTocItem,
  verifyPageTitle,
  goToPage,
} from '../../support/utils'

describe('Verify Journal Navigation', () => {
  // Login to edX stage using request and get user session
  beforeEach(() => {
    cy.login_using_api(Cypress.env('JOURNAL_USER_EMAIL'), Cypress.env('JOURNAL_USER_PASSWORD'))
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

  it('browse pages using next and previous button', () => {
    // Click on the Journal card
    cy.contains('E2E Tests Journal').click()
    // Go to a specific page in a specific chapter
    goToPage('Chapter 3', 'First Page')
    // Move to next page and confirm highlighted item and title of page is correct
    cy.contains('.nav-btn', 'Next').click()
    verifyPageTitle('Second Page')
    // Move to next page and confirm highlighted item and title of page is correct
    cy.contains('.nav-btn', 'Next').click()
    verifyPageTitle('Third Page')
    // Move to previous page and confirm highlighted item and title of page is correct
    cy.contains('.nav-btn', 'Previous').click()
    verifyPageTitle('Second Page')
  })
})

describe('Verify Journal Pages', () => {
  // Login to edX stage using request and get user session
  beforeEach(() => {
    cy.visit('/')
    cy.login_from_ui(Cypress.env('JOURNAL_USER_EMAIL'), Cypress.env('JOURNAL_USER_PASSWORD'))
  })

  it('checks Text page', () => {
    const bodyTexts = ['Simple text', 'Raw html text.']
    // Click on the Journal card
    cy.contains('E2E Tests Journal').click()
    // Go to a specific page in a specific chapter
    goToPage('Chapter 2', 'Text')
    cy.get('.journal-page-body')
      .find('.body-element p').each(($bodyElement, index) => {
        cy.wrap($bodyElement).should('have.text', bodyTexts[index])
      })
  })

  it('checks Images page', () => {
    const altTexts = ['Apple Sauce', 'Quote']
    // Click on the Journal card
    cy.contains('E2E Tests Journal').click()
    // Go to a specific page in a specific chapter
    goToPage('Chapter 2', 'Images')
    cy.get('.journal-page-body')
      .find('.body-element img').each(($bodyElement, index) => {
        cy.wrap($bodyElement).should('have.attr', 'alt', altTexts[index])
      })
  })

  it('checks Documents page', () => {
    const docIds = ['pdf-70efdf2ec9b086079795c442636b55fb', 'pdf-a87ff679a2f3e71d9181a67b7542122c']
    // Click on the Journal card
    cy.contains('E2E Tests Journal').click()
    // Go to a specific page in a specific chapter
    goToPage('Chapter 2', 'Documents')
    cy.get('.journal-page-body')
      .find('.body-element>span').each(($bodyElement, index) => {
        cy.wrap($bodyElement).should('have.attr', 'id', docIds[index])
      })
  })

  it('checks Video page', () => {
    const vidIds = ['xblock_video-e2a2dcc36a08a345332c751b2f2e476c', 'xblock_video-31839b036f63806cba3f47b93af8ccb5']
    // Click on the Journal card
    cy.contains('E2E Tests Journal').click()
    // Go to a specific page in a specific chapter
    goToPage('Chapter 2', 'Videos')
    cy.get('.journal-page-body')
      .find('.body-element>span').each(($bodyElement, index) => {
        cy.wrap($bodyElement).should('have.attr', 'id', vidIds[index])
      })
  })
})
