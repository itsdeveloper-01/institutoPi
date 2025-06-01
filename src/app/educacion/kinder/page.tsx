// src/app/educacion/kinder/page.tsx
import { getNivelContent } from '@/lib/md';
import ReactMarkdown from 'react-markdown';
import type { Metadata } from 'next';
import styles from './kinder.module.css'; // opcional

export const metadata: Metadata = {
  title: 'Nivel Kinder',
  description: 'Detalles del nivel Kinder',
};

export default async function KinderPage() {
  const { frontmatter, body } = await getNivelContent('kinder');

  return (
    <main className={`${styles.container} mx-auto p-6`}>
      <header className={`${styles.header} text-center mb-8`}>
        <h1 className="text-4xl font-bold text-green-700">{frontmatter.title}</h1>
        <p className="mt-2 text-gray-600">{frontmatter.description}</p>
      </header>

      <section className="prose mx-auto mb-12">
        <ReactMarkdown>{body}</ReactMarkdown>
      </section>

      <section className="bg-green-50 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-green-800 mb-4">Actividades Destacadas</h2>
        <ul className="list-disc pl-5 text-gray-700">
          <li>Juegos de colaboración.</li>
          <li>Inglés básico y habilidades sociales.</li>
          <li>Artística y motricidad fina.</li>
        </ul>
      </section>
    </main>
  );
}
