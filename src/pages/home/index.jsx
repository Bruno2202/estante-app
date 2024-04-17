import React, { useEffect, useState } from 'react';

import styles from './style.module.css'
import Header from '../../components/header';
import Footer from '../../components/footer';
import Topic from '../../components/cards/topic';

export default function Home() {
	return (
		<div className={styles.container}>
			<Header />
			<div className={styles.salutation}>
				<div className={styles.salutation_myName}>
					<p className={styles.title}>Olá, meu nome é <p className={`${styles.title} ${styles.title_contrast}`}>&nbsp;Bruno</p></p>
				</div>
				<p className={styles.title_description}>Web developer</p>
			</div>
			<Topic
				title={"Quem sou eu?"}
				icon={require('../../assets/img/emoji/thinking.png')}
				text={"Um amanante da tecnologia e do desenvolvimento. Utilizo meus conhecimentos em programação à mais de um ano para elaborar projetos em diferentes áreas."}
				position={"right"}
			/>
				<Topic
					title={"O que desenvolvo?"}
					icon={require('../../assets/img/emoji/construction.png')}
					text={"Atualmente, desenvolvo projetos tanto web quanto mobile, utilizando tecnologias como React e React Native, as quais me possibilitam criar aplicativos multiplataforma e páginas dinâmicas."}
					position={"left"}
				/>
			<Topic
				title={"Habilidades"}
				icon={require('../../assets/img/emoji/developer.png')}
				position={"right"}
			>
				<div>
					<img className={styles.logo} alt='HTML' src={require('../../assets/img/language/html.png')}/>
					<img className={styles.logo} alt='CSS' src={require('../../assets/img/language/css.png')}/>
					<img className={styles.logo} alt='JS' src={require('../../assets/img/language/js.png')}/>
					<img className={styles.logo} alt='React' src={require('../../assets/img/language/react.png')}/>
					<img className={styles.logo} alt='Mysql' src={require('../../assets/img/language/firebase.png')}/>
					<img className={styles.logo} alt='Gitbash' src={require('../../assets/img/language/gitBash.png')}/>
					<img className={styles.logo} alt='Mysql' src={require('../../assets/img/language/mysql.png')}/>
				</div>
			</Topic>
			<Footer />
		</div>
	)
}
