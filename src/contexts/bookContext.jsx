import React, { createContext, useState } from "react";

export const BookContext = createContext(null);

export default function BookProvider({ children }) {
    const [books, setBooks] = useState([]);
    const [myBooks, setMyBooks] = useState([]);

    return (
        <BookContext.Provider
            value={{
                books,
                setBooks,
                myBooks,
                setMyBooks
            }}
        >
            {children}
        </BookContext.Provider>
    );
} 