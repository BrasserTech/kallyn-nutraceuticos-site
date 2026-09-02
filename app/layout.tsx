import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import './extras.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'], 
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL ?? 'http://localhost:5173'),
  title: 'Kallyn Nutracêuticos | Ciência que transforma saúde',
  description: 'Soluções nutracêuticas que unem ciência, natureza e tecnologia para promover saúde e bem-estar.',
  openGraph: {
    title: 'Kallyn Nutracêuticos',
    description: 'Ciência que transforma saúde.',
    images: ['/og.png'],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kallyn Nutracêuticos',
    description: 'Ciência que transforma saúde.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
