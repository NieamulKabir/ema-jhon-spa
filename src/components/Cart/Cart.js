import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props
    // let productName = ['']
    // for(const product of cart){
    //     newProduct = product.name
    // }

    let total = 0
    let shipping = 0
    for (const product of cart) {
        total = total + product.price
        shipping = shipping + product.shipping
    }
    const tax = total * 0.1
    const grandTotal = total + shipping + tax
    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Items : {cart.length}</p>
            <strong>
                <p>Products Name :
                    <ul>
                        {
                            cart.map(p => 
                            <li>
                                {p.name}
                            </li>)
                        }
                    </ul>
                </p>
            </strong>
            <p>Total Price: ${total} </p>
            <p>Total Shipping: ${shipping} </p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h5>Grand Total: ${grandTotal}</h5>
        </div>
    );
};

export default Cart;