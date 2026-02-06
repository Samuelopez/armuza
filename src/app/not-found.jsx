import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-main">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold gradient-text mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-main mb-4">Página no encontrada</h2>
        <p className="text-subtle mb-8">
          Lo sentimos, la página que buscas no existe.
        </p>
        <Link
          href="/"
          className="inline-block bg-gold-gradient text-primary px-8 py-3 rounded-xl font-semibold hover:scale-105 transition-transform duration-300"
        >
          Volver al Inicio
        </Link>
      </div>
    </div>
  );
}
