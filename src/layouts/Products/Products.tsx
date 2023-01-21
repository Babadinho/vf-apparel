import React, { useState, useEffect } from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import { Container, ProductWrapper } from './styles';
import { getProducts } from '../../services/product';
import ProductsFilter from '../../components/ProductsFilter/ProductsFilter';
import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import { setData } from '../../store/reducers/products';

//define interface for fetched data
interface ProductData {
  id: number;
  title: string;
  images: {
    src: string;
  }[];
  variants: {
    price: string;
  }[];
}

const Products = () => {
  const dispatch = useDispatch();

  // fetch and cache data using react query
  const { data, status, isLoading } = useQuery<ProductData[]>(
    'products',
    getProducts,
    {
      onSuccess: (data) => {
        dispatch(setData(data));
      },
    }
  );

  return (
    <ProductWrapper>
      <ProductsFilter />
      {isLoading && <Container>Fetching Data....</Container>}
      {status === 'error' && <Container>Error Fetching Data....</Container>}
      <Container>
        {status === 'success' &&
          data.map((product) => {
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
    </ProductWrapper>
  );
};

export default Products;
