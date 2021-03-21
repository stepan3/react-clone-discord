import firebase from 'firebase'

var firebaseConfig = {
  apiKey: 'AIzaSyDLAvvATrVEZmpu1Yw3QCZHkB0jTUdSooY',
  authDomain: 'discord-clone-25253.firebaseapp.com',
  projectId: 'discord-clone-25253',
  storageBucket: 'discord-clone-25253.appspot.com',
  messagingSenderId: '571602514160',
  appId: '1:571602514160:web:7c243d1f6d947dc7431235'
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db
