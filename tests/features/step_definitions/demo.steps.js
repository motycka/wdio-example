import { defineSupportCode } from 'cucumber';
import LoginPage from '../../pages/LoginPage';

defineSupportCode(function ({ And, But, Given, Then, When }) {

  const loginPage = new LoginPage();

  Given(/^user is on the login page$/, () => {
    loginPage.go();
  });

  When(/^he enters username (.*) and password (.*)$/, (username, password) => {
    loginPage.setUsername(username);
    loginPage.setPassword(password);
  });

  When(/^he checks Remember me option$/, () => {
    loginPage.checkRememberMe()
  });

  When(/^he clicks Sign In$/, () => {
    loginPage.signIn()
  });

  Then(/^he is signed in$/, () => {
    // You would do some assertions here
  });

});