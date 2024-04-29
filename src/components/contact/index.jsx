import React, { useState } from 'react'
import { motion } from 'framer-motion';
import emailjs, { send } from '@emailjs/browser'
import toast from 'react-hot-toast';

import styles from './style.module.css'
import Button from '../button';
import Input from '../../components/input';


export default function Contact() {

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
        setTimeout(() => {
            setContactVisible(true);
        }, 100);
        setTimeout(() => {
            scrollTo("contact", -80);
        }, 200);
    }

    function sendEmail(e) {
        e.preventDefault();

        if (contactName === "" || contactText === "" || contactEmail === "") {
            toast.error("Preencha todos os campos!");
            return;
        }

        const templateParams = {
            from_name: contactName,
            message: contactText,
            email: contactEmail,
        }

        emailjs.send("service_3a6nosj", "template_byiw9yi", templateParams, "V89r7O82mtldDZKPN")
            .then(() => {
                toast.success("Email enviado com sucesso!");
                setContactEmail("");
                setContactName("");
                setContactText("");
            }, (error) => {
                toast.error("Não foi possível enviar o email");
                console.log(`Erro ao enviar email: ${error}`);
                throw new Error();
            });
    }

    return (
        <motion.div
            id={"contact_container"}
            className={styles.contact_container}
            initial={{}}
        >
            {contactVisible ? (
                <motion.form
                    className={styles.forms}
                    onSubmit={sendEmail}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className={styles.forms_fields}>
                        <div className={styles.forms_fields_input}>
                            <label className={styles.label}>Nome:</label>
                            <Input
                                maxLength={50}
                                placeholder={"Fulano de Tal"}
                                onChange={(e) => setContactName(e.target.value)}
                                value={contactName} />
                        </div>
                        <div className={styles.forms_fields_input}>
                            <label className={styles.label}>Email:</label>
                            <Input
                                maxLength={50}
                                placeholder={"fulano@email.com"}
                                onChange={(e) => setContactEmail(e.target.value)}
                                value={contactEmail}
                            />
                        </div>
                        <div className={styles.forms_fields_input}>
                            <label className={styles.label}>Mensagem:</label>
                            <textarea
                                className={styles.textArea}
                                cols="30"
                                rows="10"
                                maxLength={800}
                                onChange={(e) => setContactText(e.target.value)}
                                value={contactText}
                            />
                        </div>
                    </div>
                    <div className={styles.forms_send}>
                        <Button
                            text={"Enviar email"}
                        />
                    </div>
                </motion.form>
            ) : (
                <Button
                    onClick={() => openContact()}
                    text={"Entrar em contato"}
                />
            )}
        </motion.div>
    );
}