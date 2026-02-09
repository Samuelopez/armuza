'use client';

import ProductDetail from '@/components/ProductDetail';
import { motion } from 'framer-motion';
import { useParams } from 'next/navigation';

export default function ProductPage() {
  const params = useParams();
  const productId = params.id;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <ProductDetail productId={productId} />
    </motion.div>
  );
}
