import React from 'react';
import'./product.css'
const Product = (props) => {
    // const {name, price, img}=props.Product;
    return (
        <div className='product'>
            <img className='photo' src={props.product.img} alt="" />
            <p>Price:${props.product.price}</p>
            <p>Name:{props.product.name}</p>
            <p>seller:{props.product.seller}</p>
            <p>ratings:{props.product.ratings}</p>
            <p>stock:{props.product.stock}</p>
            <button onClick={()=>props.addToCart(props.product)}>Add To Cart</button>
        </div>
    );
};

export default Product;