import React from 'react';
import './Reviewitem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'


const ReviewItem = (props) => {
    const {product,handleRemoveproduct}=props
    const { name, price, img, shipping, quantity } = props.product
    return (
        <div className='review-item'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='review-item-details-container'>
                <div className='review-item-details'>
                    <p className="product-name">
                        {name.length > 20? name.slice(0,20): name}

                    </p>
                    <p>Price: <span className='orange-color'>{price}</span></p>
                    <p><small>Shipping : {shipping}</small></p>
                    <p><small>Quantity :{quantity}</small></p>
                    {props.children}
                </div>
                <div className='delete-container'>
                    <button onClick={()=>handleRemoveproduct(product)}>
                    <FontAwesomeIcon className='delete-icon' icon={faTrashAlt} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;