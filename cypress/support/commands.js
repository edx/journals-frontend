// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

// Create a command which takes email and password and logs user in using api request
Cypress.Commands.add('login_request', (userEmail, userPassword) => {
  // Open the Stage landing page to create session
  cy.request({
    url: 'https://courses.stage.edx.org/login',
    failOnStatusCode: false,
    auth: {
      user: Cypress.env('AUTH_USER_NAME'),
      pass: Cypress.env('AUTH_PASSWORD'),
    },
  })
  // Save csrftoken and use it in header to send Login Post request
  cy.getCookie('csrftoken').its('value').then(($token) => {
    cy.request({
      method: 'POST',
      url: 'https://courses.stage.edx.org/user_api/v1/account/login_session/',
      form: true,
      body: {
        email: userEmail,
        password: userPassword,
        remember: false,
      },
      headers: {
        Referer: 'https://courses.stage.edx.org/login',
        'X-CSRFToken': $token,
      },
    })
  })
})
