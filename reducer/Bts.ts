import { app } from "../firebase/firebase";
import {
  collection,
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

export const getTazasBts = (dispatch: (action: any) => void) => {
  const colRef = collection(db, "bts/etkmO3TrV2WqzKwVGQQO/tazas");
  onSnapshot(colRef, (snapshot) => {
    let tazas: Products[] = [];
    snapshot.docs.forEach((doc) => {
      tazas.push({ ...doc.data(), id: doc.id });
    });
    dispatch({ type: "getTazasBts", payload: tazas });
  });
};
export const getPosterBts = (dispatch: (action: any) => void) => {
  const colRef = collection(db, "bts/Fwh0KuBTK4P5xmzJB8j2/poster");
  onSnapshot(colRef, (snapshot) => {
    let poster: Products[] = [];
    snapshot.docs.forEach((doc) => {
      poster.push({ ...doc.data(), id: doc.id });
    });
    dispatch({ type: "getPosterBts", payload: poster });
  });
};
export const getLibretasBts = (dispatch: (action: any) => void) => {
  const colRef = collection(db, "bts/GEhNFGq9WCuKdxZxzF35/libretas");
  onSnapshot(colRef, (snapshot) => {
    let libretas: Products[] = [];
    snapshot.docs.forEach((doc) => {
      libretas.push({ ...doc.data(), id: doc.id });
    });
    dispatch({ type: "getLibretasBts", payload: libretas });
  });
};
export const getCojinesBts = (dispatch: (action: any) => void) => {
  const colRef = collection(db, "bts/G91fJSTIGxPbP6YWAr4r/cojines");
  onSnapshot(colRef, (snapshot) => {
    let cojines: Products[] = [];
    snapshot.docs.forEach((doc) => {
      cojines.push({ ...doc.data(), id: doc.id });
    });
    dispatch({ type: "getCojinesBts", payload: cojines });
  });
};
export const getCartucherasBts = (dispatch: (action: any) => void) => {
  const colRef = collection(db, "bts/Xq9UGyUn6d4OukEb1jPk/cartucheras");
  onSnapshot(colRef, (snapshot) => {
    let cartucheras: Products[] = [];
    snapshot.docs.forEach((doc) => {
      cartucheras.push({ ...doc.data(), id: doc.id });
    });
    dispatch({ type: "getCartucherasBts", payload: cartucheras });
  });
};
export const getCojinesMidBts = (dispatch: (action: any) => void) => {
  const colRef = collection(db, "bts/M399N3OWcQXBvyIPkz0H/cojinesMid");
  onSnapshot(colRef, (snapshot) => {
    let cojinesMid: Products[] = [];
    snapshot.docs.forEach((doc) => {
      cojinesMid.push({ ...doc.data(), id: doc.id });
    });
    dispatch({ type: "getCojinesMidBts", payload: cojinesMid });
  });
};
export const getPolosBts = (dispatch: (action: any) => void) => {
  const colRef = collection(db, "bts/n8rVgfULKHbGhFTMWv3Z/polos");
  onSnapshot(colRef, (snapshot) => {
    let polos: Products[] = [];
    snapshot.docs.forEach((doc) => {
      polos.push({ ...doc.data(), id: doc.id });
    });
    dispatch({ type: "getPolosBts", payload: polos });
  });
};
export const getMediasBts = (dispatch: (action: any) => void) => {
  const colRef = collection(db, "bts/vHq1CjFvewCAZ038ICp9/medias");
  onSnapshot(colRef, (snapshot) => {
    let medias: Products[] = [];
    snapshot.docs.forEach((doc) => {
      medias.push({ ...doc.data(), id: doc.id });
    });
    dispatch({ type: "getMediasBts", payload: medias });
  });
};
