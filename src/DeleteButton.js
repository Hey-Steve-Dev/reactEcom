// DeleteButton.js
import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { useEffect } from 'react';


const DeleteButton = ({ deleteItem, totalPrice, setSubTotal  }) => {
//this is the delete button on the shopping cart card. it will delete all items of that type. 


  
  return (
    <button className='deleteButton' onClick={deleteItem}>
      <FaTrashAlt role="button" tabIndex='0' aria-label={'delete'} />
    </button>
  );
};

export default DeleteButton;

