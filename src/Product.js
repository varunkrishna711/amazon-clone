import React from "react";
import "./Product.css";
import StarIcon from '@material-ui/icons/Star';
import { useStateValue } from "./StateProvider";

const Product = ({id,title,image,price,rating}) => {

    const [{basket}, dispatch] = useStateValue();

    const addToBasket = () => {
        // Add item to basket
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
    };

    return ( 
        <div className="product">
            <div className="product_info">
                <p>{title}</p>
                <p className="product_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">
                  {Array(rating)
                   .fill()
                   .map((_,i) => (
                        <StarIcon />
                    ))}  
                </div>
            </div>
            <img src={image} alt="the-lean-startup" />

            <button className="product_button" onClick={addToBasket}>Add to basket</button>
        </div>
     );
}
 
export default Product;