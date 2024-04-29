import React from 'react';

import styles from './style.module.css';

export default function Topic({ title, text, icon, children }) {
	return (
		<div className={styles.container}>
			<div className={styles.topic}>
				<div className={styles.content}>
					<p className={styles.title}>{title} {icon && <img alt='Icone' className={styles.icon} src={icon} />} </p>
					<div className={styles.children}>
						{children}
					</div>
					<p className={styles.text}>
						{text}
					</p>
				</div>
			</div>
		</div>
	)
}