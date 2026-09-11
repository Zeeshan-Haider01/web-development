import { useEffect, useState } from "react";

function GetPost() {
    const [post, setPost] = useState([]);
    useEffect(() => {
        const fetchPost = async () => {
            const response = await fetch("https://dummyjson.com/products/add", {
                method: "post",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    title: "Test Product",
                    description: "This is a test product",
                    price: 19.99,
                })
            });
            const data = await response.json();
            setPost([data]); // Wrap the single product in an array
        };
        fetchPost();
    }, []);

    return (
        <div>
            <h1>Get Post</h1>
            {post ? post?.map((post) => (
                <div key={post.id} style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
                    <h2>{post.title}</h2>
                    <p>{post.description}</p>
                    <p>${post.price.toFixed(2)}</p>
                    <img src={post.images[0]} alt={post.title} />
                </div>
              )) : <p>Loading...</p>}
        </div>
    );
}
export default GetPost;