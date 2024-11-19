import styles from './style.module.css'

import Header from '../../components/header';
import { useContext } from 'react';
import { BookContext } from '../../contexts/bookContext';
import { UserContext } from '../../contexts/userContext';

export default function User() {
	const { myBooks } = useContext(BookContext);
	const { user } = useContext(UserContext);

	return (
		<>
			<Header />
			<div id="container" className={styles.container}>
				<div className={styles.userContainer}>
					<img
						src={require('../../assets/img/userPic.png')}
						alt="Foto do usuário"
					/>
					<h2>{user?.name ? user.name : "Nome do usuário"}</h2>
				</div>
				<div className={styles.booksContainer}>
					{myBooks.length > 0 ? (
						<div >

						</div>
					) : (
						<div>
							<h3>Você não possui livros 📔</h3>
						</div>
					)}
				</div>
			</div>
		</>
	)
}
