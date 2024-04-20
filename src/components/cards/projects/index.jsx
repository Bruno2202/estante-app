import React, { useState, useEffect } from 'react'
import { animate, motion } from 'framer-motion';

import styles from './style.module.css';
import Detail from './detail'

export default function Projects({ img, name, description, detailDescription }) {

	const [showDetails, setShowDetails] = useState(false);

	function showModal() {
		document.body.style.overflow = 'hidden';
		animate("#header", { y: -50 }, { ease: 'easeIn', duration: 0.2 });
		setShowDetails(!showDetails);
	}

	return (
		<>
			<motion.div
				className={styles.container}
				onClick={() => showModal()}
				initial={{ y: 0 }}
				whileHover={{ y: -12 }}
				whileTap={{ scale: 0.9 }}
			>
				<img className={styles.project_banner} src={img} />
				<div className={styles.project_info}>
					<p className={styles.project_name}>{name}</p>
					<p className={styles.project_description}>{description}</p>
				</div>
			</motion.div>
			{showDetails &&
				<Detail
					showDetails={showDetails}
					setShowDetails={setShowDetails}
					img={require('../../../assets/img/projects/banner/sandbox.png')}
					name={name}
					description={description}
					detailDescription={detailDescription}
				/>
			}
		</>
	);
}
