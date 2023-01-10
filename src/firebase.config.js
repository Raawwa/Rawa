import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAIY-DhG2I3ElF15GvPJqmaYN7SK01qY84',
  authDomain: 'kurdi-store.firebaseapp.com',
  databaseURL: 'https://kurdi-store-default-rtdb.firebaseio.com',
  projectId: 'kurdi-store',
  storageBucket: 'kurdi-store.appspot.com',
  messagingSenderId: '289369054204',
  appId: '1:289369054204:web:4415f5d5841eac9ead7079',
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
