'use client';

import ProductsContent from '@/components/ProductsContent';
import { motion } from 'framer-motion';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function ProductosPageContent() {
  const searchParams = useSearchParams();
  const productoInicial = searchParams.get('producto');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <ProductsContent productoInicial={productoInicial} />
    </motion.div>
  );
}

export default function Productos() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-main" />}>
      <ProductosPageContent />
    </Suspense>
  );
}
