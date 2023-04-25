import {
  doc,
  getDoc,
  getDocs,
  collection,
  getFirestore,
} from "firebase/firestore";
import { app } from "../firebase/firebase";



const db = getFirestore(app);

export const getTazasPersonzalidas = async () => {
  const rta = await getDocs(
    collection(db, "/sublimados/ZaOy0E2r1eCAakrdHw4L/tazas")
  );
  const tazasPersonzalidas: Products[] = [];
  rta.forEach((doc) => {
    tazasPersonzalidas.push({ ...doc.data(), id: doc.id });
  });
  return tazasPersonzalidas;
};
export const kawaiiProductById = async (id: string) => {
  const docRef = doc(db, "kawaii", `${id}`);
  const docSnap = await getDoc(docRef);
  const rta = docSnap.data();
  if (docSnap.exists()) {
    return rta;
  }
};
