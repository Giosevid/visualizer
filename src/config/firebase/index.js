import { initializeApp } from 'firebase/app';
import { getFirestore, collection } from 'firebase/firestore/lite';
import Constants from '../constants';

const firebaseConfig = {
  apiKey: Constants.firebase.apiKey,
  authDomain: Constants.firebase.authDomain,
  projectId: Constants.firebase.projectId,
  storageBucket: Constants.firebase.storageBucket,
  messagingSenderId: Constants.firebase.messagingSenderId,
  appId: Constants.firebase.appId
};

const firebaseApp = initializeApp(firebaseConfig);
const dataBase = getFirestore(firebaseApp);

export const pointsCollection = collection(dataBase, Constants.points);
export const materialsCollection = collection(dataBase, Constants.materials);
