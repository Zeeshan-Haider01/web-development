function Product ({name,price,color}){
    return(
        <div className="product">
            <p>{name}</p>
            <p>{price}</p>
            <p>{color}</p>
        </div>
    )
}
export default Product;