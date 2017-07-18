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
      .saveScreenshot('screenshots/1.jpg')
      .setValue('input[name="fname"]', 'Vlad')
      .setValue('input[name="lname"]', 'Zelinschi')
      .setValue('input[name="email"]', 'vlad@example.com')
      .saveScreenshot('screenshots/2.jpg')
      .submitForm('#userForm')
      .waitForElementVisible('#pageShow', 3000)
      .assert.containsText('#firstName', 'Vlad')
      .assert.containsText('#lastName', 'Zelinschi')
      .assert.containsText('#email', 'vlad@example.com')
      .saveScreenshot('screenshots/3.jpg')
      .end();
  }
};
