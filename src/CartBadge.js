import React from 'react';

//the cartBadge is the small icon the indicates how many items are in the cart by the shopping cart icon

const CartBadge = ({cartItems}) => {
 
 //fa-shopping-cart

  return (
    <div className='cartBadge'>
      <p> {cartItems.length}</p>
    </div>


  );
};

export default CartBadge;



