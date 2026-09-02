import Header from "./Header";

function Product ({name,price,color}){
    return(
        // <Header />
        <div className="product">
            <p>{name}</p>
            <p>{price}</p>
            <p>{color}</p>
        </div>
    )
}
export default Product;