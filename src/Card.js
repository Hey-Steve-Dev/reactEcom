import React from 'react'
import ItemTitle from './ItemTitle';
import ItemDescription from './ItemDescription'
import ItemImage from './ItemImage'


import CardFooter from './CardFooter';

//cards are the items where the product info lives. 

function Card({item, cartItems, setCartItems}) {
    
  
   
  return (
    <div className="itemCard">
       
       <ItemTitle item={item}  />
       <ItemImage item={item} />
       <ItemDescription item={item} />
       <CardFooter item={item} cartItems={cartItems} setCartItems={setCartItems} />
    
    
       
    </div>
  )
}

export default Card