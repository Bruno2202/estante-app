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
                <svg className={styles.close} onClick={() => closeModal()} xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 -960 960 960" width="32" fill='#F5F3E2'>
                    <path d="M480-458 263.846-241.846q-4.384 4.385-10.615 4.769-6.231.385-11.385-4.769t-5.154-11q0-5.846 5.154-11L458-480 241.846-696.154q-4.385-4.384-4.769-10.615-.385-6.231 4.769-11.385t11-5.154q5.846 0 11 5.154L480-502l216.154-216.154q4.384-4.385 10.615-4.769 6.231-.385 11.385 4.769t5.154 11q0 5.846-5.154 11L502-480l216.154 216.154q4.385 4.384 4.769 10.615.385 6.231-4.769 11.385t-11 5.154q-5.846 0-11-5.154L480-458Z"/>
                </svg>
                <div className={styles.title}>
                    <p className={styles.project_name}>{name}</p>
                    <p className={styles.project_description}>{description}</p>
                </div>
                {detailDescription}
            </motion.div>
        </motion.div>
    );
}
