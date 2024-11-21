import styles from './style.module.css'

import Header from '../../components/header';
import { useContext, useEffect, useState } from 'react';
import { BookContext } from '../../contexts/bookContext';
import Book from '../../components/book';
import { Auth } from '../../core/api/auth';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/input';
import { Books } from '../../core/api/book';

export default function Favorites() {
	const { setEditBook, favoriteBooks, setFavoriteBooks } = useContext(BookContext);
	const [searchTerm, setSearchTerm] = useState("");
	const [filteredBooks, setFilteredBooks] = useState(favoriteBooks);

	const navigate = useNavigate();

	useEffect(() => {
		if (!Auth.validateRoute()) {
			navigate('/');
		};
	}, [navigate]);

	useEffect(() => {
		if (searchTerm === "") {
			setFilteredBooks(favoriteBooks);
		} else {
			setFilteredBooks(
				favoriteBooks.filter(book =>
					book.nome.toLowerCase().includes(searchTerm.toLowerCase())
				)
			);
		}
	}, [searchTerm, favoriteBooks]);

	useEffect(() => {
		handleGetFavoriteBooks();
		setEditBook(null)
	}, []);

	async function handleGetFavoriteBooks() {
		setFavoriteBooks(await Books.getFavoriteBooks(localStorage.getItem("userId")));
	}

	return (
		<>
			<Header />
			<div id="container" className={styles.container}>
				<div className={styles.inputContainer}>
					<Input
						placeholder={"Pesquisar"}
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
					/>
				</div>
				{filteredBooks.length > 0 ? (
					<div className={styles.booksContainer}>
						{filteredBooks.map((book) =>
							<Book
								key={book.id}
								userId={book.id_usuario}
								id={book.id}
								autor={book.autor}
								dtPubli={book.dt_publi}
								gen={book.id_genero}
								name={book.nome}
								numPg={book.num_pag}
								readed={book.lido}
							/>
						)}
					</div>
				) : (
					<div className={styles.noContent}>
						<h3>Você não possui livros favoritados 😔</h3>
					</div>
				)}
			</div>
		</>
	)
}
