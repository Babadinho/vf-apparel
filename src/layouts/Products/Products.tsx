import React, { useState, useEffect } from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import { Container, ProductWrapper } from './styles';
import { getProducts } from '../../services/product';
import ProductsFilter from '../../components/ProductsFilter/ProductsFilter';
import { useQuery } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../store/reducers/cartReducer';
import ProductData from '../../interfaces/ProductData';
import { setData } from '../../store/reducers/productsReducer';
import RootState from '../../interfaces/ProductData';

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products.data); // access cart state from the store

  // fetch and cache data using react query
  const { data, status, isLoading } = useQuery<ProductData[]>(
    'products',
    getProducts,
    {
      cacheTime: 3600000,
    }
  );

  // dispatch products data to redux store
  if (status === 'success') {
    dispatch(setData(data));
  }

  return (
    <ProductWrapper>
      <ProductsFilter />
      {isLoading && <Container>Fetching Data....</Container>}
      {status === 'error' && <Container>Error Fetching Data....</Container>}
      <Container>
        {status === 'success' &&
          products.map((product) => {
            return (
              <ProductCard
                key={product.id}
                image={product.images[0].src}
                title={product.title}
                price={product.variants[0].price}
                addToCart={() => dispatch(addToCart(product))}
              />
            );
          })}
      </Container>
    </ProductWrapper>
  );
};

export default Products;
