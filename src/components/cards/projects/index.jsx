import React from 'react'

import styles from './style.module.css';

export default function Projects({img, name, description, link}) {
	return (
		<a href={link} className={styles.container}>
			<img className={styles.project_banner} src={img}/>
			<div className={styles.project_info}>
				<p className={styles.project_name}>{name}</p>
				<p className={styles.project_description}>{description}</p>
			</div>
		</a>
	);
}
