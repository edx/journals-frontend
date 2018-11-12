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
  Cypress.Cookies.preserveOnce('edxloggedin', 'stage-edx-user-info')
})
