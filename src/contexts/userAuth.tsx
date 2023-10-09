import { ReactNode, createContext, useState } from 'react'

interface UserAuthContextProps {
    children: ReactNode;
}

interface UserAuthContextType {
    isAuthenticated: boolean;
    setIsAuthenticated: (newState: boolean) => void; 
}

const initialValues = {
    isAuthenticated: localStorage.getItem('id_token') ? true : false,
    setIsAuthenticated: () => { }
}

export const UserAuthContext = createContext<UserAuthContextType>(initialValues);

export const UserAuthContextProvider = ({ children }: UserAuthContextProps) => {

    const [isAuthenticated, setIsAuthenticated] = useState(initialValues.isAuthenticated)

    return (
        <UserAuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
            {children}
        </UserAuthContext.Provider>
    )
}