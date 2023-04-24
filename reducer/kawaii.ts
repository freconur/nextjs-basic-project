import {doc ,getDoc ,getDocs, collection, getFirestore} from "firebase/firestore"
import { app } from "../firebase/firebase";


const db = getFirestore(app)

export const getKawaiiProducts = async () => {
    const rta = await getDocs(collection(db, "kawaii"));
    const kawaii: Products[] = [];
    rta.forEach((doc) => {
      kawaii.push({ ...doc.data(), id: doc.id });
    });
    // dispatch({type:"getProductKawaii", payload:kawaii})
    return kawaii
  };
export const kawaiiProductById = async (id: string | null) => {
  const docRef = doc(db, "kawaii", `${id}`);
  const docSnap = await getDoc(docRef);
  const rta = docSnap.data()
  if (docSnap.exists()) {
    return rta;
  }
}

export const allProductsKawaii = () => {

} 