// Función genérica para manejar las respuestas de la API
async function handleResponse(response: Response) {
    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message);
    }

    return response.json();
}