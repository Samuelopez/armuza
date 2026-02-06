'use client';

import CatalogPage from '@/components/CatalogContent';
import { motion } from 'framer-motion';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function CatalogoContent() {
  const searchParams = useSearchParams();
  const servicioInicial = searchParams.get('servicio');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <CatalogPage servicioInicial={servicioInicial} />
    </motion.div>
  );
}

export default function Catalogo() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-main" />}>
      <CatalogoContent />
    </Suspense>
  );
}
