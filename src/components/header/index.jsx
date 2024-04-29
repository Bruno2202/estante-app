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
        <motion.nav
            id="header"
            className={styles.header}
            animate={{ y: 0 }}
            exit={{ opacity: 0 }}
        >
            <p className={`${styles.a} ${styles.home}`} onClick={() => scrollTo("home")}>HOME</p>
            <p className={`${styles.a} ${styles.about}`} onClick={() => scrollTo("about", -200)}>QUEM SOU</p>
            <p className={`${styles.a} ${styles.projects}`} onClick={() => scrollTo("projects", -200)}>PROJETOS</p>
            <p className={`${styles.a} ${styles.contact}`} onClick={() => scrollTo("contact")}>CONTATO</p>
        </motion.nav>
    );
}
