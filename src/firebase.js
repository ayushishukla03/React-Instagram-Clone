import firebase from "firebase";

  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCTRQYIBBcLtu5T4hWHmAHgS5D-m0MkUCg",
    authDomain: "instagram-clone-react-f3d2d.firebaseapp.com",
    projectId: "instagram-clone-react-f3d2d",
    storageBucket: "instagram-clone-react-f3d2d.appspot.com",
    messagingSenderId: "916546088711",
    appId: "1:916546088711:web:5e78a601756641687d9fa2",
    measurementId: "G-F1FKXQF6ES"

  });
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const storage=firebase.storage();

  export {db,auth,storage};

