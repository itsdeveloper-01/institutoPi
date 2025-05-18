
import './globals.css';
import Navbar from '@/components/Navbar';
import FloatingButtons from '@/components/FloatingButtons';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';

//este layout.tsx es el layout por defecto para todas las páginas de la aplicación
export const metadata: Metadata = {
  title: 'Instituto Piaget',
  description: 'Portal educativo',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className="font-sans antialiased bg-white text-neutral-900">
        <Navbar />
        <main className="pt-20">{children}</main>
        <FloatingButtons />
      </body>
    </html>
  );
}
