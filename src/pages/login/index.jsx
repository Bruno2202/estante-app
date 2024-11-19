import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/button";
import Input from "../../components/input";

import styles from "./style.module.css"

export default function Login() {
    const navigate = useNavigate();
    async function handleLogin() {
        navigate("/home");
    }

    return (
        <div className={styles.container}>
            <form
                onSubmit={(e) => {
                    e.preventDefault()
                }}
                className={styles.formContainer}
            >
                <h1>Estante</h1>
                <Input placeholder="Email" />
                <Input placeholder="Senha" type={"password"} />
                <div className={styles.linkContainer}>
                    <Link to={'/auth/register'}>Cadastre-se</Link>
                </div>
                <Button onClick={() => handleLogin()} text={"Entrar"} />
            </form>
        </div>
    )
}