'use client';

import { ThemeProvider } from '@/components/ThemeProvider';
import { Toaster } from '@/components/ui/toaster';

export function Providers({ children }) {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="armuza-ui-theme">
      {children}
      <Toaster />
    </ThemeProvider>
  );
}
