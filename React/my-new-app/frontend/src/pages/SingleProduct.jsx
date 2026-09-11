import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
function SingleProduct() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const URL = "https://dummyjson.com/products";
    useEffect(() => {
        const loadProduct = async () => {
            const response = await fetch(`${URL}/${id}`);
            const productData = await response.json();
            setProduct(productData);
        };
        loadProduct();
    }, [id]);
    return (
        <div className="container">
            <h1> {product?.title} </h1>
            <div className="user">
                <img src={product?.thumbnail} alt={product?.title} />
                <p> title: {product?.title} </p>
                <p> category: {product?.category} </p>
                <p> price: {product?.price} </p>
                <p> rating: {product?.rating} </p>
                <p> brand: {product?.brand} </p>
                <p> minimumOrderQuantity: {product?.minimumOrderQuantity} </p>
                <p> discountPercentage: {product?.discountPercentage} </p>
                <p> description: {product?.description} </p>
                <Link to={`/edit/${product?.id}`}>
                    <button> Edit </button>
                </Link>

                <Link to="/home">
                    <button> Back </button>
                </Link>
            </div>
        </div>
    );
}

export default SingleProduct;
