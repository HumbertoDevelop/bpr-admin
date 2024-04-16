import { users } from "./urls";

// Get one manager
export async function getOneManager(token: string) {
    try {
        try {
            const response = await fetch(users.managers.get.onemanager, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            if (!response.ok) {
                // If user is not found, return a message.
                return {
                    msg: 'User not found',
                    status: false
                }
            };

            const result = await response.json();

            // If user is found, return a message.
            return {
                msg: 'User found',
                status: true
            }

        } catch (error) {
            console.log(error);

        }
    } catch (error) {
        console.log(error);

    }
}

// Post manager / club
export async function postManager(data: any) {
    try {
        try {
            const response = await fetch(users.managers.post.create, {
                method: 'POST',
                body: JSON.stringify(data),
            })

            if (!response.ok) {
                // If player is not created, return a message.
                return {
                    msg: 'Player not created',
                    status: false
                }
            };

            const result = await response.json();

            // If player is created, return a message.
            return {
                msg: 'Player created',
                status: true
            }

        } catch (error) {
            console.log(error);

        }
    } catch (error) {
        console.log(error);

    }
}
