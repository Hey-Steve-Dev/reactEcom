import React from 'react'
import DeleteButton from './DeleteButton'
import ItemCount from './ItemCount'
import TotalPrice from './TotalPrice'

const CartColumn = ({item, index, deleteItem, duplicateItems, setCartItems, subTotal, setSubTotal, totalPrice}) => {
    
  // the cart column represents the right side of the shopping cart cards. 
  
  duplicateItems =  JSON.stringify(duplicateItems);
  


  return (
    <div>
           
            <ItemCount duplicateItems={duplicateItems} item={item} setCartItems={setCartItems}/>
            <TotalPrice item={item} duplicateItems={duplicateItems} subTotal={subTotal} setSubTotal={setSubTotal}/>
            <DeleteButton key={item.id} item={item} index={index} deleteItem={deleteItem} setSubTotal={setSubTotal} totalPrice={totalPrice}  />


    </div>
  )
}

export default CartColumn