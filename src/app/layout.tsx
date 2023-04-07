import { Poppins } from 'next/font/google';
import Footer from './components/Footer';
import Header from './components/Header';
import './globals.css';

const poppings = Poppins({ weight: ['400', '700'], subsets: ['latin'] });

export const metadata = {
  title: 'Next Marketplace',
  description: 'Marketplace - next app'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body
        className={`${poppings.className} flex h-screen flex-col justify-between`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
