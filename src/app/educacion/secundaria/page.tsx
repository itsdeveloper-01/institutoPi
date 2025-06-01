// src/app/educacion/secundaria/page.tsx
import { getNivelContent } from '@/lib/md';
import ReactMarkdown from 'react-markdown';
import type { Metadata } from 'next';
import styles from './secundaria.module.css'; // opcional

export const metadata: Metadata = {
  title: 'Nivel Secundaria',
  description: 'Detalles del nivel Secundaria',
};

export default async function SecundariaPage() {
  const { frontmatter, body } = await getNivelContent('secundaria');

  return (
    <main className={`${styles.container} mx-auto p-6`}>
      <header className={`${styles.header} text-center mb-8`}>
        <h1 className="text-4xl font-bold text-red-700">{frontmatter.title}</h1>
        <p className="mt-2 text-gray-600">{frontmatter.description}</p>
      </header>

      <section className="prose mx-auto mb-12">
        <ReactMarkdown>{body}</ReactMarkdown>
      </section>

      <section className="bg-red-50 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-red-800 mb-4">Programas Extracurriculares</h2>
        <ul className="list-disc pl-5 text-gray-700">
          <li>Club de robótica y tecnología.</li>
          <li>Orquesta y banda de música.</li>
          <li>Programa de intercambio cultural.</li>
        </ul>
      </section>
    </main>
  );
}
