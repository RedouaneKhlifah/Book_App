import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { getStorage } from "firebase-admin/storage";

const firbaseCreds = require("./firebaseCreds.json");

initializeApp({
    credential: cert(firbaseCreds)
});

const db = getFirestore();
export const Storage = getStorage();

export default db;
