import React, { ReactNode } from 'react';
import { IBM_Plex_Mono, Arimo } from 'next/font/google';
import './globals.css';

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  variable: '--font-ibm-plex-mono',
});


const arimo = Arimo({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-arimo',
});

export const metadata = {
  title: 'Jeganathan',
  description: 'Fullstack developer!!',
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" style={{ overflowX: 'hidden' }}>
      <body
        className={`${ibmPlexMono.variable} ${arimo.variable} font-mono overflow-x-hidden m-0 p-0 scroll-smooth`}
      >
        {children}
      </body>
    </html>
  );
}


