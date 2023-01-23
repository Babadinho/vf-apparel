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
  const [navScroll, setNavScroll] = useState<Boolean>(false);
  const cart = useSelector((state: RootState) => state.cart); // access cart state from the store

  // navbar scroll detect function to position nav fixed
  const positionNav = (): void => {
    if (window.scrollY >= 66) {
      setNavScroll(true);
    } else {
      setNavScroll(false);
    }
  };

  useEffect(() => {
    // adding the event when scrolling
    window.addEventListener('scroll', positionNav);
  }, [cart.itemCount]); // listen for updates in cart item store and update state

  return (
    <>
      <Container className={navScroll && 'navFixed'}>
        <Logo href='/'>VF Apparel</Logo>
        <CartWrapper>
          <CartTotal>£{cart.totalCost}</CartTotal>
          <CartBag>
            <MdOutlineShoppingBag />
          </CartBag>
          <CartCount>{cart.itemCount}</CartCount>
        </CartWrapper>
      </Container>
    </>
  );
};

export default Navbar;
