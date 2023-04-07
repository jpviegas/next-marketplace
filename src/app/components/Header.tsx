import Link from 'next/link';

export default function Header(): JSX.Element {
  return (
    <header>
      <nav>
        <ul className="flex items-center justify-evenly">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/signup">Sign Up</Link>
          </li>
          <li>
            <Link href="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
