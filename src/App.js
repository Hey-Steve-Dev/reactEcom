import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from './Home';
import About from './About';
import Nav from './Nav';
import React from 'react';
import SearchForm from './SearchForm';

import { useState, useEffect } from "react";


import ShoppingCart from './ShoppingCart';


function App() {
  const API_URL = 'https://fakestoreapi.com/products/';
  // set useState for items/setItems
  const [items, setItems] = useState([]);
  
  const [search, setSearch] = useState('');

  const [subTotal, setSubTotal] = useState([]);

 
  // set useState for cartItems/setCartItems
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem('cartItems')) || []
  );

 //console.log(items)

    //useEffect called once at the programs opening because there are no dependencies liste in the array below. 
  useEffect ( () => {

    const fetchItems = async() => {
      
      //try block define the response as the url with the request type
      // data waits for the response then parses it as JSON
      // setItem is finally called with the data
    try{
      
      const response = await fetch(`${API_URL}`);
      
      const data = await response.json();
      
      
      setItems(data);
      
      }
    catch(err){
      console.log(err);
      }
  }
    fetchItems();

  }, [])
  
  
  
  // useEffect is triggered anytime cartItems changes, thus when cart items is updated it is automatcally updated to local storage. 
  useEffect(() => {
   
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  


// removeDuplicates take the array cartItems and make two arrays one for unique items and one for duplicate items. 
// we will use the duplicate items array in the count of the items. 
const duplicateItems = [];

function removeDuplicates(cartItems) {
  const uniqueItems = [];

  cartItems.forEach((cartItem) => {
    // Check if the current item is not null or undefined and has an 'id' property
    if (cartItem && cartItem.id && !uniqueItems.some(item => item.id === cartItem.id)) {
      uniqueItems.push(cartItem);
    } else if (cartItem) {
      duplicateItems.push(cartItem);
    }
  });

  return uniqueItems;
}




//call to remove duplicates
const uniqueItems = removeDuplicates(cartItems);




  


  return (
    <div className="App">
     
     <Nav cartItems={cartItems} search={search} setSearch={setSearch}  />
     
     
     <Routes>
        <Route path="/" element={<Home items={items}  cartItems={cartItems} setCartItems={setCartItems} search={search} setSearch={setSearch}/>} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<ShoppingCart  uniqueItems={uniqueItems} duplicateItems={duplicateItems} items={items} cartItems={cartItems} setCartItems={setCartItems} subTotal={subTotal} setSubTotal={setSubTotal}/>} />
     </Routes>
        
      
    </div>
  );
}

export default App;