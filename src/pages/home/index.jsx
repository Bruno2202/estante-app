import styles from './style.module.css'

import Header from '../../components/header';
import { useContext, useEffect } from 'react';
import { BookContext } from '../../contexts/bookContext';
import Book from '../../components/book';
import { Auth } from '../../core/api/auth';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/button';

export default function Home() {
	const { books } = useContext(BookContext);

	useEffect(() => {
		if (!Auth.validateRoute()) {
			navigate('/');
		};
	});

	const navigate = useNavigate();

	return (
		<>
			<Header />
			<div id="container" className={styles.container}>
				{books.length > 0 ? (
					<div className={styles.booksContainer}>
						{books.map((book) =>
							<Book
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
						<h3>Nenhum usuário postou um livro ainda 😔</h3>
					</div>
				)}
			</div >
		</>
	)
}
