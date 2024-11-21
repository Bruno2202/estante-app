import { useContext } from "react";
import { Books } from "../../core/api/book";
import { theme } from "../../theme";
import styles from "./style.module.css"
import { MdDelete, MdEdit, MdFavorite } from "react-icons/md";
import { FaReadme } from "react-icons/fa6";
import { BookContext } from "../../contexts/bookContext";
import { useNavigate } from "react-router-dom";

export default function Book({ id, name, numPg, autor, dtPubli, readed, gen, userId, favorite, read }) {
    const data = new Date(dtPubli);
    const dataFormatada = data.toLocaleDateString("pt-BR");

    const { setMyBooks, setEditBook, setBooks, setFavoriteBooks, setReadBooks } = useContext(BookContext)

    const navigate = useNavigate();

    async function handleDeleteBook(id) {
        await Books.delete(id);
        
        handleGetBooks();
        handleGetMyBooks();
        handleGetReadBooks();
        handleGetFavoriteBooks();
    }

    const formatDate = (date) => {
        if (!date) return '';
        const formattedDate = new Date(date).toLocaleDateString('en-CA');
        return formattedDate;
    };

    function handleEditBook(id, name, numPg, autor, dtPubli, readed, gen, userId) {
        setEditBook({
            id: id,
            name: name,
            numPg: numPg,
            autor: autor,
            dtPubli: formatDate(dtPubli),
            readed: readed,
            gen: gen,
            userId: userId
        });

        navigate('/book');
    }

    async function handleFavoriteBook(id) {
        await Books.favoriteBook(id, localStorage.getItem("userId"));

        handleGetBooks();
        handleGetMyBooks();
        handleGetReadBooks();
        handleGetFavoriteBooks();
    }
    async function handleUnFavoriteBook(id) {
        await Books.unFavoriteBook(id, localStorage.getItem("userId"));

        handleGetBooks();
        handleGetMyBooks();
        handleGetReadBooks();
        handleGetFavoriteBooks();
    }

    async function handleReadBook(id) {
        await Books.readBook(id, localStorage.getItem("userId"));

        handleGetBooks();
        handleGetMyBooks();
        handleGetReadBooks();
        handleGetFavoriteBooks();
    }
    async function handleUnreadBook(id) {
        await Books.unreadBook(id, localStorage.getItem("userId"));

        handleGetBooks();
        handleGetMyBooks();
        handleGetReadBooks();
        handleGetFavoriteBooks();
    }

    async function handleGetMyBooks() {
        setMyBooks(await Books.getMyBooks(userId));
    }
    async function handleGetBooks() {
        setBooks(await Books.getAllBooks(localStorage.getItem("userId")));
    }
	async function handleGetReadBooks() {
		setReadBooks(await Books.getReadBooks(localStorage.getItem("userId")));
	}
    async function handleGetFavoriteBooks() {
		setFavoriteBooks(await Books.getFavoriteBooks(localStorage.getItem("userId")));
	}

    return (
        <div id={id} className={styles.container}>
            <div className={styles.nameContainer}>
                <h2>{name}</h2>
            </div>
            <div className={styles.options}>
                <div className={styles.iconsContainer}>
                    {userId === localStorage.getItem("userId") && (
                        <>
                            <MdEdit size={24} color={theme.colorGreen} onClick={() => handleEditBook(id, name, numPg, autor, dtPubli, readed, gen, userId)} />
                            <MdDelete size={24} color={theme.colorRed} onClick={() => handleDeleteBook(id)} />
                        </>
                    )}
                    {userId !== localStorage.getItem("userId") && (
                        <>
                            <FaReadme size={24} color={read ? theme.colorRed : theme.colorGrey} onClick={() => read ? handleUnreadBook(id) : handleReadBook(id)} />
                        </>
                    )}
                    <MdFavorite size={24} color={favorite ? theme.colorRed : theme.colorGrey} onClick={() => favorite ? handleUnFavoriteBook(id) : handleFavoriteBook(id)} />
                </div>
            </div>
            <div className={styles.dataContainer}>
                <div className={styles.itemContainer}>
                    <h5 className={styles.description}>Autor: </h5>
                    <h4 className={styles.itemData}>{autor}</h4>
                </div>
                <div className={styles.itemContainer}>
                    <h5 className={styles.description}>Lido: </h5>
                    <h4 className={styles.itemData}>{readed ? "Sim" : "Não"}</h4>
                </div>
                <div className={styles.itemContainer}>
                    <h5 className={styles.description}>Gênero: </h5>
                    <h4 className={styles.itemData}>{gen}</h4>
                </div>
                <div className={styles.itemContainer}>
                    <h5 className={styles.description}>Data Publi.: </h5>
                    <h4 className={styles.itemData}>{dataFormatada}</h4>
                </div>
                <div className={styles.itemContainer}>
                    <h5 className={styles.description}>Num. Páginas: </h5>
                    <h4 className={styles.itemData}>{numPg}</h4>
                </div>
            </div>
        </div>
    );
}