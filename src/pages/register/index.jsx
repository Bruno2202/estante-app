import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/button";
import Input from "../../components/input";

import styles from "./style.module.css"
import { Auth } from "../../core/api/auth";
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { BookContext } from "../../contexts/bookContext";

export default function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { setEditBook } = useContext(BookContext) 

    useEffect(() => {
			setEditBook(null);
    }, []);

    const navigate = useNavigate();

    async function handlRegister() {
        const res = await Auth.register(name, email, password)

        if (res.user) {
            toast.success("Usuário cadastrado com sucesso!");
            navigate("/");
        } else {
            toast.error("Não foi possível criar usuário");
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.formContainer}>
                <h1>Cadastro</h1>
                <Input placeholder="Nome" onChange={(e) => setName(e.target.value)}/>
                <Input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                <Input placeholder="Senha" onChange={(e) => setPassword(e.target.value)} type={"password"} />
                <div className={styles.linkContainer}>
                    <Link to={'/'}>Entrar</Link>
                </div>
                <Button onClick={() => handlRegister()} text={"Entrar"} />
            </div>
        </div>
    )
}