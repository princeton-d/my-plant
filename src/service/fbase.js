import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAKrdPLkv5yw4ltJivcT1YDi9UalD_-Kgk",
  authDomain: "my-plant-ae765.firebaseapp.com",
  projectId: "my-plant-ae765",
  storageBucket: "my-plant-ae765.appspot.com",
  messagingSenderId: "267177872129",
  appId: "1:267177872129:web:0660149788989f90906900"
};

const app = initializeApp(firebaseConfig);

export default initializeApp(firebaseConfig);