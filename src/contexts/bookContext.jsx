import React, { createContext, useState } from "react";

export const BookContext = createContext(null);

export default function BookProvider({ children }) {
    const [books, setBooks] = useState([]);

    return (
        <BookContext.Provider
            value={{
                books,
                setBooks
            }}
        >
            {children}
        </BookContext.Provider>
    );
} 