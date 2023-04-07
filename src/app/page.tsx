import Link from 'next/link';

export default function Home(): JSX.Element {
  return (
    <section>
      <h1>home</h1>
      <h2>
        <Link href="/users">users</Link>
      </h2>
      <h2>
        <Link href="/products">products</Link>
      </h2>
    </section>
  );
}
