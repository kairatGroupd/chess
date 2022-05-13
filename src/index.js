import React from 'react';
import ReactDOM from 'react-dom';
import { setConfig } from 'react-google-translate';
import './index.css';
import App from './App';
import * as firebase from 'firebase'
import * as serviceWorker from './serviceWorker';
const config = {
  apiKey: "AIzaSyBYs6KJdu4wkKZIk0h9muX6etbYBIrqcQk",
  authDomain: "pubg-mobile-tournament-3bcc1.firebaseapp.com",
  databaseURL: "https://pubg-mobile-tournament-3bcc1.firebaseio.com",
  projectId: "pubg-mobile-tournament-3bcc1",
  storageBucket: "pubg-mobile-tournament-3bcc1.appspot.com",
  messagingSenderId: "201085907530",
  appId: "1:201085907530:web:f261c376382bff7df2acb3",
  measurementId: "G-N6F66ETW65"
};

firebase.initializeApp(config)
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
