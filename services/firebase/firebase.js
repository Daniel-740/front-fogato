import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

import firebaseConfig from './config';

const app = initializeApp(firebaseConfig);

class Firebase{
    constructor(){
        initializeApp(firebaseConfig)
        this.db = getFirestore(app);
        this.storage = getStorage(app);
    }
}

const firebase = new Firebase();
export default firebase;
