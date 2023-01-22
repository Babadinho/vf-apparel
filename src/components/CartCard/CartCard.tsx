import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RootState from '../../interfaces/ProductData';
import { removeFromCart } from '../../store/reducers/cartReducer';
import {
  Container,
  FlexContainer,
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
  CartSummaryWrapper,
  CartSummaryTextWrapper,
  CartSummaryTitle,
  CartSummaryDesc,
  CartSummaryTotal,
} from './styles';

const CartCard = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart); // access cart state from the store

  const [items, setItems] = useState(cart.items); // store cart items in state

  useEffect(() => {
    setItems(cart.items);
  }, [cart.items]); // listen for updates in cart items

  return (
    <FlexContainer>
      <Container>
        <HeadingWrapper>
          <CartHeading>Cart</CartHeading>
          <CartNumber>{cart.itemCount}</CartNumber>
        </HeadingWrapper>
        {items.map((item) => {
          return (
            <CartProductWrapper key={item.id}>
              <CartProductTitleWrapper>
                <ProductTitle>{item.title}</ProductTitle>
                <ProductPrice>£{item.variants[0].price}</ProductPrice>
              </CartProductTitleWrapper>

              <CartProductDetailsWrapper>
                <ProductDescription>
                  {item.variants[0].title}
                </ProductDescription>
                <RemoveButton onClick={() => dispatch(removeFromCart(item))}>
                  remove
                </RemoveButton>
              </CartProductDetailsWrapper>
            </CartProductWrapper>
          );
        })}
      </Container>
      <CartSummaryWrapper>
        <CartSummaryTextWrapper>
          <CartSummaryTitle>Total</CartSummaryTitle>
          <CartSummaryDesc>Inc. £0 in taxes</CartSummaryDesc>
        </CartSummaryTextWrapper>
        <CartSummaryTotal>£{cart.totalCost}</CartSummaryTotal>
      </CartSummaryWrapper>
    </FlexContainer>
  );
};

export default CartCard;
