import React from 'react';
import { motion } from 'framer-motion';

import styles from './style.module.css';

export default function Button({ id, text, onClick, backgroundColor }) {
    return (
        <motion.button
            id={id && id}
            className={styles.button}
            style={{background: backgroundColor }}
            onClick={onClick}
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            {text}
        </motion.button>
    );
}
