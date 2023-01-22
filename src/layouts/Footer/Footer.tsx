import React from 'react';
import { Container, Text, Link } from './styles';

const Footer = () => {
  return (
    <Container>
      <Text>VF Apparel © 2022. All Rights Reserved</Text>
      <Text>
        Built by <Link>Donald Iloekwe</Link>
      </Text>
    </Container>
  );
};

export default Footer;
