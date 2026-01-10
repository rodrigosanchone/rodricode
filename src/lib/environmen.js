import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
 
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
