import styles from './style.module.css'

import Header from '../../components/header';
import { useContext } from 'react';
import { BookContext } from '../../contexts/bookContext';

export default function Home() {
	const { books, setBooks } = useContext(BookContext);

	return (
		<>
			<Header />
			<div id="container" className={styles.container}>
				{books.length > 0 ? (
					<div>

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
