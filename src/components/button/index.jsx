import React from 'react';

import styles from './style.module.css';

export default function Button({ text }) {
    return (
        <button className={styles.button}>
            {text}
        </button>
    );
}
