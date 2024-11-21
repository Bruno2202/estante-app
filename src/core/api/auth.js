import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";

export class Auth {
    static async login(email, password) {
        try {
            const response = await fetch("http://localhost:3333/login", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password
                }),
            });

            return await response.json();
        } catch (error) {
            return { error: error.message };
        }
    }

    static async register(name, email, password) {
        try {
            const response = await fetch("http://localhost:3333/register", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    email,
                    password
                }),
            });

            return await response.json();
        } catch (error) {
            return { error: error.message };
        }
    }

    static async logout() {
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        
        window.location.href = "/";
    }

    static validateRoute() {
        const token = localStorage.getItem("token");

        if (!token) {
            return false;
        }

        return true;
    }
}
