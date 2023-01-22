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
  const [filterType, setFilterType] = useState<string>('a-z');
  const products = useSelector((state: RootState) => state.products.data); // access cart state from the store

  // fetch and cache data using react query
  const { data, status, isLoading } = useQuery(
    ['products', filterType],
    getProducts,
    {
      initialData: [],
    }
  );

  // function to filter products
  const filterProducts = (
    data: ProductData[] | undefined,
    filterType: string
  ) => {
    if (!data || !Array.isArray(data)) return;
    if (filterType === 'a-z') {
      return [...data].sort((a, b) => a.title.localeCompare(b.title));
    } else if (filterType === 'z-a') {
      return [...data].sort((a, b) => b.title.localeCompare(a.title));
    } else if (filterType === 'highest') {
      return [...data].sort(
        (a, b) =>
          parseFloat(b.variants[0].price) - parseFloat(a.variants[0].price)
      );
    } else if (filterType === 'lowest') {
      return [...data].sort(
        (a, b) =>
          parseFloat(a.variants[0].price) - parseFloat(b.variants[0].price)
      );
    } else {
      return data;
    }
  };

  // useEffect hook to load products based on filtered parameter
  useEffect(() => {
    if (status === 'success' && data) {
      const filteredData = filterProducts(data || [], filterType);
      dispatch(setData(filteredData && filteredData));
    }
  }, [filterType, data, dispatch]);

  return (
    <ProductWrapper>
      <ProductsFilter setFilterType={setFilterType} />
      {isLoading && <Container>Fetching Data....</Container>}
      {status === 'error' && <Container>Error Fetching Data....</Container>}
      <Container>
        {products &&
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
