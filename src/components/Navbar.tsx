
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'Maternal', href: '/educacion/maternal' },
  { label: 'Kinder', href: '/educacion/kinder' },
  { label: 'Primaria', href: '/educacion/primaria' },
  { label: 'Secundaria', href: '/educacion/secundaria' },
  { label: 'Preparatoria', href: '/educacion/preparatoria' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-40">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          <span>Instituto Piaget</span>
        </Link>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-700 focus:outline-none"
          aria-label="Abrir menú"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

        <div className="hidden md:flex space-x-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white px-4 pb-4 shadow">
          <ul className="space-y-2">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block text-gray-700 hover:text-blue-600 transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
