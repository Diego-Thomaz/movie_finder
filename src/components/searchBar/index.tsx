import React from 'react';
import { Input, Button } from 'reactstrap/'

type SearchBarProps = {
  search: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearchSubmit: (e: React.FormEvent) => void;
}

const SearchBar = ({search, onSearchChange, onSearchSubmit}: SearchBarProps) => {
  return (
    <div>
      <form onSubmit={onSearchSubmit}>
        <div className="d-flex">
          <Input type="text"
                placeholder="Digite o nome do filme"
                value={search}
                onChange={onSearchChange} />
          <Button type="submit" className="ms-2">Buscar</Button>
        </div>
      </form>
    </div>
  )
}

export default SearchBar;
