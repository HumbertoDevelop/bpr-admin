export function logoutAuth() {
    try {

        // Remove the user state and the token from the local storage.
        localStorage.removeItem('token');
        return true;
    } catch (error) {
        console.log(error);

    }

}