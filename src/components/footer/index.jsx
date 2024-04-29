import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillInstagram, AiFillMail  } from "react-icons/ai";

import styles from './style.module.css';

export default function Footer() {
	return (
		<div className={styles.footer}>
			<div className={styles.icons}>
				<AiFillGithub
					style={{ cursor: 'pointer' }}
					color={'#707068'}
					size={'2rem'}
					onClick={() => window.open('https://github.com/Bruno2202')}
				/>
				<AiFillLinkedin
					style={{ cursor: 'pointer' }}
					color={'#707068'}
					size={'2rem'}
					onClick={() => window.open(`https://www.linkedin.com/in/bruno-terribile/`)}
				/>
				<AiFillInstagram
					style={{ cursor: 'pointer' }}
					color={'#707068'}
					size={'2rem'}
					onClick={() => window.open('https://www.instagram.com/bruno_terribile/')}
				/>
				<AiFillMail 
					style={{ cursor: 'pointer' }}
					color={'#707068'}
					size={'2rem'}
					onClick={() => window.open('mailto:https://www.instagram.com/bruno_terribile/')}
				/>
			</div>

			<div className={styles.text}>
				<p>© Bruno C. Terribile 2024</p>
			</div>
		</div>
	);
}