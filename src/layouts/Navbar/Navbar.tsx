import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import RootState from '../../interfaces/ProductData';
import {
  Container,
  Logo,
  CartWrapper,
  CartBag,
  CartTotal,
  CartCount,
} from './styles';
import { MdOutlineShoppingBag } from 'react-icons/md';

const Navbar = () => {
  const cart = useSelector((state: RootState) => state.cart); // access cart state from the store

  const [cartCount, setCartCount] = useState(cart.itemCount); // store cart items in state
  const [cartTotal, setCartTotal] = useState(cart.totalCost); // store cart total in state

  useEffect(() => {
    setCartCount(cart.itemCount);
    setCartTotal(cart.totalCost);
  }, [cart.itemCount]); // listen for updates in cart item store and update state

  return (
    <>
      <Container>
        <Logo href='/'>VF Apparel</Logo>
        <CartWrapper>
          <CartTotal>£{cartTotal}</CartTotal>
          <CartBag>
            <MdOutlineShoppingBag />
          </CartBag>
          <CartCount>{cartCount}</CartCount>
        </CartWrapper>
      </Container>
    </>
  );
};

export default Navbar;
