import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getUserById } from "../api";

function SingleUser() {

    const { id } = useParams();
    const [user, setUser] = useState(null);

    // LOAD ONE USER
    useEffect(() => {
        const loadUser = async () => {
            const data = await getUserById(id);
            setUser(data);
        };
        loadUser();
    }, [id]);

    if (!user) {
        return <div className="container"> Loading... </div>;
    }

    return (
        <div className="container">
            <h1> {user.name} </h1>

            <div className="user">
                <img src={user.image} alt={user.name} />
                <p> Email: {user.email} </p>
                <p> Age: {user.age} </p>

                <Link to={`/edit/${user._id}`}>
                    <button> Edit </button>
                </Link>

                <Link to="/">
                    <button> Back </button>
                </Link>
            </div>
        </div>
    );
}

export default SingleUser;
