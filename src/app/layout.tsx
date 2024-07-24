import type { Metadata } from "next";
import localFont from 'next/font/local';
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Web3js - The API to connect to Ethereum and any EVM Chain",
  description: "web3js - the longest-running EVM API",
  icons: {
    icon: './favicon.ico',
  },
  keywords: [],
  twitter: {
    card: 'summary_large_image',
    title: 'Web3js',
    description: 'web3js - the longest-running EVM API',
    images: ['https://imagedelivery.net/qdx9xDn6TxxInQGWsuRsVg/f3f16fdc-3d9c-44af-eda3-49865a286f00'],
  },
   openGraph: {
    title: 'web3js',
    description: 'web3js - the longest-running EVM API',
    url: 'https://web3js.org',
    siteName: 'web3js',
    images: [
      {
        url: 'https://imagedelivery.net/qdx9xDn6TxxInQGWsuRsVg/f3f16fdc-3d9c-44af-eda3-49865a286f00',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
   robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
     },
  },
  
  metadataBase: new URL('https://web3js.org'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
    },
  },
};


const neueMontreal = localFont({
  weight: '400',
  src: [
    {
      path: './fonts/NeueMontreal-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/NeueMontreal-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/NeueMontreal-Medium.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-nm',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script  defer data-domain="web3js.org" src="https://plausible.io/js/script.js"/>
      <body className={`${neueMontreal.variable}`}>{children}</body>
    </html>
  );
}
