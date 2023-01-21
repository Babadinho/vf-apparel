import React from 'react';
import {
  Container,
  HeadingWrapper,
  CartHeading,
  CartNumber,
  CartProductWrapper,
  CartProductTitleWrapper,
  ProductTitle,
  ProductPrice,
  CartProductDetailsWrapper,
  ProductDescription,
  RemoveButton,
} from './styles';

const CartCard = () => {
  return (
    <Container>
      <HeadingWrapper>
        <CartHeading>Cart</CartHeading>
        <CartNumber>5</CartNumber>
      </HeadingWrapper>

      <CartProductWrapper>
        <CartProductTitleWrapper>
          <ProductTitle>Test Product</ProductTitle>
          <ProductPrice>$100</ProductPrice>
        </CartProductTitleWrapper>

        <CartProductDetailsWrapper>
          <ProductDescription>test description</ProductDescription>
          <RemoveButton>remove</RemoveButton>
        </CartProductDetailsWrapper>
      </CartProductWrapper>
    </Container>
  );
};

export default CartCard;
