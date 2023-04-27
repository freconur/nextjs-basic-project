import { app } from "../firebase/firebase";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  onSnapshot,
} from "firebase/firestore";

const db = getFirestore(app);

export const getBtsCategories = async (dispatch: (action: any) => void) => {
  const btsCategories = await getDocs(collection(db, "bts"));
  const docs: BtsCategories[] = [];
  btsCategories.forEach((doc) => {
    docs.push({ ...doc.data(), id: doc.id });
    dispatch({ type: "getCategoriesBts", payload: docs });
  });
};

export const getTazasBts = async() => {
  const rta = await getDocs(collection(db, "bts/etkmO3TrV2WqzKwVGQQO/tazas"));
  const tazas: Products[] = [];
  rta.forEach((doc) => {
    tazas.push({ ...doc.data(), id: doc.id });
  });
  return tazas
};
export const getTazasBtsById = async (id: string) => {
  const docRef = doc(db, "bts/etkmO3TrV2WqzKwVGQQO/tazas", `${id}`);
  const docSnap = await getDoc(docRef);
  const rta = docSnap.data()
  if (docSnap.exists()) {
    return rta;
  }
}
export const getPosterBts = async() => {
  const rta = await getDocs(collection(db, "bts/Fwh0KuBTK4P5xmzJB8j2/poster"));
  const poster: Products[] = [];
  rta.forEach((doc) => {
    poster.push({ ...doc.data(), id: doc.id });
  });
  return poster
};
export const getPosterBtsById = async (id: string) => {
  const docRef = doc(db, "bts/Fwh0KuBTK4P5xmzJB8j2/poster", `${id}`);
  const docSnap = await getDoc(docRef);
  const rta = docSnap.data()
  if (docSnap.exists()) {
    return rta;
  }
}
export const getLibretasBts = async() => {
  const rta = await getDocs(collection(db, "bts/GEhNFGq9WCuKdxZxzF35/libretas"));
  const libretas: Products[] = [];
  rta.forEach((doc) => {
    libretas.push({ ...doc.data(), id: doc.id });
  });
  return libretas
};
export const getLibretasBtsById = async (id: string) => {
  const docRef = doc(db, "bts/GEhNFGq9WCuKdxZxzF35/libretas", `${id}`);
  const docSnap = await getDoc(docRef);
  const rta = docSnap.data()
  if (docSnap.exists()) {
    return rta;
  }
}
export const getCojinesBts = async() => {
  const rta = await getDocs(collection(db, "bts/G91fJSTIGxPbP6YWAr4r/cojines"));
  const cojines: Products[] = [];
  rta.forEach((doc) => {
    cojines.push({ ...doc.data(), id: doc.id });
  });
  return cojines
};
export const getCojinesById = async (id: string) => {
  const docRef = doc(db, "bts/G91fJSTIGxPbP6YWAr4r/cojines", `${id}`);
  const docSnap = await getDoc(docRef);
  const rta = docSnap.data()
  if (docSnap.exists()) {
    return rta;
  }
}
// export const getCartucherasBts = (dispatch: (action: any) => void) => {
  export const getCartucherasBts = async() => {
    const rta = await getDocs(collection(db, "bts/Xq9UGyUn6d4OukEb1jPk/cartucheras"));
    const cartucheras: Products[] = [];
    rta.forEach((doc) => {
      cartucheras.push({ ...doc.data(), id: doc.id });
    });
    return cartucheras
};
export const getCartucherasById = async (id: string) => {
  const docRef = doc(db, "bts/Xq9UGyUn6d4OukEb1jPk/cartucheras", `${id}`);
  const docSnap = await getDoc(docRef);
  const rta = docSnap.data()
  if (docSnap.exists()) {
    return rta;
  }
}
export const getCojinesMidBts = async() => {
  const rta = await getDocs(collection(db, "bts/M399N3OWcQXBvyIPkz0H/cojinesMid"));
  const cojinesMid: Products[] = [];
  rta.forEach((doc) => {
    cojinesMid.push({ ...doc.data(), id: doc.id });
  });
  return cojinesMid
};
export const getCojinesMidById = async (id: string) => {
  const docRef = doc(db, "bts/M399N3OWcQXBvyIPkz0H/cojinesMid", `${id}`);
  const docSnap = await getDoc(docRef);
  const rta = docSnap.data()
  if (docSnap.exists()) {
    return rta;
  }
}
export const getPolosBts = async() => {
  const rta = await getDocs(collection(db, "bts/n8rVgfULKHbGhFTMWv3Z/polos"));
  const polos: Products[] = [];
  rta.forEach((doc) => {
    polos.push({ ...doc.data(), id: doc.id });
  });
  return polos
};
export const getPolosById = async (id: string) => {
  const docRef = doc(db, "bts/n8rVgfULKHbGhFTMWv3Z/polos", `${id}`);
  const docSnap = await getDoc(docRef);
  const rta = docSnap.data()
  if (docSnap.exists()) {
    return rta;
  }
}
export const getMediasBts = async() => {
  const rta = await getDocs(collection(db, "bts/vHq1CjFvewCAZ038ICp9/medias"));
  const medias: Products[] = [];
  rta.forEach((doc) => {
    medias.push({ ...doc.data(), id: doc.id });
  });
  return medias
};
export const getMediasById = async (id: string) => {
  const docRef = doc(db, "bts/vHq1CjFvewCAZ038ICp9/medias", `${id}`);
  const docSnap = await getDoc(docRef);
  const rta = docSnap.data()
  if (docSnap.exists()) {
    return rta;
  }
}
export const getBtsCombos = async () => {
  const getCombos = await getDocs(collection(db, "combosbts"));
  const combosBts:CombosBts[] = [];
  getCombos.forEach((doc) => {
    combosBts.push({ ...doc.data(), id: doc.id });
  });
  return combosBts;
};

