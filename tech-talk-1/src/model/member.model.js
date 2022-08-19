import {addDoc, collection, getFirestore} from 'firebase/firestore'
import {app} from '../config/firebase'

const docRef = getFirestore(app);

const criarMembro = async (data) =>{
    await addDoc(collection(docRef,"membros"),data)
}

export default criarMembro;