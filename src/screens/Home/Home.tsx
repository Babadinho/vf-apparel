import React from 'react';
import Header from '../../layouts/Header/Header';
import Products from '../../layouts/Products/Products';
import CartCard from '../../components/CartCard/CartCard';
import { Container } from './styles';

const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <Products />
        <CartCard />
      </Container>
    </>
  );
};

export default Home;
