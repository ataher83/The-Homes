import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
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
    
    
    // const updateUser = (displayName, photoURL) => {
    //     setLoading(true)
    //     return updateProfile(auth, email, password); 
    // }

    const updateUserProfile = (name, image) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: image
          }) 
    }






//     // import { getAuth, updateProfile } from "firebase/auth";
// // const auth = getAuth();
// updateProfile(auth.currentUser, {
//   displayName: "Jane Q. User", photoURL: "https://example.com/jane-q-user/profile.jpg"
// }).then(() => {
//   // Profile updated!
//   // ...
// }).catch((error) => {
//   // An error occurred
//   // ...
// });










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
        updateUserProfile,
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