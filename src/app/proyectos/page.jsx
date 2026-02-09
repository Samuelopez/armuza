'use client';

import ProjectsContent from '@/components/ProjectsContent';
import { motion } from 'framer-motion';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function ProjectsPageContent() {
  const searchParams = useSearchParams();
  const servicioInicial = searchParams.get('servicio');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <ProjectsContent servicioInicial={servicioInicial} />
    </motion.div>
  );
}

export default function Proyectos() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-main" />}>
      <ProjectsPageContent />
    </Suspense>
  );
}
