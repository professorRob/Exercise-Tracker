import firebase from 'firebase/app'
import 'firebase/storage';

 var firebaseConfig = {
    apiKey: "AIzaSyAvGTnJVrItsaCNYTgi0UNivdR2Bjlf-Xg",
    authDomain: "fam-meme.firebaseapp.com",
    projectId: "fam-meme",
    storageBucket: "fam-meme.appspot.com",
    messagingSenderId: "985671551654",
    appId: "1:985671551654:web:a4a63a76486a9075c38267",
    measurementId: "G-MMYD1C173Z"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var storage = firebase.storage();
    firebase.analytics();


  export{
    storage, firebase as default
  };
 
