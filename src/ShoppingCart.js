

import React from 'react';
import ShoppingCartImage from './ShoppingCartImage';
import ItemTitle from './ItemTitle';
import CartColumn from './CartColumn';
import Totals from './Totals';


const ShoppingCart = ({ cartItems, setCartItems, duplicateItems, uniqueItems, subTotal, setSubTotal}) => {



//This removes all items of one type from the shopping cart. 
const deleteItem = (itemIndex) => {

  //itemIndex is coming from the deleteItem prop being passed to cart column. 
  console.log("delete item at index " + itemIndex);
  
  //make a new array of items that will go in the cart and set it to empty
  let updatedCartItems = [];

  let idTobeDeleted;
  
  
  //for each cart item in the cartItems array loop through and find a match with the item to be deleted
 
   for (let i = 0; i < uniqueItems.length; i++) {
    
    if (i === itemIndex) {
     // updatedCartItems.push(cartItems[i]);
      idTobeDeleted = uniqueItems[i].id;
      console.log("The id at index " + i +" is "+ idTobeDeleted + ' and should be removed');
      break;
    }

  }
      
   
      
  //Loop through the cart items and populate updatedCartItems with items that do not match the id to be removed. 
  for (let i = 0; i < cartItems.length; i++) {
    console.log("cartItems["+ i +"].id is" + cartItems[i].id )

     if (cartItems[i].id !== idTobeDeleted) {
        
        updatedCartItems.push(cartItems[i]);
     }
  }
  
  
  //update local storage and set state
  localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  setCartItems(updatedCartItems);
};


return (
  <div>
    <h2>Shopping Cart</h2>
    <ul className='cartList'>
      {uniqueItems.map((item, index) => ( 
         
        <li className="cartItem" key={index}>
          <ShoppingCartImage image={item.image} item={item} />
          <ItemTitle item={item} />
          <CartColumn item={item} deleteItem={() => deleteItem(index)} duplicateItems={duplicateItems} setCartItems={setCartItems} subTotal={subTotal} setSubTotal={setSubTotal} />
        </li>
         
      ))}
      
      
    </ul>
    <Totals totalItems={cartItems.length} subTotal={subTotal} setSubTotal={setSubTotal}/>
    
  </div>
);
};

export default ShoppingCart;

