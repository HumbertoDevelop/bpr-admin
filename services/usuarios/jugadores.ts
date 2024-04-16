import { users } from "./urls";

// Obtener un jugador por ID
export async function getOnePlayer(token: string) {
    try {
        const response = await fetch(users.players.get.oneplayer, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        // Handle the response
        handleResponse(response);

        return {
            msg: 'User found',
            status: true
        };
    } catch (error) {
        console.log(error);
        return {
            msg: 'Error',
            status: false
        };
    }
}

// Crear un jugador
export async function createPlayer(data: any) {
    try {
        const response = await fetch(users.players.post.create, {
            method: 'POST',
            body: JSON.stringify(data),
        });

        // Handle the response
        handleResponse(response);

        return {
            msg: 'Player created',
            status: true
        };
    } catch (error) {
        console.log(error);
        return {
            msg: 'Error',
            status: false
        };
    }
}

// Actualizar un jugador por ID
export async function updatePlayer(id: string, data: any) {
    try {
        const response = await fetch(users.players.put.update, {
            method: 'PUT',
            body: JSON.stringify(data),
        });

        // Handle the response
        handleResponse(response);

        return {
            msg: 'Player updated',
            status: true
        };
    } catch (error) {
        console.log(error);
        return {
            msg: 'Error',
            status: false
        };
    }
}

// Eliminar un jugador por ID
export async function deletePlayer(id: string) {
    try {
        const response = await fetch(users.players.delete.deleteOne, {
            method: 'DELETE',
            body: JSON.stringify({ id }),
        });

        // Handle the response
        handleResponse(response);

        return {
            msg: 'Player deleted',
            status: true
        };
    } catch (error) {
        console.log(error);
        return {
            msg: 'Error',
            status: false
        };
    }
}
