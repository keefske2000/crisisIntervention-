import auth0 from 'auth0-js';

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: 'dev-tpi-qh0d.auth0.com',
    clientID: 'nnhMtDX7rq9gYfZBsYKpiZIsR3wJA5SH',
    redirectUri: 'localhost:3000',
    responseType: 'token id_token',
    scope: 'openid'
  });

  login() {
    this.auth0.authorize();
  }
}