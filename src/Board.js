import React from 'react';
import Card from './Card';

export const Board = ({ items, cartItems, setCartItems }) => {

//The board is the div where the cards for each item live
//below makes a card for each item when mapped through
  
  return (
    <div>
      {items.map((item, index) => (
        <div key={index}>
          
          <Card item={item} cartItems={cartItems} setCartItems={setCartItems}/>
        </div>
      ))}
    </div>
  );
};

export default Board;
