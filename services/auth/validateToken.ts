import { urlsAuth } from "./urls";

export async function validateToken(token?: string) {
    try {
        // Validate if token exists
        if (token) {

            const response = await fetch(urlsAuth.auth.validateToken, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            if (!response.ok) {
                // If the token is invalid, return a message.
                return {
                    msg: 'Token is invalid',
                    status: false
                }
            };

            const result = await response.json();

            // If the token is valid, return a message.
            return {
                msg: 'Token is valid',
                status: true
            }

        } else {
            localStorage.removeItem('token');
            // There is no token
            return {
                msg: 'There is no token',
                status: false
            }
        }
        // Process the result as needed
    } catch (error) {
        console.log(error);

    }

}