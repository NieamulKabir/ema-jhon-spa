import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import useProducts from '../../hooks/useProducts';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
import { Link } from 'react-router-dom';

const Shop = () => {
    const [products, setProducts] = useProducts()

    const [cart, setCart] = useState([])



    useEffect(() => {
        const storedCart = getStoredCart();
        const saveCart = []
        for (const id in storedCart) {
            const addedProducts = products.find(product => product.id === id)
            if (addedProducts) {
                const quantity = storedCart[id]
                addedProducts.quantity = quantity
                saveCart.push(addedProducts)
            }
        }
        setCart(saveCart)

    }, [products])


    const handleAddToCart = (selectedProduct) => {
        let newCart = []
        const exists = cart.find(product => product.id === selectedProduct.id);
        if (!exists) {
            selectedProduct.quantity = 1
            newCart = [...cart, selectedProduct]
        } else {
            const rest = cart.filter(product => product.id !== selectedProduct.id)
            exists.quantity = exists.quantity + 1
            newCart = [...rest, exists]
        }

        setCart(newCart)
        addToDb(selectedProduct.id);
    }


    return (
        <div>
            <div className='shop-container'>
                <div className="products-container">
                    {
                        products.map(product => <Product
                            key={product.id}
                            product={product}
                            handleAddToCart={handleAddToCart}
                        ></Product>)
                    }
                </div>
                <div className='cart-container'>
                    <Cart

                        cart={cart}
                    >
                        
                            <Link to='/orders'>
                                <button>
                                Review Order
                                </button>
                             
                            </Link>
                      
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;