import React from "react";
import styled from "styled-components";
const Footer = () => {
  return (
    <FooterContainer>
      <div>Copyright © {new Date().getFullYear()} MyNguyen</div>
    </FooterContainer>
  );
};

const FooterContainer = styled.section`
  width: 100vw;
  height: 5.8rem;
  background-color: #0a0416;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    font-size: 1.8rem;
    font-weight: 400;
  }
`;
export default Footer;
