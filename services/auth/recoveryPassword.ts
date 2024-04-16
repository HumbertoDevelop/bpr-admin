import { urlsAuth } from "./urls";


export async function recoverPasswordAuth(data: RecoveryPasswordData) {
    try {

        const response = await fetch(urlsAuth.recovery_password.postRecoveryPassword, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) throw new Error('Recovery password failed');

        const result = await response.json();
        console.log('recoverPasswordAuth');
        console.log('success');


        // Process the result as needed
    } catch (error) {
        console.log(error);

    }
}