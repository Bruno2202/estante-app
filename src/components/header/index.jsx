import React from 'react';
import { motion } from 'framer-motion';

import styles from './style.module.css';

export default function Header() {

    function scrollTo(element, spacing) {
        const targetDiv = document.getElementById(element);
        var offset;
        if (spacing) {
            offset = spacing;
        } else {
            offset = 0;
        }
        const targetPosition = targetDiv.getBoundingClientRect().top;
        const currentPosition = window.pageYOffset || document.documentElement.scrollTop;
        const scrollTo = targetPosition + currentPosition + offset;
        window.scrollTo({ top: scrollTo, behavior: 'smooth' });
    }

    return (
        <motion.div
            id="header"
            className={styles.header}
            animate={{ y: 0 }}
        >
            <a className={`${styles.a} ${styles.home}`} onClick={() => scrollTo("home")}>HOME</a>
            <a className={`${styles.a} ${styles.about}`} onClick={() => scrollTo("about", -200)}>QUEM SOU</a>
            <a className={`${styles.a} ${styles.projects}`} onClick={() => scrollTo("projects", -200)}>PROJETOS</a>
            <a className={`${styles.a} ${styles.contact}`} onClick={() => scrollTo("contact")}>CONTATO</a>
        </motion.div>
    );
}
