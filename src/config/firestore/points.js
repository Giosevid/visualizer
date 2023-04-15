import { getDocs } from 'firebase/firestore/lite'
import { pointsCollection } from '../firebase'

const dbPoints = async () => await getDocs(pointsCollection)

export default dbPoints
