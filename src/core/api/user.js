export class User {
    static async fetchUserById(userId) {
        try {
            const response = await fetch(`http://localhost:3333/user/${userId}`, {
                method: 'GET',
            });

            return await response.json();
        } catch (error) {
            return { error: error.message };
        }
    }

    static async getUserGroup() {
        try {
            const response = await fetch(`http://localhost:3333/users`, {
                method: 'GET',
            });

            return await response.json();
        } catch (error) {
            return { error: error.message };
        }
    }
}
