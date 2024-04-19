import React from 'react';
import { useRouter } from 'next/router';
import Product from './components/product';

function ProductSale() {
  const router = useRouter();
  const { id} = router.query;

  return (
    <div>
      <Product id = {id} />
    </div>
  );
}

export default ProductSale;
