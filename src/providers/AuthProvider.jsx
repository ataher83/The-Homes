import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";


export const AuthContext = createContext(null); 

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null); 
    const [loading, setLoading] = useState(true); 

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password); 
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }



    
    const handleGoogleSignIn = () => {
        // console.log('google is coming')
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            const loggedInUser = result.user;
            // console.log(loggedInUser);
            setUser(loggedInUser);
          })
          .catch((error) => {
            console.log('error', error.message)
          });
    }

    const handleGithubSignIn = () => {
        signInWithPopup(auth, githubProvider)
        .then((result) => {
            const loggedInUser = result.user;
            console.log(loggedInUser);
            setUser(loggedInUser);
          })
          .catch((error) => {
            // console.log('error', error.message)
            console.log(error)
          });
    }



    const logOut = () => {
        setLoading(true)
        return signOut(auth); 
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false)
        });
        return () => {
            unSubscribe(); 
        }
    }, [])


    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        handleGoogleSignIn,
        handleGithubSignIn,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;