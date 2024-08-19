import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; 2024 Previsão do Tempo</p>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  background-color: #eceff1;
  text-align: center;
  padding: 10px;
  border-top: 1px solid #ddd;
`;
