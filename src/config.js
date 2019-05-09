import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyB8dqhIpejo7erXt-_Uz6n-19HlHftTimM',
  authDomain: 'midme-e2498.firebaseapp.com',
  databaseURL: 'https://midme-e2498.firebaseio.com',
  projectId: 'midme-e2498',
  storageBucket: 'midme-e2498.appspot.com',
  messagingSenderId: '382262312070',
  appId: '1:382262312070:web:6e485ee2e782d470'
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const db = app.database();
