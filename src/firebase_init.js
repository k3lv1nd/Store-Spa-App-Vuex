import firebase from 'firebase'
// Initialize Firebase
var config = {
    apiKey: "AIzaSyAl30YuYsz5yDx7yzkCPQJsl4UjHYTdg3I",
    authDomain: "store-manager-spa.firebaseapp.com",
    databaseURL: "https://store-manager-spa.firebaseio.com",
    projectId: "store-manager-spa",
    storageBucket: "",
    messagingSenderId: "721755599283"
};
const  firebaseApp = firebase.initializeApp(config);
export default firebaseApp.firestore();