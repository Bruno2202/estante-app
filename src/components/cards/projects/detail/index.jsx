import React, { useEffect, useState } from 'react';
import { motion, animate } from 'framer-motion';

import styles from './styles.module.css';

export default function Detail({ showDetails, setShowDetails, img, name, description, detailDescription }) {

    useEffect(() => {
        animate('#modalOverlay', { backdropFilter: 'blur(8px)' })
    }, []);

    function closeModal() {
        document.getElementById('modalOverlay').classList.remove('modalOverlay');
        animate("#detail", { opacity: 0, scale: 0.9 });
        animate("#modalOverlay", { backdropFilter: 'blur(0px)' });
        animate("#header", { y: 0 }, { ease: 'easeOut', duration: 0.2 });
        document.body.style.overflow = '';
        setTimeout(() => {
            setShowDetails(!showDetails);
        }, 200)
    }

    return (
        <motion.div
            id="modalOverlay"
            className={styles.modalOverlay}
            initial={{ backdropFilter: 'blur(0px)' }}
        >
            <div className={styles.modalOverlay} onClick={() => closeModal()}>
            </div>
            <motion.div
                id='detail'
                className={styles.detail}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
            >
                <div className={styles.title}>
                    <p className={styles.project_name}>{name}</p>
                    <p className={styles.project_description}>{description}</p> 
                </div>
                {detailDescription}
            </motion.div>
        </motion.div>
    );
}
