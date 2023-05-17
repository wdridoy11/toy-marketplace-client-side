import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { 
    getAuth,
    signOut,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";
import app from '../utils/firebase/firebase.config';
export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user,setUser] = useState();
    const auth = getAuth(app);

    // create user using google
    const createUserUsingGoogle=()=>{
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
        .then((result)=>{
            const user = result.user;
            console.log(user)
        })
        .catch((error)=>{
            console.log(error.message)
        })
    }

    //create user using email and password 
    const createUserUsingEmail=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    // user login 
    const userLogin=(email,password)=>{
       return signInWithEmailAndPassword(auth,email,password)
    }

    // user logout
    const userLogout=()=>{
        return signOut(auth)
    }

    // user login check
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
        })
        return ()=>{
            unsubscribe();
        }
    },[])

    // userinfo
    const userInfo ={
        user,
        userLogin,
        userLogout,
        createUserUsingGoogle,
        createUserUsingEmail
    }


  return (
    <AuthContext.Provider value={userInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider