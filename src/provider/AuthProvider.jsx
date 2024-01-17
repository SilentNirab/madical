/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

import app from "../Firebase/firebase.config.js";

export const AuthContext = createContext(null)


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleSignIn = () =>{
        setLoading(true);
        return signInWithPopup(auth, provider)
    }
    const logOut =() =>{
        setLoading(true);
        return signOut(auth)
    }
    const userProfileUpdate = (name, photo) =>{
        return updateProfile(auth.currentUser,{
            displayName: name, photoURL:photo
        })
    }
    const resetpass = (email) => {
        return sendPasswordResetEmail(auth, email)
    }

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
           return unsubscribe
        }
    },[auth])

    const authInfo ={
        user,
        loading,
        createUser,
        signIn,
        googleSignIn,
        logOut,
        userProfileUpdate,
        resetpass
    }
    return (
        <AuthContext.Provider value={authInfo}>
            { children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;