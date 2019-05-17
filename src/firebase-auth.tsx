import app, { Component } from 'apprun';

import * as firebase from 'firebase/app';
import * as firebaseui from 'firebaseui';

const config = {
  apiKey: "AIzaSyAImbYY2eFb5TPcBlZn-iHaNhKtNJ8Seug",
  authDomain: "apprun-demo.firebaseapp.com",
  databaseURL: "https://apprun-demo.firebaseio.com",
  projectId: "apprun-demo",
  storageBucket: "apprun-demo.appspot.com",
  messagingSenderId: "1024119839929",
  appId: "1:1024119839929:web:dc68079183e65d25"
};
firebase.initializeApp(config);

const uiConfig = {
  signInSuccessUrl: '#',
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    // firebase.auth.GithubAuthProvider.PROVIDER_ID,
    // firebase.auth.EmailAuthProvider.PROVIDER_ID,
    // firebase.auth.PhoneAuthProvider.PROVIDER_ID
  ],
  // Terms of service url.
  // tosUrl: '<your-tos-url>'
};

export let user;

firebase.auth().onAuthStateChanged(function (_user) {
  // console.log('firebase auth: ', _user, document.location.hash)
  if (_user) {
    user = _user;
    app.run('#auth');
    app.run('route', document.location.hash);
  } else {
    user = null;
    app.run('#signin');
  }
})

const ui = new firebaseui.auth.AuthUI(firebase.auth());

export default class firebaseComponent extends Component {
  update = {
    '#signin': _ => {
      uiConfig.signInSuccessUrl = document.location.href;
      ui.start('#my-app', uiConfig);
    },
    '#signout': _ => {
      firebase.auth().signOut();
      document.location.replace(document.location.origin);
    },
  }
}