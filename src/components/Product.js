import './Product.css';

const Product = (props) => {
    const { id, productName, price, size, productImage } = props.data;

    return (
        <div className="product">
            <img src={productImage} alt={productName}/>
            <div className="description">
                <p>
                    <b>{productName}</b>
                </p>
                <p>Size: {size}</p>
                <p>${price}</p>
            </div>
        </div>
    )
};

export default Product;