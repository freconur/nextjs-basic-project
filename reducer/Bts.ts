import { app } from "../firebase/firebase";
import { collection, getDocs, getFirestore, onSnapshot } from "firebase/firestore";

const db = getFirestore(app);

export const getBtsCategories = async (dispatch: (action: any) => void) => {
    const btsCategories = await getDocs(collection(db, "bts"));
    const docs: BtsCategories[] = [];
    btsCategories.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
        dispatch({ type: "getCategoriesBts", payload: docs });
    });
};

export const getTazasBts = (dispatch:(action:any)=>void) => {
    const colRef = collection(db, "bts/etkmO3TrV2WqzKwVGQQO/tazas");
    onSnapshot(colRef, (snapshot) => {
      let tazas:Products[] = [];
      snapshot.docs.forEach((doc) => {
        tazas.push({ ...doc.data(), id: doc.id });
      });
      dispatch({ type: "getTazasBts", payload: tazas });
    });
  };
  export const getPosterBts = (dispatch:(action:any)=>void) => {
    const colRef = collection(db, "bts/Fwh0KuBTK4P5xmzJB8j2/poster");
    onSnapshot(colRef, (snapshot) => {
      let poster:Products[] = [];
      snapshot.docs.forEach((doc) => {
        poster.push({ ...doc.data(), id: doc.id });
      });
      dispatch({ type: "getPosterBts", payload: poster });
    });
  };