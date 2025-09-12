import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const name = localStorage.getItem("username") || "";
    const [user, setUser] = useState({ name });

    useEffect(() => {
        localStorage.setItem("username", user.name);
    }, [user.name])

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
}
