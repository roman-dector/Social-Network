class WrongCredentialsError extends Error {
  constructor(message) {
    super(message);
    this.name = 'WrongCredentials';
  }
}

class WrongCaptchaError extends Error {
  constructor(message) {
    super(message);
    this.name = 'WrongCaptcha';
  }
}

export { WrongCredentialsError, WrongCaptchaError };
