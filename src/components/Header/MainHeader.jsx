import React from 'react'
import Header from './Header'
import Category from './Category'
import styled from "styled-components";

const HeaderLayout = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.08);
  z-index: 10;
`;

const MainHeader = () => {
  return (
    <HeaderLayout>
      <Header />
      <Category />
    </HeaderLayout>
  );
}

export default MainHeader