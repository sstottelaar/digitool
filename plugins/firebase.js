import firebase from 'firebase/app'
import 'firebase/firestore'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "",
    databaseURL: "",
    projectId: ""
  })
}

const db = firebase.firestore()

db.settings({
  timestampsInSnapshots: true
})

export { db }
