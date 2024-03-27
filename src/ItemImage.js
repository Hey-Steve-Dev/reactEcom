import React from 'react'

const ItemImage = ({item}) => {
  return (
    <div>
        
    <img className="itemImage" src={item.image}/>
    </div>
  )
}

export default ItemImage