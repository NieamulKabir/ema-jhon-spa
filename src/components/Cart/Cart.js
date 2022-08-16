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
    let quantity = 0
    for (const product of cart) {
        quantity = quantity + product.quantity
        total = total + Number(product.price * quantity)
        shipping = shipping + product.shipping
    }
    const tax = Number(total * 0.1)
    const grandTotal = Number(total + shipping + tax)
    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Items : {quantity}</p>
            {/* <strong>
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
            </strong> */}
            <p>Total Price: ${total} </p>
            <p>Total Shipping: ${shipping} </p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h5>Grand Total: ${grandTotal}</h5>
        </div>
    );
};

export default Cart;