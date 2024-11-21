import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/button";
import Input from "../../components/input";

import styles from "./style.module.css"
import { Auth } from "../../core/api/auth";
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { UserContext } from "../../contexts/userContext";
import { BookContext } from "../../contexts/bookContext";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { setUserId } = useContext(UserContext);

    const { setEditBook } = useContext(BookContext) 

    useEffect(() => {
			setEditBook(null);
    }, []);

    const navigate = useNavigate();

    async function handleLogin() {
        const res = await Auth.login(email, password);

        if (res.token) {
            localStorage.setItem("token", res.token);
            localStorage.setItem("userId", res.user.id);

            setUserId(localStorage.getItem("userId"));
            
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