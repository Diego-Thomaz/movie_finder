import React from 'react';
import { Input, Button } from 'reactstrap/'
import './search-bar.css'

type SearchBarProps = {
  search: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearchSubmit: (e: React.FormEvent) => void;
}

const SearchBar = ({search, onSearchChange, onSearchSubmit}: SearchBarProps) => {
  return (
    <div>
      <form onSubmit={onSearchSubmit}>
        <Input type="text"
               className="search-input"
               placeholder="Digite o nome do filme"
               value={search}
               onChange={onSearchChange} />
        <Button type="submit" className='search-button'>Buscar</Button>
      </form>
    </div>
  )
}

export default SearchBar;
