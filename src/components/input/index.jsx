import React from 'react';
import { motion } from 'framer-motion';

import styles from './style.module.css';

export default function Input({ maxLength, placeholder, onChange, value }) {
    return (
        <motion.input
            className={styles.input}
            maxLength={maxLength}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
        >
        </motion.input>
    )
}
