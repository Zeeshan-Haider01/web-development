import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getUserById, createUser, updateUser } from "../api";

function UserForm() {

    // IF THERE IS AN ID -> EDIT MODE, OTHERWISE CREATE MODE
    const { id } = useParams();
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const [image, setImage] = useState("");

    // FILL FORM WHEN EDITING
    useEffect(() => {
        if (!id) return;

        const loadUser = async () => {
            const user = await getUserById(id);
            setName(user.name);
            setEmail(user.email);
            setAge(user.age);
            setImage(user.image);
        };
        loadUser();
    }, [id]);

    // CREATE / UPDATE USER
    const saveUser = async (e) => {
        e.preventDefault();

        const user = {
            name: name,
            email: email,
            age: age,
            image: image
        };

        if (id) {
            await updateUser(id, user);
        } else {
            await createUser(user);
        }

        navigate("/");
    };

    return (
        <div className="container">
            <h1> {id ? "Edit User" : "Add User"} </h1>

            <form onSubmit={saveUser}>
                <input
                    type="text"
                    placeholder="Enter name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Enter age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Enter image URL"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                />

                <button type="submit"> {id ? "Update User" : "Add User"} </button>
                <button type="button" onClick={() => navigate("/")} > Cancel </button>
            </form>
        </div>
    );
}

export default UserForm;
