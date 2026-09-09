// ALL API CALLS IN ONE PLACE
const URL = "http://localhost:5000/api/users";

export const getUsers = async () => {
    const response = await fetch(URL);
    return await response.json();
};

export const getUserById = async (id) => {
    const response = await fetch(`${URL}/${id}`);
    return await response.json();
};

export const createUser = async (user) => {
    await fetch(URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user)
    });
};

export const updateUser = async (id, user) => {
    await fetch(`${URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user)
    });
};

export const deleteUser = async (id) => {
    await fetch(`${URL}/${id}`, { method: "DELETE" });
};
