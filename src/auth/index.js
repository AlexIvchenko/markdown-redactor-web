import router from '../router'
import axios from 'axios'

const API_URL = 'http://localhost:8888/api';

const SIGN_IN_URL = API_URL;

const SIGN_UP_URL = API_URL + '/users';

export default {
  user: {
    authenticated: false
  },

  signIn(context, credentials, redirect) {
    axios.get(SIGN_IN_URL, credentials)
      .then(function (response) {
        localStorage.setItem('username', credentials.username);
        localStorage.setItem('password', credentials.password);
        this.user.authenticated = true;
        if (redirect) {
          router.push(redirect);
        }
      })
      .catch(function (error) {
        context.error = error;
      })
  },

  signUp(context, credentials, redirect) {
    axios.post(SIGN_UP_URL, credentials)
      .then(function (response) {
        localStorage.setItem('username', credentials.username);
        localStorage.setItem('password', credentials.password);
        this.user.authenticated = true;
        if (redirect) {
          router.push(redirect);
        }
      })
      .catch(function (error) {
        context.error = error;
      })
  },

  signOut() {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    this.user.authenticated = false
  }
}
