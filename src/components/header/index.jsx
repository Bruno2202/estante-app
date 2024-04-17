import React from 'react';

import styles from './style.module.css';

export default function Header() {
    return (
        <div className={styles.header}>
            <a className={`${styles.a} ${styles.home}`}>HOME</a>
            <a className={`${styles.a} ${styles.about}`}>QUEM SOU</a>
            <a className={`${styles.a} ${styles.projects}`}>PROJETOS</a>
            <a className={`${styles.a} ${styles.contact}`}>CONTATO</a>
        </div>
    );
}
