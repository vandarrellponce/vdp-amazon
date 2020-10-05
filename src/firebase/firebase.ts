import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
	apiKey: 'AIzaSyAWYBCHg5YBNN-Te87dPKSCjD19x2OXGAE',
	authDomain: 'vdp-amzon.firebaseapp.com',
	databaseURL: 'https://vdp-amzon.firebaseio.com',
	projectId: 'vdp-amzon',
	storageBucket: 'vdp-amzon.appspot.com',
	messagingSenderId: '59475348180',
	appId: '1:59475348180:web:53f85a580b1d6c4e540941',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()

const auth = firebase.auth()
const storage = firebase.storage()

export { db, auth, storage }
