import './globals.css';
import { Providers } from './providers';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export const metadata = {
  title: 'ARMUZA | Remodelación y Diseño de Interiores',
  description: 'Expertos en remodelación, carpintería de diseño, herrería arquitectónica, tablaroca e impermeabilización. Transformamos tus espacios con calidad mundial.',
  keywords: 'remodelación, carpintería, herrería, tablaroca, impermeabilización, diseño de interiores, muebles personalizados',
  metadataBase: new URL('https://www.armuza.com'),
  openGraph: {
    title: 'ARMUZA | Remodelación y Diseño de Interiores',
    description: 'Expertos en remodelación, carpintería de diseño, herrería arquitectónica, tablaroca e impermeabilización.',
    url: 'https://www.armuza.com',
    siteName: 'ARMUZA',
    images: [
      {
        url: '/img/logometadata.png', // Crear imagen 1200x630 con logo y fondo #995944
        width: 1200,
        height: 630,
        alt: 'ARMUZA - Remodelación y Diseño de Interiores',
      },
    ],
    locale: 'es_MX',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ARMUZA | Remodelación y Diseño de Interiores',
    description: 'Expertos en remodelación, carpintería de diseño, herrería arquitectónica, tablaroca e impermeabilización.',
    images: ['/img/logometadata.png'],
  },
  themeColor: '#995944',
  icons: {
    icon: '/img/logo.png',
    apple: '/img/logo.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="min-h-screen bg-main text-main flex flex-col">
        <Providers>
          <Navbar />
          <main className="flex-grow pt-16">
            {children}
          </main>
          <Footer />
          <WhatsAppButton />
        </Providers>
      </body>
    </html>
  );
}
