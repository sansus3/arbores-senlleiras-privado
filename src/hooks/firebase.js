//npm install --save firebase //https://learnvue.co/2021/06/a-vue-firebase-authentication-tutorial-vue-3-and-firebase/#user-registration
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// Set the configuration for your app
// TODO: Replace with your app's config object
const firebaseConfig = {    
    apiKey: '',//your-api-key
    authDomain: 'senlleiras-especies',//<your-auth-domain>
    databaseURL: '',//<your-database-url>
    storageBucket: 'gs://senlleiras-especies.appspot.com/',//<your-storage-bucket-url>'
}



const firebaseApp = initializeApp(firebaseConfig);

// Get a reference to the storage service, which is used to create references in your storage bucket

export const storage = getStorage(firebaseApp);