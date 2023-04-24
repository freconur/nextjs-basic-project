import { doc, getDoc, getDocs, collection, getFirestore } from "firebase/firestore"
import { app } from "../firebase/firebase";


const db = getFirestore(app)

export const getTazasPersonalizados = async () => {
    const colRefProducts = await getDocs(collection(db, "/sublimados/ZaOy0E2r1eCAakrdHw4L/tazas"));
    let tazasPersonalizadas: Products[] = []
    colRefProducts.forEach(doc => {
        tazasPersonalizadas.push({ ...doc.data(), id: doc.id });
        //   dispatch({type:TYPES_BIOMBOS_CILINDROS.GET_CILINDROS_BIOMBOS_THEMES, payload:cilindrosBiombos})
    })
    return tazasPersonalizadas
};
export const getTazaPersonalizadaById = async (id: string) => {
    const docRef = doc(db, "/sublimados/ZaOy0E2r1eCAakrdHw4L/tazas", `${id}`);
    const docSnap = await getDoc(docRef);
    const rta = docSnap.data()
    if (docSnap.exists()) {
        return rta;
    }
}