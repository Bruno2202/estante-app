export class Books {
    static async getMyBooks(userId) {
        try {
            const response = await fetch(`http://localhost:3333/livros/${userId}`, {
                method: 'GET',
            });

            return await response.json();
        } catch (error) {
            return { error: error.message };
        }
    }

    static async getAllBooks() {
        try {
            const response = await fetch(`http://localhost:3333/livros`, {
                method: 'GET',
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
                    idUsuario,
                    idGenero,
                    nome,
                    numPag,
                    autor,
                    dtPubli,
                    lido
                }),
            });

            return await response.json();
        } catch (error) {
            return { error: error.message };
        }
    }
}
