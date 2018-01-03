import InputField from '../pages/components/InputField';
import CheckBox from '../pages/components/CheckBox';
import Button from '../pages/components/Button';

class LoginPage {
  constructor() {
    this.url = './/docs/4.0/examples/signin';
    this.emailField = new InputField('#inputEmail');
    this.passwordField = new InputField('#inputPassword');
    this.rememberMeCheckbox = new CheckBox('.checkbox input');
    this.signInButton = new Button('button*=Sign in');
  }

  go() {
    return browser.url(this.url);
  }

  setUsername(value) {
    return this.emailField.setValue(value);
  }

  setPassword(value) {
    return this.passwordField.setValue(value);
  }

  checkRememberMe() {
    return this.rememberMeCheckbox.check();
  }

  signIn() {
    return this.signInButton.click();
  }
}

export default LoginPage;
