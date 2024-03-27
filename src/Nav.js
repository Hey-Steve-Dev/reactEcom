import React from 'react';
import { Link } from 'react-router-dom';
import CartBadge from './CartBadge';
import { FaShoppingBasket } from 'react-icons/fa';
import SearchForm from './SearchForm';

const Nav = ({cartItems, search, setSearch}) => {

 

  return (
    <>
    <nav className="Nav">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/cart"> <FaShoppingBasket /></Link></li>
        <CartBadge  cartItems={cartItems} />
        
        
      </ul>
      <SearchForm search={search} setSearch={setSearch} />
    </nav>
    
    </>
  );
}

export default Nav;

