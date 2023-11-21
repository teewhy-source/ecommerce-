// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {} from "firebase/auth";
import { getFirestore,
   doc, 
   getDoc, 
   setDoc,
   collection,
   writeBatch,
   query,
  getDocs,
   } from "firebase/firestore";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDV9MfC5SHleRxseW0HYdLqewsOsh4r2k0",
  authDomain: "e-commerce-project-26545.firebaseapp.com",
  projectId: "e-commerce-project-26545",
  storageBucket: "e-commerce-project-26545.appspot.com",
  messagingSenderId: "926946454168",
  appId: "1:926946454168:web:e90728d3b328ea6e47beed",
};

// Initialize Firebase
const firebaseAPP = initializeApp(firebaseConfig);

const googleprovider = new GoogleAuthProvider(); //when someone interact with the provider, i want them to select an account

googleprovider.setCustomParameters({
  //config required by google
  prompt: "select_account",
});
export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleprovider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleprovider);

export const db = getFirestore();

export const addcollectionanddocument= async (collectionKey,Objectstoadd)=>{
  const collectionref=collection(db,collectionKey)
  const batch=writeBatch(db)

  Objectstoadd.forEach((Object)=>{
    const docref =doc(collectionref,Object.title.toLowerCase())
    batch.set(docref,Object)
  })
  await batch.commit()
  console.log("done batch");
}

export const getcategoriesanddocuments =async()=>{
  const collectionref = collection(db,"categories")
  const q = query(collectionref);


  const querysnapshot = await getDocs(q);
  const categorymap = querysnapshot.docs.reduce((acc, docsnapshot) => {
    const { title, items } = docsnapshot.data();
    if (title) { // Add a null check to ensure title is defined
      acc[title.toLowerCase()] = items;
    }
    return acc;
  },{})
  return categorymap
}
//becos i want to minimize the impact of a third party library in my code base


export const createuserdocumentfromauth = async (
  userAuth,
  additinalinfo = { displayName: "" }
) => {
  if (!userAuth) return; // protecting my code
  const userDocref = doc(db, "users", userAuth.uid); //the doc takes three argument which are (database,collection,identifier)
  console.log(userDocref);
  const userSnapshot = await getDoc(userDocref);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocref, {
        displayName,
        email,
        createdAt,
        ...additinalinfo,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }
  return userDocref;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return; //protecting my code
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const singnAuthUthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return; //protecting my code
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signoutuser = async () => await signOut(auth);

export const myCustomAuthStateChanged = async (callback) =>
  onAuthStateChanged(auth, callback);
 