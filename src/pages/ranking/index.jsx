import styles from './style.module.css'

import Header from '../../components/header';
import { useEffect } from 'react';
import { Auth } from '../../core/api/auth';
import { useNavigate } from 'react-router-dom';

export default function Ranking() {
	
	useEffect(() => {
		if (!Auth.validateRoute()) {
			navigate('/');
		};
	});

	const navigate = useNavigate();

	return (
		<div id="container" className={styles.container}>
			<Header />
		</div >
	)
}
