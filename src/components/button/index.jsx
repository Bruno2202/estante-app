import React from 'react';
import { motion } from 'framer-motion';

import styles from './style.module.css';

export default function Button({ text }) {
    return (
        <motion.button
            className={styles.button}
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
        >
            {text}
        </motion.button>
    );
}
