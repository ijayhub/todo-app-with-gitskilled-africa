// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';



const firebaseConfig = {
	apiKey: 'AIzaSyAs4-QQJQnG_ZmUkB014-S3f7aXXfviVH0',
	authDomain: 'todo-app-gitskilled-africa.firebaseapp.com',
	projectId: 'todo-app-gitskilled-africa',
	storageBucket: 'todo-app-gitskilled-africa.firebasestorage.app',
	messagingSenderId: '740822437890',
	appId: '1:740822437890:web:6ea2e7cbb76ecd40ec171b',
	measurementId: 'G-E2889PF7N0',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
