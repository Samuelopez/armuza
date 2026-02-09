'use client';

import { Suspense } from 'react';
import CheckoutContent from '@/components/CheckoutContent';

export default function CheckoutPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen pt-20 bg-main flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-highlight border-t-transparent rounded-full animate-spin" />
      </div>
    }>
      <CheckoutContent />
    </Suspense>
  );
}
