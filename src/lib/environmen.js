import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
 
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const emailJsConfig = {
 
};

export const recaptchaConfig = {
<<<<<<< HEAD
  SITE_KEY: "",
  SECRET_KEY: "",
=======
  SITE_KEY: "6LdQUkYsAAAAAFZLJ4AMsCyqyCZ86tP-p-KQzd9S",
  SECRET_KEY: "6LdQUkYsAAAAAAdoqgRtPr40lTabHyCmkSpQz9LX",
>>>>>>> 9cd77d6 (recapchta)
};
