import styles from './style.module.css'

import Header from '../../components/header';
import { useContext, useEffect } from 'react';
import { BookContext } from '../../contexts/bookContext';
import { UserContext } from '../../contexts/userContext';
import { Auth } from '../../core/api/auth';
import { useNavigate } from 'react-router-dom';
import Book from '../../components/book';
import { Books } from '../../core/api/book';

export default function User() {
	const { myBooks, setMyBooks, setEditBook } = useContext(BookContext);
	const { user, userId } = useContext(UserContext);

	useEffect(() => {
		if (!Auth.validateRoute()) {
			navigate('/');
		};
	});

	const navigate = useNavigate();

	useEffect(() => {
		if (userId) {
			async function handleGetMyBooks() {
				setMyBooks(await Books.getMyBooks(userId));
			}

			handleGetMyBooks();
			setEditBook(null);
		}
	}, []);

	return (
		<>
			<Header />
			<div id="container" className={styles.container}>
				<div className={styles.userContainer}>
					<img
						src={require('../../assets/img/userPic.png')}
						alt="Foto do usuário"
					/>
					<h2>{user?.nome ? user.nome : "Nome do usuário"}</h2>
				</div>
				{myBooks.length > 0 ? (
					<div className={styles.booksContainer}>
						{myBooks.map((book) =>
							<Book
								key={book.id}
								id={book.id}
								userId={book.id_usuario}
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
					<div>
						<h3>Você não possui livros 📔</h3>
					</div>
				)}
			</div>
		</>
	)
}
