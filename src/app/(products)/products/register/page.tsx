'use client';

import axios from 'axios';
import { useState } from 'react';

type Products = {
  product: string;
  quantity: string;
};

async function postData(data: Products) {
  await axios({
    method: 'POST',
    url: 'http://localhost:8080/products/register/',
    data: data
  });
}

export default function Products(): JSX.Element {
  const [product, setProduct] = useState('');
  const [quantity, setQuantity] = useState('');

  const data = { product, quantity };
  const submitProduct = postData(data);

  return (
    <section>
      <form action="" method="post" onSubmit={() => submitProduct}>
        <label>
          Product:
          <input
            type="text"
            name="product"
            id="product"
            value={product}
            onChange={(e) => setProduct(e.target.value)}
          />
        </label>
        <label>
          Quantity:
          <input
            type="text"
            name="quantity"
            id="quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </label>
        <button onSubmit={() => submitProduct}>Register</button>
      </form>
    </section>
  );
}
