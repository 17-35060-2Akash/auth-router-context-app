import React, { createContext, useEffect, useState } from 'react';

import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AuthContext = createContext();

const auth = getAuth(app);

const UserContext = ({ children }) => {
    // const user = { displayName: 'Akash' }
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    const provider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
            console.log(currentUser);
        });
        return () => unsubscribe();
    }, []);

    //////google 
    const signInWithGoogle = () => {
        return signInWithPopup(auth, provider);
    }

    //////google 



    const authInfo = { user, loading, createUser, signIn, logOut, signInWithGoogle }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;