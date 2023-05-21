import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { 
    getAuth,
    signOut,
    updateProfile,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";
import app from '../utils/firebase/firebase.config';
import { useNavigate } from 'react-router-dom';
export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user,setUser] = useState();
    const [loading,setLoading] = useState(true);
    const auth = getAuth(app);

    // create user using google
    const createUserUsingGoogle=()=>{
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
        .then((result)=>{
            const user = result.user;
        })
        .catch((error)=>{
            console.log(error.message)
        })
    }

    //create user using email and password 
    const createUserUsingEmail=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    //user profile update
    const updateUserProfile=(user,name,photo)=>{
        updateProfile(user,{
            displayName:name,
            photoURL:photo
        })
        .then((result)=>console.log(result))
        .catch((error)=>console.log(error.message))

    }

    // user login 
    const userLogin=(email,password)=>{
        setLoading(true)
       return signInWithEmailAndPassword(auth,email,password)
    }

    // user logout
    const userLogout=()=>{
        setLoading(true)
        return signOut(auth);
    }

    // user login check
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            unsubscribe();
        }
    },[])

    // userinfo
    const userInfo ={
        user,
        loading,
        userLogin,
        userLogout,
        updateUserProfile,
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