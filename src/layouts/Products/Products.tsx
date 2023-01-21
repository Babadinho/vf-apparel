import React, { useState, useEffect } from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import { Container, ProductWrapper } from './styles';
import { getProducts } from '../../services/product';
import ProductsFilter from '../../components/ProductsFilter/ProductsFilter';

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
  const [products, setProducts] = useState<ProductData[]>([]);
  const [error, setError] = useState<string | null>(null);

  const loadProducts = async () => {
    try {
      const response = await getProducts();
      setProducts(response.data.products);
    } catch (err) {
      setError('Error loading products.');
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <ProductWrapper>
      <ProductsFilter />
      <Container>
        {Array.isArray(products) &&
          products.map((product) => {
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
