import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const emailJsConfig = {};

export const recaptchaConfig = {
  SITE_KEY: "6Ldn9UYsAAAAAMnjXeVQYg70YatwuU0ruyfQd0Dq",
  SECRET_KEY: "6Ldn9UYsAAAAAEz-lomLX8XcU7MCh15pEIaCh_G1",
};
