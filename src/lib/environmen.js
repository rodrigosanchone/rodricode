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
  YOUR_SERVICE_ID: "service_tnel3uv",
  YOUR_TEMPLATE_ID: "template_ftcal99",
  YOUR_PUBLIC_KEY: "zwIzwnKmBo1nR7wmu",
};

export const recaptchaConfig = {
  SITE_KEY: "6LfzIoMqAAAAACS5p8kACFAEraLg6VyuZGuVKs4D",
  SECRET_KEY: "6LfzIoMqAAAAAFfrlSOtDTVUcH51NtG0DYlcW72E",
};
