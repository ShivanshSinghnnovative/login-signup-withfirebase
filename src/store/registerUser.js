import { defineStore } from 'pinia';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore"; 
import { app , db} from '../firebase.js';
const auth = getAuth(app);


export const userRegisterUse = defineStore('userRegister', () => {
    const createUser = async (userData) => {
        try {
            const result = createUserWithEmailAndPassword(auth, userData.email, userData.password);
            const storedata =  await addDoc(collection(db, "registerusersdetails"),{
                firstName: userData.firstName,
                lastName: userData.lastName,
                mobileNumber: userData.mobileNumber,
                email: userData.email
            })
            console.log(result , storedata)
        } catch (error) {
            console.log(error)
        }
    };

    return { createUser };
});
