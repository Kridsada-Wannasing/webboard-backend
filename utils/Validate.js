class Validate {
  constructor(credentials) {
    //credentials is email or password
    this.credentials = credentials;
  }

  validateEmail() {
    const emailValidator = /^[^s@]+@[^s@]+.[^s@]+$/;
    return emailValidator.test(this.credentials);
  }

  validatePassword() {
    const passwordValidator = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{10,20})/;
    return passwordValidator.test(this.credentials);
  }
}

module.exports = Validate;
