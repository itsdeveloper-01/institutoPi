// Importa tipos de metadatos para la página
import type { Metadata } from "next";

// Importa las fuentes de Google y su configuración como variables CSS
import { Geist, Geist_Mono } from "next/font/google";

// Importa los estilos globales de Tailwind y tus estilos personalizados
import "./globals.css";

// Importa tu componente de botones flotantes (WhatsApp, Correo)
import FloatingButtons from '@/components/FloatingButtons';

// Configura las fuentes como variables CSS para usarlas en tu proyecto
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata global para SEO (puedes personalizarlo después)
export const metadata: Metadata = {
  title: "Instituto Piaget",
  description: "Portal educativo administrado con Decap CMS",
};

// RootLayout es el layout principal para todas las páginas
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`
          ${geistSans.variable} 
          ${geistMono.variable} 
          antialiased
        `}
      >
        {/* Renderiza el contenido de la página actual */}
        {children}

        {/* Renderiza los botones flotantes de WhatsApp y correo electrónico en todas las páginas */}
        <FloatingButtons />
      </body>
    </html>
  );
}
