import React, { useState } from 'react'
import { animate, motion } from 'framer-motion';
import { isMobile } from 'react-device-detect';

import styles from './style.module.css';
import Detail from './detail'

export default function Projects({ img, name, description, detailDescription }) {

	const [showDetails, setShowDetails] = useState(false);

	const yHeaderAnimation = isMobile ? {y: -100} : {y: -50} ;

	function showModal() {
		document.body.style.overflow = 'hidden';
		animate("#header", yHeaderAnimation, { ease: 'easeIn', duration: 0.2 });
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
			<img alt="Banner" className={styles.project_banner} src={img} />
			<div className={styles.project_info}>
				<p className={styles.project_name}>{name}</p>
				<p className={styles.project_description}>{description}</p>
			</div>
		</motion.div>
		{showDetails &&
			<Detail
				showDetails={showDetails}
				setShowDetails={setShowDetails}
				name={name}
				description={description}
				detailDescription={detailDescription}
			/>
		}
	</>
);
}
