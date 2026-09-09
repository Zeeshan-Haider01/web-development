import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getUsers, deleteUser } from "../api";

function Home() {

    // LOAD USERS
    // useEffect(() => {
    //     const loadUsers = async () => {
    //         const data = await getUsers();
    //         setUsers(data);
    //     };
    //     loadUsers();
    // }, []);

    // Get All User
    const [users, setUsers] = useState([]);
    const URL = "http://localhost:5000/api/users";
    useEffect(() => {
        const loadUsers = async () => {
            const response = await fetch(URL);
            const data = await response.json();
            setUsers(data);
        };
        loadUsers();
    }, []);

    // DELETE USER
    const removeUser = async (id) => {
        await deleteUser(id);
        setUsers(await getUsers());
    };

    return (
        <div className="container">
            <h1>User CRUD</h1>
            <Link to="/create">
                <button> Add User </button>
            </Link>
            <hr />

            <div className="users">
                {users?.map((user) => (
                    <div className="user" key={user?._id}>
                        <img src={user.image} alt={user?.name} />
                        <h2> {user?.name} </h2>
                        <p> Email: {user?.email} </p>
                        <p> Age: {user?.age} </p>

                        <Link to={`/user/${user?._id}`}>
                            <button> View </button>
                        </Link>

                        <Link to={`/edit/${user?._id}`}>
                            <button> Edit </button>
                        </Link>

                        <button onClick={() => removeUser(user?._id)}> Delete </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;
