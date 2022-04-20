
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCYZbAk2nd7sg_WSUh9IFFPNONcc1NdCxw",
  authDomain: "netflixclone-next-js.firebaseapp.com",
  projectId: "netflixclone-next-js",
  storageBucket: "netflixclone-next-js.appspot.com",
  messagingSenderId: "583855143819",
  appId: "1:583855143819:web:b2f105c14047fffb1a0d8e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const  auth=getAuth(app)


