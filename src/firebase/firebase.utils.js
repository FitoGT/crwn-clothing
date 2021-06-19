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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`) //document reference
    const snapShot = await userRef.get() //data

    if (!snapShot.exists) {
        const { displayName, email } = userAuth
        const createdAt = new Date()
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log(error.message)
        }
    }

    return userRef

}



const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ 'prompt': 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export const addCollectionsAndDocs = (key, values) => {
    const colRef = firestore.collection(key)
    const batch = firestore.batch()

    values.forEach(obj => {
        const newDocRef = colRef.doc()
        batch.set(newDocRef, obj)
    });

    return batch.commit()
}

export const mapCollection = (collections) => {
    const transformed = collections.docs.map(d => {
        const {title, items} = d.data()
        return{
            routeName: encodeURI(title.toLowerCase()),
            id:d.id,
            title,
            items
        }
    })
    return transformed
}


export default firebase