import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCOakBzr_sCJGRtEWiOayvWNFd9XIZk1pk",
  authDomain: "portafolio-f4371.firebaseapp.com",
  projectId: "portafolio-f4371",
  storageBucket: "portafolio-f4371.firebasestorage.app",
  messagingSenderId: "443555057492",
  appId: "1:443555057492:web:f4d5e8c2f7aaee7bbfc2c1",
  measurementId: "G-2JQ4VJE609",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const emailJsConfig = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "",
};

// ✅ Nombres correctos para reCAPTCHA
export const recaptchaConfig = {
  SITE_KEY: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "",
  SECRET_KEY: process.env.RECAPTCHA_SECRET_KEY || "",
};
