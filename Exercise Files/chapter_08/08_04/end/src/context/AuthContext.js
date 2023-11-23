import { createContext, useMemo, useState } from "react"
import FirebaseAuth from "../handlers/auth"


const { signIn, signOut }= FirebaseAuth
const Context = createContext()


const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null)

    const login = () => {}
    const logout = () => {}
    const value = useMemo(() => {
        return {
            login, 
            logout, 
            currentUser
        }
    }, [])
    return <Context.Provider value={value}>{children}</Context.Provider>
}

export default AuthProvider