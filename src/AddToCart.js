import React from 'react';



const AddToCart = ({ item, cartItems, setCartItems }) => {
     

  const addItem = () => {
    
    
    // Retrieve existing items from local storage or initialize an empty array
    cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];


    //add item it the cartItems array
    cartItems.push(item);
      
    

    // Store the updated items array back to local storage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    // set the state of cartItems
    setCartItems(cartItems);

    
  };
 
  


  return (
    <button onClick={addItem} type="button" className="addToCart round-button">
      Add To Cart
    </button>
  );
};

export default AddToCart;


