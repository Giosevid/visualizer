import { collection, getDocs } from 'firebase/firestore/lite';
import { dataBase } from '../firebase';

const dbInstancePoints = collection(dataBase, 'points');

const dbPoints = async () => {
  const points = await getDocs(dbInstancePoints);
  return points;
};

export default dbPoints;
