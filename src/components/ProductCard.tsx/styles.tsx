import styled from 'styled-components';
import { PageText as ProductText } from '../../public/styles/Helpers/PageText';
import { ItemWrapper as ProductItemWrapper } from '../../public/styles/Helpers/ItemWrapper';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  width: 270px;
  background-color: #ffffff;
  padding: 1rem;
  margin-bottom: 1.5rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const ImageWrapper = styled(ProductItemWrapper)`
  display: flex;
  flex-grow: 1;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  background-color: #f0e9e9;
  padding: 1rem;
  width: 100%;
`;

export const ProductImage = styled.img`
  background-color: #ffffff;
  width: 100%;
  height: auto;
`;

export const TextWrapper = styled(ProductItemWrapper)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1.5rem 0 1.5rem 0;
  flex: 1;
`;

export const ProductTitle = styled(ProductText)`
  color: ${(props) => (props.color ? props.color : '#494848')};
  font-size: ${(props) => (props.fontSize ? props.fontSize : '0.95rem')};
  text-transform: uppercase;
  font-weight: bold;
  word-wrap: break-word;
  max-width: 70%;
`;
export const ProductPrice = styled(ProductText)`
  color: ${(props) => (props.color ? props.color : '#494848')};
  font-size: ${(props) => (props.fontSize ? props.fontSize : '1rem')};
  font-weight: 500;
`;

export const ProductActions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AddToCart = styled.a`
  background-color: #843da0;
  padding: 0.7rem 1.5rem;
  font-size: 11px;
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
  line-height: 1.5;
  letter-spacing: 0.1em;
  border: none;
  color: #fff;
  cursor: pointer;
  transition: background-color;
  transition-duration: 0.5s;

  &:hover {
    background-color: #721597;
  }
`;

export const QuickView = styled.a`
  background-color: #e4e5e9;
  padding: 0.7rem 1.5rem;
  font-size: 11px;
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
