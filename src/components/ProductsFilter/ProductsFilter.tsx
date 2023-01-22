import React, { useState } from 'react';
import { Select, FilterWarpper } from './styles';

const ProductsFilter = ({ setFilterType }: any) => {
  return (
    <FilterWarpper>
      <Select onChange={(e) => setFilterType(e.target.value)}>
        <option value='a-z'>Title - A to Z</option>
        <option value='z-a'>Title - Z to A</option>
        <option value='highest'>Highest Price</option>
        <option value='lowest'>Lowest Price</option>
      </Select>
    </FilterWarpper>
  );
};

export default ProductsFilter;
