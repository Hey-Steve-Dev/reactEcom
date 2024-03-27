import React from 'react'
import Price from './Price';

// ItemImage component to display the item image
const ShoppingCartImage = ({ image, item }) => {
    return <div className='displayBlock'><img src={image} alt="Item" style={{ width: '125px'}} /> 
    <Price item={item} />
    
    </div>;
  };

export default ShoppingCartImage