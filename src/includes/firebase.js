import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyAgBmIv7fxiW8JsTnOe_K32yelxKc9CzVo',
	authDomain: 'shmusic-9e7ae.firebaseapp.com',
	projectId: 'shmusic-9e7ae',
	storageBucket: 'shmusic-9e7ae.appspot.com',
	appId: '1:252245625509:web:54e773ae7e1d0a2e6c5b4c'
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

const usersCollection = db.collection('users');

export {
	auth,
	db,
	usersCollection
};