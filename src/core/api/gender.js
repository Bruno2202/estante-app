export class Gender {
    static fetchGeneros = async () => {
        try {
            const response = await fetch('http://localhost:3333/generos', {
                method: 'GET',
            });

            return await response.json();
        } catch (error) {
            console.error('Erro ao buscar gêneros:', error);
        }
    };
}
