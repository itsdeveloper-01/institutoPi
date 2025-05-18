import { Mail, Phone } from 'lucide-react';

const phoneNumber = '+525514186869';
const emailAddress = 'info@colegio.com';

export default function FloatingButtons() {
  return (
    <>
      {/* WhatsApp */}
      <a
        href={`https://wa.me/${phoneNumber}`}
        className="fixed right-4 bottom-20 p-3 rounded-full bg-green-500 text-white shadow-lg hover:scale-105"
        aria-label="WhatsApp"
      >
        <Phone size={24} />
      </a>
      {/* Correo */}
      <a
        href={`mailto:${emailAddress}`}
        className="fixed right-4 bottom-4 p-3 rounded-full bg-brand text-white shadow-lg hover:scale-105"
        aria-label="Enviar correo"
      >
        <Mail size={24} />
      </a>
    </>
  );
}
