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
    const URL = "https://dummyjson.com/products";
     
    const loadUsers = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setUsers(data.products);
    };
    useEffect(() => {
        loadUsers();
    }, []);

    // DELETE USER
    const removeUser = async (id) => {
         await fetch(`${URL}/${id}`, { method: "DELETE" });
        // await deleteUser(id);
        setUsers(await loadUsers());
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
                    <div className="user" key={user?.id}>
                        <img src={user.thumbnail} alt={user?.title} />
                        <h2> {user?.title} </h2>
                        <p> description: {user?.description} </p>

                        <Link to={`/singleproduct/${user?.id}`}>
                            <button> View </button>
                        </Link>

                        <Link to={`/edit/${user?.id}`}>
                            <button> Edit </button>
                        </Link>

                        <button onClick={() => removeUser(user?.id)}> Delete </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;
