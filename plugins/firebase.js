import firebase from 'firebase/app'
import 'firebase/firestore'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyAviZwIe1EIi4vyugJru-zvar_vVwaIX-Y",
    databaseURL: "https://digitool-93cd7.firebaseio.com",
    projectId: "digitool-93cd7"
  })
}

const db = firebase.firestore()

db.settings({
  timestampsInSnapshots: true
})

export { db }
