import styles from './style.module.css'

import Header from '../../components/header';
import { useContext, useEffect, useState } from 'react';
import { Auth } from '../../core/api/auth';
import { useNavigate } from 'react-router-dom';
import { User } from '../../core/api/user';
import { BookContext } from "../../contexts/bookContext";

export default function Ranking() {
	const [users, setUsers] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		if (!Auth.validateRoute()) {
			navigate('/');
		} else {
			fetchUsers();
		}
	}, [navigate]);


    const { setEditBook } = useContext(BookContext) 

    useEffect(() => {
			setEditBook(null);
    }, []);

	const fetchUsers = async () => {
		const fetchedUsers = await User.getUserGroup();

		fetchedUsers.sort((a, b) => b.bookCount - a.bookCount);

		setUsers(fetchedUsers);
	};

	return (
		<>
			<Header />
			<div className={styles.container}>
				<div className={styles.tableContainer}>
					<table className={styles.table}>
						<thead>
							<tr>
								<th className={styles.text}>Posição</th>
								<th className={styles.text}>Usuário</th>
								<th className={styles.text}>Quantidade de Livros</th>
							</tr>
						</thead>
						<tbody>
							{users.map((user, index) => (
								<tr key={user.id}>
									<td>{index + 1}</td>
									<td>{user.userName}</td>
									<td>{user.bookCount}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
}
