import React from 'react'
import AddToCart from './AddToCart'
import Price from './Price'
import Rating from './Rating'

//the card footer is a separate section of the card that allows for formatting the bottom section of th card. 

const CardFooter = ({item, cartItems, setCartItems}) => {
  return (
    <div className='cardFooter'>
        <AddToCart item={item} cartItems={cartItems} setCartItems={setCartItems}/>
        <Rating item={item}/>
        <Price item={item} />
    </div>
  )
}

export default CardFooter