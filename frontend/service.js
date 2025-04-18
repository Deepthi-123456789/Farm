// services.js

// Function to register a new user
export async function registerUser(name, email, password) {
    try {
        const response = await fetch('https://your-api-server.com/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, password }),
        });

        if (!response.ok) {
            throw new Error('Registration failed');
        }

        return await response.json();
    } catch (error) {
        console.error('Error:', error);
        throw new Error(error.message);
    }
}

// Function to log in an existing user
export async function loginUser(email, password) {
    try {
        const response = await fetch('https://your-api-server.com/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        if (!response.ok) {
            throw new Error('Login failed');
        }

        return await response.json();
    } catch (error) {
        console.error('Error:', error);
        throw new Error(error.message);
    }
}
