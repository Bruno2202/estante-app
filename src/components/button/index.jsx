import React from 'react';
import { motion } from 'framer-motion';

import styles from './style.module.css';

export default function Button({ id, text, onClick }) {
    return (
        <motion.button
            id={id && id}
            className={styles.button}
            onClick={onClick}
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            {text}
        </motion.button>
    );
}
