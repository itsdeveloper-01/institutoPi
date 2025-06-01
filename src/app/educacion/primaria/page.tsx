// src/app/educacion/primaria/page.tsx
import { getNivelContent } from '@/lib/md';
import ReactMarkdown from 'react-markdown';
import type { Metadata } from 'next';
import styles from './primaria.module.css'; // opcional

export const metadata: Metadata = {
  title: 'Nivel Primaria',
  description: 'Información del nivel Primaria',
};

export default async function PrimariaPage() {
  const { frontmatter, body } = await getNivelContent('primaria');

  return (
    <main className={`${styles.container} mx-auto p-6`}>
      <header className={`${styles.header} text-center mb-8`}>
        <h1 className="text-4xl font-bold text-yellow-700">{frontmatter.title}</h1>
        <p className="mt-2 text-gray-600">{frontmatter.description}</p>
      </header>

      <section className="prose mx-auto mb-12">
        <ReactMarkdown>{body}</ReactMarkdown>
      </section>

      <section className="bg-yellow-50 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-yellow-800 mb-4">Proyectos y Talleres</h2>
        <ul className="list-disc pl-5 text-gray-700">
          <li>Proyectos de ciencias experimentales.</li>
          <li>Club de lectura y debate.</li>
          <li>Deportes y actividades culturales.</li>
        </ul>
      </section>
    </main>
  );
}
