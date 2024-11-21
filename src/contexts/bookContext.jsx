import React, { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "./userContext";
import { Books } from "../core/api/book";

export const BookContext = createContext(null);

export default function BookProvider({ children }) {
    const [books, setBooks] = useState([]);
    const [myBooks, setMyBooks] = useState([]);
    const [editBook, setEditBook] = useState(null);
    const [favoriteBooks, setFavoriteBooks] = useState([]);
    const [readBooks, setReadBooks] = useState([]);

    const { user } = useContext(UserContext);

    useEffect(() => {
        if (user) {
            async function handleGetMyBooks() {
                setMyBooks(await Books.getMyBooks(user.id));
            }

            async function handleGetAllBooks() {
                setBooks(await Books.getAllBooks(localStorage.getItem("userId")));
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
                setMyBooks,
                editBook,
                setEditBook,
                favoriteBooks, 
                setFavoriteBooks,
                readBooks, 
                setReadBooks
            }}
        >
            {children}
        </BookContext.Provider>
    );
} 