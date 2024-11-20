import { motion } from 'framer-motion';
import styles from './style.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { MdOutlineExitToApp } from "react-icons/md";
import { theme } from '../../theme';
import { Auth } from '../../core/api/auth';

export default function Header() {
    const navigate = useNavigate();

    return (
        <motion.nav
            id="header"
            className={styles.header}
            animate={{ y: 0 }}
            exit={{ opacity: 0 }}
        >
            <p className={`${styles.a} ${styles.home}`} onClick={() => navigate('/home')}>HOME 🏠</p>
            <p className={`${styles.a} ${styles.home}`} onClick={() => navigate('/ranking')}>RANKING 🎖️</p>
            <p className={`${styles.a} ${styles.about}`} onClick={() => navigate('/user')}>PERFIL 🙋</p>
            <p className={`${styles.a} ${styles.about}`} onClick={() => navigate('/book')}>CADASTRAR LIVRO 📔</p>
            <div className={styles.logout}>
                <Link onClick={() => Auth.logout()} to={'/'}>
                    <MdOutlineExitToApp size={24} color={theme.colorRed} />
                </Link>
            </div>
        </motion.nav>
    );
}
