import React, { useState, useEffect } from 'react';
import ProductCard from '../../components/ProductCard.tsx/ProductCard';
import { Container } from './styles';
import { productData } from '../../components/Data';
import { getProducts } from '../../services/product';

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
  );
};

export default Products;
