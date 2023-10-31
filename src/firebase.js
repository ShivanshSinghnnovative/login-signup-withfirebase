import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyBtdHVyK_P6nLSc_69BGVlu-RZQ8ip51bs",
    authDomain: "fir-project-51cba.firebaseapp.com",
    projectId: "fir-project-51cba",
    storageBucket: "fir-project-51cba.appspot.com",
    messagingSenderId: "368045819020",
    appId: "1:368045819020:web:7555cfc6a4543184e7a7a9",
    measurementId: "G-TZT30SHCJH"
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);