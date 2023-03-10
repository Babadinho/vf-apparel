import styled from 'styled-components';
import { ItemWrapper as HomeItemWrapper } from '../../public/styles/Helpers/ItemWrapper';

export const Container = styled(HomeItemWrapper)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 20px;
  grid-column-gap: 20px;
  padding: 0 5rem;
  margin-bottom: 7rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      'element2'
      'element1';
    grid-row-gap: 10px;
    grid-column-gap: 10px;
    padding: 0 1rem;
  }
`;
