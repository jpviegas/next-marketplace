import axios from 'axios';
import Link from 'next/link';

type Products = {
  _id: string;
  product: string;
  quantity: number;
};

async function getProducts() {
  try {
    const { data } = await axios.get<Products[]>(
      'http://localhost:8080/products/',
      {
        headers: {
          Accept: 'application/json'
        }
      }
    );

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.message;
    } else {
      return 'An unexpected error occurred';
    }
  }
}

export default async function Products() {
  const data = await getProducts();

  return (
    <section>
      <h2>
        <Link href={'/products/register'}>REGISTER PRODUCT</Link>
      </h2>
      <h1>PRODUTOS</h1>
      {data.map((product) => (
        <p key={product._id}>{product.product}</p>
      ))}
    </section>
  );
}
