import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
const firebaseConfig = {
    apiKey: "AIzaSyDcMIOEHmUmixgCOwJ7rFNgrX-iZ7Wiydw",
    authDomain: "my-second-app-8a93f.firebaseapp.com",
    projectId: "my-second-app-8a93f",
    storageBucket: "my-second-app-8a93f.appspot.com",
    messagingSenderId: "873343556019",
    appId: "1:873343556019:web:973c3491bd70da77b4d3c6"
  };

  const app = initializeApp(firebaseConfig);
  export const db = getDatabase(app);