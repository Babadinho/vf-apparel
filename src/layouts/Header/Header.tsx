import React from 'react';
import { Container, HeroImage, Overlay, HeroText } from './styles';
const Bg = require('../../public/images/bg.jpg');

const Header = () => {
  return (
    <Container>
      <Overlay />
      <HeroImage src={Bg}></HeroImage>
      <HeroText>VF Apparel Shop</HeroText>
    </Container>
  );
};

export default Header;
