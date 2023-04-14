import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import Constants from '../constants';

const firebaseConfig = {
  apiKey: Constants.firebase.apiKey,
  authDomain: Constants.firebase.authDomain,
  projectId: Constants.firebase.projectId,
  storageBucket: Constants.firebase.storageBucket,
  messagingSenderId: Constants.firebase.messagingSenderId,
  appId: Constants.firebase.appId
};

export const firebaseApp = initializeApp(firebaseConfig);
export const dataBase = getFirestore(firebaseApp);
