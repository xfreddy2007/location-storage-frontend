import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/globals.scss';
import Navigation from '../container/Navigation';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Location Storage App',
  description: 'An app which can store searched locations in your page.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main className="mt-20">{children}</main>
      </body>
    </html>
  );
}
