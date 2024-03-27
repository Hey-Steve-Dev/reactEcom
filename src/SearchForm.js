import React from 'react'
import { FaSearch } from 'react-icons/fa';

const SearchForm = ({search, setSearch}) => {

    const handleSubmit = () => {

    }
  return (
    
    <form className='searchForm' onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="search"></label>
      <input
        className='searchField'
        type="text"
        id="search"
        role="searchbox"
        placeholder={"search"}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
    
  )
  
}

export default SearchForm