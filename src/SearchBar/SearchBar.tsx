import React from 'react';

interface SearchBarProps {
  onSearch: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };

  return <input type="text" placeholder="Tìm kiếm danh bạ..." onChange={handleSearchChange} />;
};

export default SearchBar;
