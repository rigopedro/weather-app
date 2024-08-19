import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderContainer>
      <h1>Previsão do Tempo</h1>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  background-color: #007bff;
  color: white;
  padding: 20px;
  text-align: center;
`;
