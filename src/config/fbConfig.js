  import firebase from 'firebase/app'  
  import 'firebase/firestore'
  import 'firebase/auth'

  
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var config = {
    apiKey: "AIzaSyD_E59Wz11j5iR_uxMB1adVTnu-XVa7kFg",
    authDomain: "nicoles-blog.firebaseapp.com",
    databaseURL: "https://nicoles-blog.firebaseio.com",
    projectId: "nicoles-blog",
    storageBucket: "nicoles-blog.appspot.com",
    messagingSenderId: "48667138672",
    appId: "1:48667138672:web:4c612682d7c8560b65b2b5",
    measurementId: "G-LBZVFM7M3R"
  };

  // Initialize Firebase
  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true });
 

  export default firebase;