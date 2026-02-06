import './globals.css';
import { Providers } from './providers';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'ARMUZA | Remodelación y Diseño de Interiores',
  description: 'Expertos en remodelación, carpintería de diseño, herrería arquitectónica, tablaroca e impermeabilización. Transformamos tus espacios con calidad mundial.',
  keywords: 'remodelación, carpintería, herrería, tablaroca, impermeabilización, diseño de interiores, muebles personalizados',
  openGraph: {
    title: 'ARMUZA | Remodelación y Diseño de Interiores',
    description: 'Expertos en remodelación, carpintería de diseño, herrería arquitectónica, tablaroca e impermeabilización.',
    type: 'website',
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
        </Providers>
      </body>
    </html>
  );
}
