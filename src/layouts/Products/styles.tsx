import styled from 'styled-components';

export const ProductWrapper = styled.div`
  margin-top: 2rem;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2.5rem;
  grid-row: 1 / 3;
  border-top: 1px solid #e4e3e3;
  padding-top: 1.5rem;
`;
