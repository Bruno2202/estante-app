import React, { useEffect, useState } from 'react';
import { animate, AnimatePresence, motion } from 'framer-motion';
import emailjs from '@emailjs/browser'

import styles from './style.module.css'
import stylesProject from '../../components/cards/projects/detail/styles.module.css'

import Header from '../../components/header';
import Footer from '../../components/footer';
import Topic from '../../components/cards/topic';
import Projects from '../../components/cards/projects';
import Button from '../../components/button';
import Input from '../../components/input';

export default function Home() {

	const [homeVisible, setHomeVisible] = useState(true);
	const [contactVisible, setContactVisible] = useState(false);
	const [contactEmail, setContactEmail] = useState("");
	const [contactName, setContactName] = useState("");
	const [contactText, setContactText] = useState("");

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

	function openContact() {
		animate("#contact_container", { width: '800px', height: "56vh", borderRadius: '8px' }, { ease: 'easeInOut', duration: 0.4 });
		setTimeout(() => {
			scrollTo("contact");
		}, 200);
		setTimeout(() => {
			setContactVisible(true);
		}, 400);
	}

	function sendEmail(e) {
		e.preventDefault();

		if (contactName === "" || contactText === "" || contactEmail === "") {
			alert("Preencha todos os campos!");
			return;
		}

		const templateParams = {
			from_name: contactName,
			message: contactText,
			email: contactEmail,
		}

		emailjs.send("service_3a6nosj", "template_byiw9yi", templateParams, "V89r7O82mtldDZKPN")
			.then((response) => {
				console.log("Email eviado", response.status, response.text)
				setContactEmail("");
				setContactName("");
				setContactText("");
			}, (error) => {
				console.log(`Erro ao enviar email: ${error}`);
			});
	}

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
									text={
										<p>
											Sou Bruno Terribile, 19 anos e sou desenvolver Front-end há mais de um ano.
											<br /><br />Apaixonado por tecnologia e desenvolvimento, utilizo meus conhecimentos na área para criar aplicações web com diversos propósitos.
											<br /><br />Tenho experiência trabalhando com HTML, CSS, JavaScript, SQL, React, React Native, Git e Firebase. Estou sempre ansioso para aprender mais sobre como desenvolver projetos incríveis e aprimorar os que já existem.
										</p>
									}
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
													<br /><br /> Nela, os usuários podem interagir por meio de publicações de fotos e textos, comentários nos posts de outros usuários e likes.
													<img src={require('../../assets/img/projects/sandbox/appPreview.png')} />
													<br /> O Sandbox proporciona uma maneira fácil e intuitiva de interagir na plataforma, retornando uma boa experiência ao usuário.
													<br /><br /> A plataforma foi desenvolvida utilizando JavaScript, React Native e Firebase.
												</p>
												<div className={stylesProject.viewMore}>
													<Button
														text={"Ver mais"}
														onClick={() => window.open("https://github.com/Bruno2202/sandbox")}
													/>
												</div>
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
								<motion.div
									id={"contact_container"}
									className={styles.contact_container}
									initial={{ borderRadius: "50px", height: "auto" }}
									onClick={() => openContact()}
								>
									{contactVisible ? (
										<motion.form
											className={styles.forms}
											onSubmit={sendEmail}
											initial={{ y: 20, opacity: 0 }}
											animate={{ y: 0, opacity: 1 }}
											transition={{ duration: 1 }}
										>
											<div className={styles.forms_fields}>
												<div className={styles.input}>
													<label className={styles.label}>Nome:</label>
													<Input
														maxLength={50}
														placeholder={"Fulano de Tal"}
														onChange={(e) => setContactName(e.target.value)}
														value={contactName} />
												</div>
												<div className={styles.input}>
													<label className={styles.label}>Email:</label>
													<Input
														maxLength={50}
														placeholder={"fulano@email.com"}
														onChange={(e) => setContactEmail(e.target.value)}
														value={contactEmail}
													/>
												</div>
												<div className={styles.input}>
													<label className={styles.label}>Mensagem:</label>
													<textarea
														className={styles.textArea}
														cols="30"
														rows="10"
														onChange={(e) => setContactText(e.target.value)}
														value={contactText}
													/>
												</div>
											</div>
											<Button
												text={"Enviar email"}
											/>
										</motion.form>
									) : (
										<p>Entrar em contato</p>
									)}
								</motion.div>
							</div>
						</motion.div>
						<Footer />
					</div>
					<div className={styles.background_image}>
					</div>
				</>
			</AnimatePresence>
		</div >
	)
}
