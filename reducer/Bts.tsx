import { app } from "../firebase/firebase";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const db = getFirestore(app);

export const getBtsCategories = async (dispatch: (action: any) => void) => {
    const btsCategories = await getDocs(collection(db, "bts"));
    const docs: BtsCategories[] = [];
    btsCategories.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
        dispatch({ type: "getCategoriesBts", payload: docs });
    });
};