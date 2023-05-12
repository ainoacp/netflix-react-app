import React, {createContext, useContext, useEffect, useState} from "react";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { useRouter } from "next/navigation";
import firebaseApp from "@/services/firebase";

const auth = getAuth(firebaseApp)

export const AuthContext = createContext({})

export const useAuthContext = () => useContext(AuthContext)

export const AuthContextProvider = ({children}) => {
    
    const [user, setUser] = useState(null)
    // const router = useRouter()

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
                // router.push('/browse')
            } else {
                setUser(null)
                // router.push('/signin')
            }
        })
        return () => unsubscribe()
    }, [])
    
    return (
        <AuthContext.Provider value={{user}}>
            {children}
        </AuthContext.Provider>
    )
}