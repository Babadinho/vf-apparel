import styled from 'styled-components';
import { PageText as FooterText } from '../../public/styles/Helpers/PageText';
import { ItemWrapper as NavItemWrapper } from '../../public/styles/Helpers/ItemWrapper';

export const Container = styled(NavItemWrapper)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60.8px;
  color: #131a22;
  background-color: #ffffff;
  box-shadow: 0 3px 2px 3px gray;
  padding: 0 5rem;
`;

export const Text = styled(FooterText)`
  color: ${(props) => (props.color ? props.color : '#2c2b2b')};
  font-size: ${(props) => (props.fontSize ? props.fontSize : '0.9em')};
  font-weight: 500;
  margin-right: 0.4rem;
`;

export const Link = styled.a`
  text-decoration: none;
  color: #721597;
  font-weight: bold;
  cursor: pointer;
`;
