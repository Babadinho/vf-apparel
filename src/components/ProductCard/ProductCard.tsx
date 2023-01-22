import React from 'react';
import {
  Container,
  ImageWrapper,
  ProductImage,
  TextWrapper,
  ProductTitle,
  ProductPrice,
  ProductActions,
  AddToCart,
  QuickView,
} from './styles';

interface Props {
  image: string;
  title: string;
  price: string;
  addToCart?: (product: any) => void;
  quickView?: (product: any) => void;
}

const ProductCard = ({ image, title, price, addToCart, quickView }: Props) => {
  return (
    <Container>
      <ImageWrapper>
        <ProductImage src={image} />
      </ImageWrapper>

      <TextWrapper>
        <ProductTitle>{title}</ProductTitle>
        <ProductPrice>{price}</ProductPrice>
      </TextWrapper>
      <ProductActions>
        <AddToCart onClick={addToCart}>Add to Cart</AddToCart>{' '}
        <QuickView quickView={quickView}>Quick View</QuickView>
      </ProductActions>
    </Container>
  );
};

export default ProductCard;
