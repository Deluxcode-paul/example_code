import firebase from 'firebase'

let config = {
  apiKey: 'AIzaSyAZTDFrHcMexBUm3w6GqlCqDGRZ-gaGG7E',
  authDomain: 'deluxcode-a7cbf.firebaseapp.com',
  databaseURL: 'https://deluxcode-a7cbf.firebaseio.com',
  projectId: 'deluxcode-a7cbf',
  storageBucket: 'deluxcode-a7cbf.appspot.com',
  messagingSenderId: '861220333253'
}

firebase.initializeApp(config)

// const db = firebase.firestore(firebase.initializeApp(config));

export default firebase
// export default db
