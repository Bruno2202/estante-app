import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/button";
import Input from "../../components/input";

import styles from "./style.module.css"
import { Auth } from "../../core/api/auth";
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { UserContext } from "../../contexts/userContext";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { setUser } = useContext(UserContext);

    const navigate = useNavigate();

    async function handleLogin() {
        const res = await Auth.login(email, password);

        if (res.token) {
            localStorage.setItem("token", res.token);
            setUser(res.user)
            navigate("/home");
        } else {
            toast.error("Não foi possível realizar login");
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.formContainer}>
                <h1>Estante</h1>
                <Input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                <Input placeholder="Senha" onChange={(e) => setPassword(e.target.value)} type={"password"} />
                <div className={styles.linkContainer}>
                    <Link to={'/auth/register'}>Cadastre-se</Link>
                </div>
                <Button onClick={() => handleLogin()} text={"Entrar"} />
            </div>
        </div>
    )
}