import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/database';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD4vWSyE-uWczxF-DsWRi-93TGZvIl2axE",
    authDomain: "catch-of-the-day-vahe.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-vahe.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

export {firebaseApp};

export default base