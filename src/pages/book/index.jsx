import styles from './style.module.css';

import Header from '../../components/header';
import { useContext, useEffect, useState } from 'react';
import { Auth } from '../../core/api/auth';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/input';
import { Gender } from '../../core/api/gender';
import Button from '../../components/button';
import toast from 'react-hot-toast';
import { Books } from '../../core/api/book';
import { BookContext } from '../../contexts/bookContext'

export default function Book() {
    const [generos, setGeneros] = useState([]);
    const [selectedGenero, setSelectedGenero] = useState(null);
    const [lido, setLido] = useState(null);
    const [name, setName] = useState("");
    const [numPg, setNumPg] = useState("");
    const [autor, setAutor] = useState("");
    const [dtPubli, setDtPubli] = useState("");

    const { editBook, setEditBook } = useContext(BookContext);

    const navigate = useNavigate();

    useEffect(() => {
        if (!Auth.validateRoute()) {
            navigate('/');
        }
    }, [navigate]);

    useEffect(() => {
        async function fetchGeneros() {
            try {
                const response = await Gender.fetchGeneros();
                setGeneros(response);
            } catch (error) {
                console.error('Erro ao buscar gêneros:', error);
                toast.error('Erro ao carregar gêneros');
            }
        }

        fetchGeneros();

        if (editBook) {
            setSelectedGenero(editBook.gen);
            setLido(editBook.readed);
            setName(editBook.name);
            setNumPg(editBook.numPg);
            setAutor(editBook.autor);
            setDtPubli(editBook.dtPubli);
        }
    }, []);

    async function handleCreateBook() {
        const pages = Number(numPg);
        if (
            !selectedGenero ||
            lido === null ||
            !name.trim() ||
            isNaN(pages) || pages <= 0 ||
            !autor.trim() ||
            !dtPubli
        ) {
            toast.error("Verifique os campos antes de cadastrar");
            return;
        }

        try {
            await Books.create(
                localStorage.getItem("userId"),
                selectedGenero,
                name.trim(),
                pages,
                autor.trim(),
                new Date(dtPubli).toISOString(),
                lido
            );
            toast.success("Livro cadastrado com sucesso!");

            setSelectedGenero(null);
            setLido(null);
            setName("");
            setNumPg("");
            setAutor("");
            setDtPubli("");

        } catch (error) {
            console.error("Erro ao cadastrar o livro:", error);
            toast.error("Erro ao cadastrar o livro. Tente novamente mais tarde.");
        }
    }

    async function handleUpdateBook() {
        const pages = Number(numPg);
        if (
            !selectedGenero ||
            lido === null ||
            !name.trim() ||
            isNaN(pages) || pages <= 0 ||
            !autor.trim() ||
            !dtPubli
        ) {
            toast.error("Verifique os campos antes de atualizar");
            return;
        }

        try {
            await Books.update(
                localStorage.getItem("userId"),
                selectedGenero,
                name.trim(),
                pages,
                autor.trim(),
                new Date(dtPubli).toISOString(),
                lido,
                editBook.id
            );
            toast.success("Livro atualizado com sucesso!");

            setSelectedGenero(null);
            setLido(null);
            setName("");
            setNumPg("");
            setAutor("");
            setDtPubli("");
            
            setEditBook(null);
        } catch (error) {
            console.error("Erro ao atualizar o livro:", error);
            toast.error("Erro ao atualizar o livro. Tente novamente mais tarde.");
        }
    }

    return (
        <>
            <Header />
            <div className={styles.container}>
                <div className={styles.inputsContainer}>
                    <Input
                        placeholder="Nome"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <Input
                        placeholder="Número de páginas"
                        value={numPg}
                        onChange={(e) => setNumPg(e.target.value)}
                        type="number"
                    />
                    <Input
                        placeholder="Autor"
                        value={autor}
                        onChange={(e) => setAutor(e.target.value)}
                    />
                    <Input
                        placeholder="Data de Publicação"
                        value={dtPubli}
                        onChange={(e) => setDtPubli(e.target.value)}
                        type="date"
                    />
                </div>
                <div className={styles.selectContainer}>
                    <label htmlFor="genero-select">Selecione um gênero:</label>
                    <select
                        id="genero-select"
                        value={selectedGenero || ''}
                        onChange={(e) => setSelectedGenero(Number(e.target.value))}
                    >
                        <option value="" disabled>
                            -- Selecione --
                        </option>
                        {generos.map((genero) => (
                            <option key={genero.id} value={genero.id}>
                                {genero.descricao}
                            </option>
                        ))}
                    </select>
                </div>
                <div className={styles.selectContainer}>
                    <label htmlFor="lido-select">Lido:</label>
                    <select
                        id="lido-select"
                        value={lido !== null ? String(lido) : ''}
                        onChange={(e) => setLido(e.target.value === "true")}
                    >
                        <option value="" disabled>
                            -- Selecione --
                        </option>
                        <option value="false">Não</option>
                        <option value="true">Sim</option>
                    </select>
                </div>
                {editBook ? (
                    <div className={styles.buttonContainer}>
                        <Button onClick={handleUpdateBook} text="Atualizar" />
                    </div>
                ) : (
                    <div className={styles.buttonContainer}>
                        <Button onClick={handleCreateBook} text="Cadastrar" />
                    </div>
                )}

            </div>
        </>
    );
}
