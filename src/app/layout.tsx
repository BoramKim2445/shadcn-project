import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import './globals.css';
import Header from '@/components/common/Header';
import SideNav from '@/components/common/SideNav';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.className} bg-gray-white`}>
        <div className='m-0 box-border h-screen w-screen bg-gray-200 p-0'>
          {children}
        </div>
      </body>
    </html>
  );
}
