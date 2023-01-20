import React from 'react';
import { Container, Logo, CartWrapper, CartTotal, CartNumber } from './styles';

const Navbar = () => {
  return (
    <>
      <Container>
        <Logo href='/'>VF Apparel</Logo>
        <CartWrapper>
          <CartTotal>105</CartTotal>
          <CartNumber>5</CartNumber>
        </CartWrapper>
      </Container>
    </>
  );
};

export default Navbar;
