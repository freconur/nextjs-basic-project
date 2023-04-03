import {getDocs, collection, getFirestore} from "firebase/firestore"
import { app } from "../firebase/firebase";


const db = getFirestore(app)

export const getKawaiiProducts = async (dispatch:(action:any)=>void) => {
    const rta = await getDocs(collection(db, "kawaii"));
    const kawaii: Kawaii[] = [];
    rta.forEach((doc) => {
      kawaii.push({ ...doc.data(), id: doc.id });
    });
    dispatch({type:"getProductKawaii", payload:kawaii})
  };

export const allProductsKawaii = () => {

} 