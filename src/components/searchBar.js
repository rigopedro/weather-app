import React from 'react';
import styled from 'styled-components';

const SearchBar = ({ city, setCity, onSearch }) => {
  return (
    <SearchContainer>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Digite o nome da cidade"
      />
      <button onClick={onSearch}>Buscar</button>
    </SearchContainer>
  );
};

export default SearchBar;

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
  
  input {
    padding: 10px;
    font-size: 1em;
    border-radius: 4px;
    border: 1px solid #ddd;
    margin-right: 10px;
    width: 200px;
  }
  
  button {
    padding: 10px;
    font-size: 1em;
    border: none;
    border-radius: 4px;
    background-color: #007bff;
    color: white;
    cursor: pointer;
    
    &:hover {
      background-color: #0056b3;
    }
  }
`;
