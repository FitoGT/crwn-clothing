import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyCY2G4UBLBRiZeJ_OtRSd05JqUII-wC3mg",
    authDomain: "crwn-db-a6504.firebaseapp.com",
    projectId: "crwn-db-a6504",
    storageBucket: "crwn-db-a6504.appspot.com",
    messagingSenderId: "361526789415",
    appId: "1:361526789415:web:e392a2fb29a63927c35502",
    measurementId: "G-RYTPPLEWP3"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({'prompt':'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase