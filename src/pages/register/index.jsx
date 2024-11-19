import { Link } from "react-router-dom";
import Button from "../../components/button";
import Input from "../../components/input";

import styles from "./style.module.css"

export default function Register() {
    async function handleLogin() {

    }

    return (
        <div className={styles.container}>
            <form
                onSubmit={(e) => {
                    console.log("")
                    e.preventDefault()
                }}
                className={styles.formContainer}
            >
                <h1>Cadastro</h1>
                <Input placeholder="Nome" />
                <Input placeholder="Email" />
                <Input placeholder="Senha" type={"password"} />
                <div className={styles.linkContainer}>
                    <Link to={'/'}>Entrar</Link>
                </div>
                <Button onClick={() => handleLogin()} text={"Entrar"} />
            </form>
        </div>
    )
}