import React from 'react';
import Board from './Board';
import SearchForm from './SearchForm';

function Home({ items, cartItems, setCartItems, search, setSearch }) {
  // Filter items based on search query
 
  const filteredItems = search.trim() === '' ? items : items.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
     
      
      <Board
        items={filteredItems}
        cartItems={cartItems}
        setCartItems={setCartItems}
      />
    </div>
  );
}

export default Home;
