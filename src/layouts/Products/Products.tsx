import React from 'react';
import ProductCard from '../../components/ProductCard.tsx/ProductCard';
import { Container } from './styles';
import { productData } from '../../components/Data';

const Products = () => {
  return (
    <Container>
      {productData.map((product) => {
        return (
          <ProductCard
            key={product.id}
            image={product.images[0].src}
            title={product.title}
            price={product.variants[0].price}
          />
        );
      })}
    </Container>
  );
};

export default Products;
