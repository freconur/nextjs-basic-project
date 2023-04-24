import { doc, getDoc, getDocs, collection, getFirestore } from "firebase/firestore"
import { app } from "../firebase/firebase";


const db = getFirestore(app)

export const getCilindrosBiombosThemes = async () => {
    const colRefThemes = await getDocs(collection(db, "cilindrosBiombos"));
    let cilindrosBiombos: Biombos[] = []
    colRefThemes.forEach(doc => {
        cilindrosBiombos.push({ ...doc.data(), id: doc.id });
        //   dispatch({type:TYPES_BIOMBOS_CILINDROS.GET_CILINDROS_BIOMBOS_THEMES, payload:cilindrosBiombos})
    })
    return cilindrosBiombos
};
export const getBiomboProductById = async (id: string) => {
    const docRef = doc(db, "cilindrosBiombos", `${id}`);
    const docSnap = await getDoc(docRef);
    const rta = docSnap.data()
    if (docSnap.exists()) {
        return rta;
    }
}