import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAukTl_e-md2zVASzpS_9yvphfcLjQWoTE",
  authDomain: "tech-talk-6e88d.firebaseapp.com",
  projectId: "tech-talk-6e88d",
  storageBucket: "tech-talk-6e88d.appspot.com",
  messagingSenderId: "100428087048",
  appId: "1:100428087048:web:4335cdcfa2f42685da76bd"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);