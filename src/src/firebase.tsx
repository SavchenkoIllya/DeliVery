import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyBzMklcUbK2rzOl20gG7g8ukDMdnGFgDDg",
  authDomain: "delivery-app-95f21.firebaseapp.com",
  projectId: "delivery-app-95f21",
  storageBucket: "delivery-app-95f21.appspot.com",
  messagingSenderId: "105357140540",
  appId: "1:105357140540:web:e7f3065fbb77c026b4d939"
});

if (!firebase.apps.length)
  firebase.initializeApp({
    apiKey: "AIzaSyBzMklcUbK2rzOl20gG7g8ukDMdnGFgDDg",
    authDomain: "delivery-app-95f21.firebaseapp.com",
    projectId: "delivery-app-95f21",
    storageBucket: "delivery-app-95f21.appspot.com",
    messagingSenderId: "105357140540",
    appId: "1:105357140540:web:e7f3065fbb77c026b4d939"
  });

export const auth = firebase.auth();
export default app;