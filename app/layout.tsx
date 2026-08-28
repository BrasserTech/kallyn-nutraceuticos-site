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
  title: 'Kallyn Nutraceuticos | Ciencia que transforma saude',
  description: 'Solucoes nutraceuticas que unem ciencia, natureza e tecnologia para promover saude e bem-estar.',
  openGraph: {
    title: 'Kallyn Nutraceuticos',
    description: 'Ciencia que transforma saude.',
    images: ['/og.png'],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kallyn Nutraceuticos',
    description: 'Ciencia que transforma saude.',
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
