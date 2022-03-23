import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [cart, setCart] =useState([])
    
    const [product, setProduct] =useState([]);
    useEffect(()=>{
        
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProduct(data))
    }, [])
    const addToCart =(product)=>{
       const newCart =[...cart, product]
       setCart(newCart)
    }
    return (
        <div className='container'>
           <div className='product-container'>
              
               {
                   product.map(product=> <Product key={product.id} addToCart={addToCart} product={product}></Product>
                    )
               }
           </div>
           <div className='summary-container'>
            <h3>Summary:{cart.length}</h3>
           </div>
        </div>
    );
};

export default Shop;