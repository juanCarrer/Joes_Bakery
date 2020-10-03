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

firebase.initializeApp(firebaseConfig);

const dataBase = firebase.firestore();

// hace fetch de los thumbnails de las recetas
export const fetchThumbnails = async (collection) => {
	const data = [];
	await dataBase.collection(collection).get()
		.then((response) => {
			response.forEach(doc => {
				const docData = doc.data();
				const name = docData.name;
				const id = doc.id;
				const image = docData.image;

				data.push({
					name,
					id,
					image,
				})
			})
		});

	return data;
}

export const fetchPost = async (collection, document) => {
	let data;
	await dataBase.collection(`${collection}/${document}/post`).get()
		.then((response) => {
			response.forEach(doc => {
				data = doc.data();
			})
		})
	return data;
}