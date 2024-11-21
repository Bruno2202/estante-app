export class Books {
    static async getMyBooks(userId) {
        try {
            const response = await fetch(`http://localhost:3333/livros/usuario/${userId}`, {
                method: 'GET',
            });

            return await response.json();
        } catch (error) {
            return { error: error.message };
        }
    }

    static async getAllBooks(isUsuario) {
        try {
            const response = await fetch(`http://localhost:3333/livros/${isUsuario}`, {
                method: 'GET',
            });

            return await response.json();
        } catch (error) {
            return { error: error.message };
        }
    }

    static async getFavoriteBooks(idUsuario) {
        try {
            const response = await fetch(`http://localhost:3333/livros/${idUsuario}/favoritos`, {
                method: 'GET'
            });

            return await response.json();
        } catch (error) {
            return { error: error.message };
        }
    }

    static async create(idUsuario, idGenero, nome, numPag, autor, dtPubli, lido) {
        try {
            const response = await fetch(`http://localhost:3333/livros`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    livro: {
                        idUsuario,
                        idGenero,
                        nome,
                        numPag,
                        autor,
                        dtPubli,
                        lido
                    }
                }),
            });

            return await response.json();
        } catch (error) {
            return { error: error.message };
        }
    }

    static async delete(id) {
        try {
            const response = await fetch(`http://localhost:3333/livros/${id}`, {
                method: 'DELETE',
            });

            return await response.json();
        } catch (error) {
            return { error: error.message };
        }
    }

    static async favoriteBook(id, idUsuario) {
        try {
            const response = await fetch(`http://localhost:3333/livro/favoritar/${id}/${idUsuario}`, {
                method: 'POST',
            });

            return await response.json();
        } catch (error) {
            return { error: error.message };
        }
    }

    static async update(idUsuario, idGenero, nome, numPag, autor, dtPubli, lido, id) {
        try {
            const response = await fetch(`http://localhost:3333/livros`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    livro: {
                        idUsuario,
                        idGenero,
                        nome,
                        numPag,
                        autor,
                        dtPubli,
                        lido,
                        id
                    }
                }),
            });

            return await response.json();
        } catch (error) {
            return { error: error.message };
        }
    }
}
