import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../components/Firebase/firebase.config';

export const authContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] =useState(true);

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) =>{        
    return signInWithEmailAndPassword (auth, email, password)
    }

    const logOut = () =>{
        return signOut(auth);
    }


    //observe auth state changes
    useEffect( () =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            // console.log('auth stage change', currentUser)
            setUser(currentUser);
            setLoading(false);

        });
        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut    
    }

    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;