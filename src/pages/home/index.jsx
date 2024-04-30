import { AnimatePresence, motion } from 'framer-motion';
import { isMobile } from 'react-device-detect';

import styles from './style.module.css'

import Header from '../../components/header';
import Footer from '../../components/footer';
import Topic from '../../components/cards/topic';
import Projects from '../../components/cards/projects';
import Contact from '../../components/contact';

export default function Home() {

	const viewportOptions = isMobile ? { once: true, amount: 0.1 } : { once: true, amount: 0.5 };

	return (
		<div id="container" className={styles.container}>
			<AnimatePresence>
				<>
					<Header />
					<div id="home" className={styles.home}>
						<div className={styles.salutation}>
							<motion.div
								className={styles.title}
								initial={{ opacity: 0, y: 40 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{
									delay: 0.4,
									ease: "easeOut",
									duration: 1
								}}
							>
								<div className={styles.title_saluation}>
									<p className={styles.title_saluation_text}>Olá, meu nome é</p>
									<p className={styles.space}>&nbsp;</p>
									<p className={styles.title_saluation_contrast}>Bruno</p>
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
								viewport={viewportOptions}
								initial={{ opacity: 0, y: 16 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{
									ease: "easeInOut",
									duration: 0.6
								}}
							>
								<div className={styles.about_me}>
									<Topic
										title={"Sobre mim"}
										text={
											<>
												Meu nome é Bruno Terribile, tenho 19 anos e sou desenvolvedor Front-end.
												<br /><br />Apaixonado por tecnologia e desenvolvimento, utilizo meus conhecimentos na área para criar aplicações web com diversos propósitos.
												<br /><br />Tenho experiência trabalhando com HTML, CSS, JavaScript, SQL, React, React Native, Git e Firebase.
												<br /><br />Estou sempre ansioso em aprender mais como desenvolver projetos incríveis e aprimorar meus conhecimentos na área.
											</>
										}

									>
										<img alt="Bruno" className={styles.about_pic_mobile} src={require('../../assets/img/Bruno.png')} />
									</Topic>
								</div>
								<img alt="Bruno" className={styles.about_pic} src={require('../../assets/img/Bruno.png')} />
							</motion.div>
						</div>
						<div
							id="projects"
							className={styles.projects_container}
						>
							<motion.div
								className={styles.projects_view}
								viewport={viewportOptions}
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
										description={"Minha rede social"}
										detailDescription={{
											text: "Rede social desenvolvida para dispositivos mobile. Utiliza autenticação OAuth, email e senha. Nela, os usuários conseguem compartilhar textos e imagens.",
											imgPreview: require('../../assets/img/projects/sandbox/appPreview.png'),
											viewMore: "https://github.com/Bruno2202/sandbox",
										}}
									/>
									<Projects
										img={require('../../assets/img/projects/MuchkinId.png')}
										name={"Muchkin ID"}
										description={"Auxiliar de jogo do Muchkin"}
										detailDescription={{
											text: "Auxiliar para o jogo de cartas Munchkin. Nele, o usuário pode iniciar uma partida com seus amigos e facilitar o contegem de pontos no jogo.",
											imgPreview: require('../../assets/img/projects/MuchkinId.png'),
											viewMore: "https://munchkinid.firebaseapp.com/",
										}}
									/>
									<Projects
										img={require('../../assets/img/projects/Portfolio.png')}
										name={"Portfólio"}
										description={"Meu portfólio web"}
										detailDescription={{
											text: "Meu portfólio web. Nele, você pode saber um pouco mais sobre mim e ver os projetos que já desenvolvi.",
											imgPreview: require('../../assets/img/projects/Portfolio.png'),
											viewMore: "https://github.com/Bruno2202/portfolio",
										}}
									/>
									<Projects
										img={require('../../assets/img/projects/Notes.png')}
										name={"Notes"}
										description={"Aplicativo de bloco de notas"}
										detailDescription={{
											text: "App mobile o qual permite que o usuário possa salvar suas notações. Desenvolvido para estudos do React Native.",
											imgPreview: require('../../assets/img/projects/Notes.png'),
											viewMore: "https://github.com/Bruno2202",
										}}
									/>
								</div>
							</motion.div>
						</div>
						<motion.div
							id="contact"
							className={styles.letsWork}
							viewport={viewportOptions}
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
								<Contact />
							</div>
						</motion.div>
						<Footer />
					</div>
					<div className={styles.background_image} />
				</>
			</AnimatePresence >
		</div >
	)
}
