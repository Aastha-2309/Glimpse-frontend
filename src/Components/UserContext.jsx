import { createContext, useState, useContext, useEffect } from 'react';

// Create context
const UserContext = createContext();

// Create a provider component
export const UserProvider = ({ children }) => {
    const [loggedInUser, setLoggedInUser] = useState(null);

    // Check for user data in localStorage on component mount
    useEffect(() => {
        const user = localStorage.getItem('loggedInUser');
        if (user) {
            setLoggedInUser(user);
        }
    }, []);

    return (
        <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    return useContext(UserContext);
};
