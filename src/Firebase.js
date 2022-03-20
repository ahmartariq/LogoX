import { getAuth, onAuthStateChanged } from '@firebase/auth'
import { initializeApp } from 'firebase/app'
import { useState, useEffect, useContext, createContext } from 'react'
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBvIGLTkECzmjDqVDmrRJYTEClJByKxVYM",
    authDomain: "want-a-logo.firebaseapp.com",
    databaseURL: "https://want-a-logo-default-rtdb.firebaseio.com",
    projectId: "want-a-logo",
    storageBucket: "want-a-logo.appspot.com",
    messagingSenderId: "26465391044",
    appId: "1:26465391044:web:9d2cfbe523b651d8575491",
    measurementId: "G-W4R2Z1LM1F"
  };


  // Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const AuthContext = createContext();

export const AuthContextProvider = props => {
  const [user, setUser] = useState()
  const [error, setError] = useState()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(), setUser, setError)
    return () => unsubscribe()
  }, [])
  return <AuthContext.Provider value={{ user, error }} {...props} />
}


export const useAuthState = () => {
  const auth = useContext(AuthContext)
  return { ...auth, isAuthenticated: auth.user != null }
}


export const db = getFirestore();
