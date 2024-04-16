import { urlsAuth } from "./urls";

export async function loginAuthPost(data: AuthLogin) {
    try {

        const response = await fetch(urlsAuth.auth.login, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error('Login failed');
        }

        const result = await response.json();
        localStorage.setItem('token', result.token);

        // Process the result as needed
        return result;
    } catch (error) {
        console.log(error);

    }
}