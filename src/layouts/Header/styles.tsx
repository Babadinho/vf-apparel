import styled from 'styled-components';
import { PageText as HeaderText } from '../../public/styles/Helpers/PageText';

export const Container = styled.div`
  position: relative;
  height: 300px;
  width: 100vw;
  background-color: #ffffff;
`;

export const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  max-height: 300px;
  background-color: #ffffff;
  object-fit: cover;
`;

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: #9b59b6;
  opacity: 0.3;
  top: 0;
`;

export const HeroText = styled(HeaderText)`
  color: ${(props) => (props.color ? props.color : '#ffffff')};
  font-size: ${(props) => (props.fontSize ? props.fontSize : '3em')};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 1;
`;
