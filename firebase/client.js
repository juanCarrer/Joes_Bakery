import * as firebase from 'firebase';

const firebaseConfig = {
	apiKey: "AIzaSyC6oc_lb90nzhBLmoXOuitc0rZRM-z1qgk",
	authDomain: "joe-s-bakery.firebaseapp.com",
	databaseURL: "https://joe-s-bakery.firebaseio.com",
	projectId: "joe-s-bakery",
	storageBucket: "joe-s-bakery.appspot.com",
	messagingSenderId: "828716849122",
	appId: "1:828716849122:web:1eb88cc2f6a3b8c604cbbb"
};

console.log(firebase.apps.length);
firebase.initializeApp(firebaseConfig);
console.log('esto se esta ejecutando en firebase');
console.log(firebase.apps.length);

//funciones https://github.com/midudev/curso-nextjs-twitter-clone/blob/04-firestore-for-creating-tweets/firebase/client.js