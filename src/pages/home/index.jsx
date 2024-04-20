import React, { useEffect, useState } from 'react';
import { animate, motion, Var } from 'framer-motion';

import styles from './style.module.css'
import stylesProject from '../../components/cards/projects/detail/styles.module.css'

import Header from '../../components/header';
import Footer from '../../components/footer';
import Topic from '../../components/cards/topic';
import Projects from '../../components/cards/projects';
import Button from '../../components/button';

export default function Home() {

	return (
		<div className={styles.container}>
			<Header />
			<div id="home" className={styles.home}>
				<div className={styles.salutation}>
					<motion.div
						className={styles.title}
						initial={{ opacity: 0, y: 40 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{
							ease: "easeOut",
							duration: 1
						}}
					>
						<div className={styles.title_saluation}>
							<p>Olá, meu nome é </p>
							<p className={`${styles.title_saluation_contrast}`}>&nbsp;Bruno</p>
						</div >
						<motion.div
							className={styles.title}
							initial={{ opacity: 0, y: 0 }}
							animate={{ opacity: 1 }}
							transition={{
								ease: "easeOut",
								delay: 1
							}}
						>
							<p className={styles.title_description}>Web developer</p>
						</motion.div>
					</motion.div>
				</div>
				<div
					id="about"
					className={styles.about_container}
				>
					<motion.div
						className={styles.about}
						viewport={{ once: true, amount: 0.5 }}
						initial={{ opacity: 0, y: 16 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{
							ease: "easeInOut",
							duration: 0.6
						}}
					>
						<Topic
							title={"Sobre mim"}
							text={"Sou desenvolvedor Front-end há mais de um ano. Apaixonado por tecnologia e desenvolvimento, utilizo meus conhecimentos na área para criar aplicações web com diversos propósitos. Tenho experiência trabalhando com HTML, CSS, JavaScript, SQL, React, React Native, Git e Firebase. Estou sempre ansioso para aprender mais sobre como desenvolver projetos incríveis e aprimorar os que já existem."}
							position={"left"}
						>
						</Topic>
						<img className={styles.me} src={require('../../assets/img/Bruno.png')} />
					</motion.div>
				</div>
				<div
					id="projects"
					className={styles.projects_container}
				>
					<motion.div
						className={styles.projects_view}
						viewport={{ once: true, amount: 0.5 }}
						initial={{ opacity: 0, y: 16 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{
							ease: "easeInOut",
							duration: 0.5
						}}

					>
						<p className={styles.title_topic}>Meus projetos</p>
						<div className={styles.projects}>
							<Projects
								img={require('../../assets/img/projects/Behance.png')}
								name={"Sandbox"}
								description={"Minha rede social mobile"}
								detailDescription={
									<div className={stylesProject.project_detailDescription}>
										<p>
											O Sandbox é minha própria rede social desenvolvida pra dispositivos mobile.
											<br /><br />  Nela, os usuários podem interagir por meio de publicações de fotos e textos, comentários nos posts de outros usuários e likes.
											<br /><br /> O Sandbox proporciona uma maneira fácil e intuitiva de interagir na plataforma, retornando uma boa experiência ao usuário.
											<img src={require('../../assets/img/projects/banner/sandbox.png')} />
										</p>
									</div>
								}
							/>
							<Projects
								img={require('../../assets/img/projects/MuchkinId.png')}
								name={"Muchkin ID"}
								description={"Auxiliar de jogo do Muchkin"}
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
					</motion.div>
				</div>
				<motion.div
					id="contact"
					className={styles.letsWork}
					viewport={{ once: true, amount: 0.2 }}
					initial={{ opacity: 0, y: 16 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{
						ease: "easeInOut",
						duration: 0.8
					}}
				>
					<p className={styles.letsWork_text}>Quer criar algo?</p>
					<p className={styles.letsWork_title}>Vamos desenvolver juntos!</p>
					<div className={styles.letsWork_contact}>
						<Button
							text={"Entrar em contato"}
						/>
					</div>
				</motion.div>
				<Footer />
			</div>
			<div className={styles.background_image}>
			</div>
		</div >
	)
}
