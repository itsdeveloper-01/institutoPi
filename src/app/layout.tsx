
import './globals.css';
import Navbar from '@/components/Navbar';
import FloatingButtons from '@/components/FloatingButtons';

export const metadata = {
  title: 'Instituto Piaget',
  description: 'Portal educativo',
};

export default function RootLayout({ children }) {
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
