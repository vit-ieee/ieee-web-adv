// Firebase SDK imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfo4Q0J5NDvarN4WZJ2youBV3rB7YpPpw",
  authDomain: "ieee-visat-website-69d0c.firebaseapp.com",
  projectId: "ieee-visat-website-69d0c",
  storageBucket: "ieee-visat-website-69d0c.firebasestorage.app",
  messagingSenderId: "758234547940",
  appId: "1:758234547940:web:efbb90bebc04c4ef31cef1",
  measurementId: "G-RB7C8DG6GT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
const auth = getAuth(app);
const db = getFirestore(app);

// Export for other pages
export { auth, db };