import React from 'react';
import { motion } from 'framer-motion';

import styles from './style.module.css';
import { useNavigate } from 'react-router-dom';

export default function Header() {
    const navigate = useNavigate()

    return (
        <motion.nav
            id="header"
            className={styles.header}
            animate={{ y: 0 }}
            exit={{ opacity: 0 }}
        >
            <p className={`${styles.a} ${styles.home}`} onClick={() => navigate('/home')}>HOME</p>
            <p className={`${styles.a} ${styles.about}`} onClick={() => navigate('/user')}>PERFIL</p>
        </motion.nav>
    );
}
