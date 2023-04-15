import { getDocs } from 'firebase/firestore/lite';
import { materialsCollection } from '../firebase';

const dbMaterials = async () => await getDocs(materialsCollection);

export default dbMaterials;
