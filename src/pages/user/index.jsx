import styles from './style.module.css'

import Header from '../../components/header';
import { useContext } from 'react';
import { BookContext } from '../../contexts/bookContext';

export default function User() {
	const { books, setBooks } = useContext(BookContext);

	return (
		<div id="container" className={styles.container}>
			<Header />
		</div >
	)
}
