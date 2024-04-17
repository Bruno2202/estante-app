import React from 'react';

import styles from './style.module.css';

export default function Topic({ title, text, icon, position, children }) {
	return (
		<div className={`${styles.container} ${position == "left" ? styles.container_left : position == "right" ? styles.container_right : position == "center" && styles.container_center}`}>
			<div
				className={`${styles.topic} ${position == "left" ? styles.topic_left : position == "right" ? styles.topic_right : position == "center" && styles.topic_center}`}
			>
				<p className={styles.title}>{title} {icon && <img className={styles.icon} src={icon}/>} </p>
				<p className={styles.text}>
					{text}
				</p>
				{children}
			</div>
		</div>
	)
}