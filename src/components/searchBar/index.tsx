import React from 'react';

type SearchBarProps = {
  search: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearchSubmit: (e: React.FormEvent) => void;
}

const SearchBar = ({search, onSearchChange, onSearchSubmit}: SearchBarProps) => {
  return (
    <div>
      <form onSubmit={onSearchSubmit}>
        <input type="text"
               placeholder="Digite o nome do filme"
               style={{ width: "400px", padding: "5px", marginRight: "10px", marginBottom: "10px" }}
               value={search}
               onChange={onSearchChange} />
        <button type="submit" style={{ backgroundColor: "gray", marginBottom: "10px" }}>Buscar</button>
      </form>
    </div>
  )
}

export default SearchBar;
