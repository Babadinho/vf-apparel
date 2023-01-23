import styled from 'styled-components';
import { PageText as CartText } from '../../public/styles/Helpers/PageText';
import { ItemWrapper as CartItemWrapper } from '../../public/styles/Helpers/ItemWrapper';

// cart container to properly align cart main and cart summary
export const FlexContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #ffffff;
  padding: 1rem;
  margin-top: 2rem;
  margin-bottom: 1.5rem;
  border-top: 5px solid #9b59b6;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  width: 330px;
  height: 500px;
  grid-column: 3 / -1;
`;

// main container to hold cart heading and products
export const Container = styled.div`
  overflow-y: auto;
  margin-top: 2.3rem;
`;

// cart heading
export const HeadingWrapper = styled(CartItemWrapper)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0.5rem 0 1.2rem 0;
  position: absolute;
  top: 0.5rem;
`;

export const CartHeading = styled(CartText)`
  color: ${(props) => (props.color ? props.color : '#494848')};
  font-size: ${(props) => (props.fontSize ? props.fontSize : '1.2rem')};
  text-transform: uppercase;
  font-weight: bold;
`;

export const CartNumber = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  height: 1.4rem;
  width: 1.4rem;
  background-color: #9b59b6;
  border-radius: 50%;
  color: #ffffff;
  margin-left: 0.5rem;
`;

// cart products including title, description, price, quantity and remove button
export const CartProductWrapper = styled(CartItemWrapper)`
  padding: 0.8rem 0.5rem;
  border-top: 1px solid #e4e3e3;
  border-bottom: 1px solid #e4e3e3;
`;

export const CartProductTitleWrapper = styled(CartItemWrapper)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProductTitle = styled(CartText)`
  color: ${(props) => (props.color ? props.color : '#494848')};
  font-size: ${(props) => (props.fontSize ? props.fontSize : '0.9rem')};
  font-weight: bold;
  word-wrap: break-word;
  max-width: 70%;
  text-transform: uppercase;
`;
export const ProductPrice = styled(CartText)`
  color: ${(props) => (props.color ? props.color : '#494848')};
  font-size: ${(props) => (props.fontSize ? props.fontSize : '0.9rem')};
  font-weight: 500;
`;

export const CartProductDetailsWrapper = styled(CartItemWrapper)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.5rem;
`;

export const ProductDescription = styled(CartText)`
  color: ${(props) => (props.color ? props.color : '#908d8d')};
  font-size: ${(props) => (props.fontSize ? props.fontSize : '0.7rem')};
  font-weight: bold;
  word-wrap: break-word;
  max-width: 70%;
  text-transform: uppercase;
`;

export const ProductQuantity = styled(CartText)`
  color: ${(props) => (props.color ? props.color : '#7b7878')};
  font-size: ${(props) => (props.fontSize ? props.fontSize : '0.7rem')};
  font-weight: bold;
  word-wrap: break-word;
  margin-right: 2rem;
`;

export const RemoveButton = styled.button`
  background-color: #e4e5e9;
  padding: 0.4rem 0.4rem;
  font-size: 9px;
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
  line-height: 1.5;
  letter-spacing: 0.1em;
  border: none;
  color: #494848;
  cursor: pointer;
  transition: background-color;
  transition-duration: 0.5s;

  &:hover {
    background-color: #504f4f;
    color: #ffffff;
  }
`;

// cart summary to show the total sum + taxes
export const CartSummaryWrapper = styled(CartItemWrapper)`
  background-color: #e3dede;
  padding: 0.8rem 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
`;

export const CartSummaryTextWrapper = styled(CartItemWrapper)`
  display: flex;
  flex-direction: column;
`;

export const CartSummaryTitle = styled(CartText)`
  color: ${(props) => (props.color ? props.color : '#494848')};
  font-size: ${(props) => (props.fontSize ? props.fontSize : '0.9rem')};
  font-weight: bold;
`;

export const CartSummaryDesc = styled(CartText)`
  color: ${(props) => (props.color ? props.color : '#858282')};
  font-size: ${(props) => (props.fontSize ? props.fontSize : '0.9rem')};
`;

export const CartSummaryTotal = styled(CartText)`
  color: ${(props) => (props.color ? props.color : '#494848')};
  font-size: ${(props) => (props.fontSize ? props.fontSize : '1.3rem')};
  font-weight: bold;
`;

export const EmptyCartMessage = styled(CartText)`
  color: ${(props) => (props.color ? props.color : '#858282')};
  font-size: ${(props) => (props.fontSize ? props.fontSize : '0.9rem')};
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
