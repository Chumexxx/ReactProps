import "./Product.css"

const Product = (props) => {
    return(
        <div>

            < img className="prodImg" src={props.productImage} alt="Product" />
            <p className="details">{props.productName}</p>
            <p className="details">{props.productPrice}</p>
            <p className="details">{props.productDescription}</p>

        </div>
    );
};

export default Product;