import React, { createContext, useEffect, useState } from "react";
import { User } from "../core/api/user";

export const UserContext = createContext(null);

export default function UserProvider({ children }) {
    const [user, setUser] = useState({});
    const [userId, setUserId ] = useState(null);

    useEffect(() => {
        if (localStorage.getItem("userId")) {
            setUserId(localStorage.getItem("userId"));

            async function handleFetchUser() {
                setUser(await User.fetchUserById(userId));
            }

            handleFetchUser();
        }
    }, [userId]);

    return (
        <UserContext.Provider
            value={{
                user,
                setUser,
                userId,
                setUserId
            }}
        >
            {children}
        </UserContext.Provider>
    );
} 