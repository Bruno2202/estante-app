import React, { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "./userContext";
import { Books } from "../core/api/book";

export const BookContext = createContext(null);

export default function BookProvider({ children }) {
    const [books, setBooks] = useState([]);
    const [myBooks, setMyBooks] = useState([]);

    const { user } = useContext(UserContext);

    useEffect(() => {
        if (user) {
            async function handleGetMyBooks() {
                setMyBooks(await Books.getMyBooks(user.id));
            }

            async function handleGetAllBooks() {
                setBooks(await Books.getAllBooks());
            }

            handleGetMyBooks();
            handleGetAllBooks();
        }
    }, [user]);

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