import styled from 'styled-components';
import { PageText as NavText } from '../../public/styles/Helpers/PageText';
import { ItemWrapper as NavItemWrapper } from '../../public/styles/Helpers/ItemWrapper';

export const Container = styled(NavItemWrapper)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60.8px;
  color: #131a22;
  background-color: #ffffff;
  box-shadow: 0 3px 5px -3px gray;
  padding: 0 5rem;

  &.navFixed {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
  }

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

export const Logo = styled.a`
  width: 7em;
  text-align: center;
  color: #ffffff;
  background-color: #9b59b6;
  border: 3px solid #494848;
  border-radius: 4rem;
  padding: 0.3rem 0.4rem;
  cursor: pointer;
  text-decoration: none;
  transition: all;
  transition-duration: 1s;

  &:hover {
    background-color: #ffffff;
    color: #494848;
    border: 3px solid #9b59b6;
  }
`;

export const CartWrapper = styled(NavItemWrapper)`
  position: relative;
  display: flex;
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : 'row'};
  align-items: ${(props) => (props.alignItems ? props.alignItems : 'center')};
`;

export const CartBag = styled.span`
  font-size: 1.5rem;
`;

export const CartTotal = styled(NavText)`
  color: ${(props) => (props.color ? props.color : '#2c2b2b')};
  font-size: ${(props) => (props.fontSize ? props.fontSize : '1em')};
  font-weight: bold;
  margin-right: 0.4rem;
`;

export const CartCount = styled.span`
  position: absolute;
  right: -0.6rem;
  top: -0.1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.7rem;
  height: 1.1rem;
  width: 1.1rem;
  background-color: #9b59b6;
  border-radius: 50%;
  color: #ffffff;
  margin-left: 0.5rem;
`;
