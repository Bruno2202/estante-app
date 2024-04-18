import React, { useEffect, useState } from 'react';

import styles from './style.module.css'
import Header from '../../components/header';
import Footer from '../../components/footer';
import Topic from '../../components/cards/topic';
import Projects from '../../components/cards/projects';
import Button from '../../components/button';

export default function Home() {
	return (
		<div className={styles.container}>
			<Header />
			<div className={styles.home}>
				<div className={styles.salutation}>
					<p className={styles.title_saluation}>Olá, meu nome é <p className={`${styles.title} ${styles.title_saluation_contrast}`}>&nbsp;Bruno</p></p>
					<p className={styles.title_description}>Web developer</p>
				</div>
				<div className={styles.topics}>
					<Topic
						title={"Sobre mim"}
						icon={require('../../assets/img/emoji/thinking.png')}
						text={`ou desenvolvedor Front-end há mais de um ano. Apaixonado por tecnologia e desenvolvimento, utilizo meus conhecimentos na área para criar aplicações web com diversos propósitos. Tenho experiência trabalhando com HTML, CSS, JavaScript, SQL, React, React Native, Git e Firebase. Estou sempre ansioso para aprender mais sobre como desenvolver projetos incríveis e aprimorar os que já existem.`}
						position={"center"}
					>
					</Topic>
					<img className={styles.me} src={require('../../assets/img/Bruno.png')} />
				</div>
				<div className={styles.container_projects}>
					<p className={styles.title_topic}>Meus projetos</p>
					<div className={styles.projects}>
						<Projects
							img={require('../../assets/img/projects/Behance.png')}
							name={"Sandbox"}
							description={"Minha rede social mobile"}
							link={"https://github.com/Bruno2202/sandbox"}
						/>
						<Projects
							img={require('../../assets/img/projects/MuchkinId.png')}
							name={"Muchkin ID"}
							description={"Auxiliar de jogo do Muchkin"}
							link={"https://munchkinid.firebaseapp.com/"}
						/>
						<Projects
							img={require('../../assets/img/projects/Portfolio.png')}
							name={"Portfólio"}
							description={"Meu portfólio web"}
						/>
						<Projects
							img={require('../../assets/img/projects/Notes.png')}
							name={"Notes"}
							description={"Aplicativo de bloco de notas"}
						/>
					</div>
				</div>
				<div className={styles.letsWork}>
					<p className={styles.letsWork_text}>Quer criar algo?</p>
					<p className={styles.letsWork_title}>Vamos desenvolver juntos!</p>
					<div className={styles.letsWork_contact}>
						<Button
							text={"Entrar em contato"}
						/>
					</div>
				</div>
				<Footer />
			</div>
			<div className={styles.background_image}>
			</div>
		</div>
	)
}
