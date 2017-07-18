module.exports = {
  'Home test': browser => {
    browser
      .url(browser.launchUrl)
      .waitForElementVisible('#pageIndex', 1000)
      .assert.containsText('h1', 'New User')
      .end();
  },

  'User creation': browser => {
    browser
      .url(browser.launchUrl)
      .waitForElementVisible('#pageIndex', 1000)
      .setValue('input[name="fname"]', 'Vlad')
      .setValue('input[name="lname"]', 'Zelinschi')
      .setValue('input[name="email"]', 'vlad@example.com')
      .submitForm('#userForm')
      .waitForElementVisible('#pageShow', 3000)
      .assert.containsText('#firstName', 'Vlad')
      .assert.containsText('#lastName', 'Zelinschi')
      .assert.containsText('#email', 'vlad@example.com')
      .end();
  }
};
