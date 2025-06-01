// src/app/educacion/preparatoria/page.tsx
import { getNivelContent } from '@/lib/md';
import ReactMarkdown from 'react-markdown';
import type { Metadata } from 'next';
import styles from './preparatoria.module.css'; // opcional

export const metadata: Metadata = {
  title: 'Nivel Preparatoria',
  description: 'Información del nivel Preparatoria',
};

export default async function PreparatoriaPage() {
  const { frontmatter, body } = await getNivelContent('preparatoria');

  return (
    <main className={`${styles.container} mx-auto p-6`}>
      <header className={`${styles.header} text-center mb-8`}>
        <h1 className="text-4xl font-bold text-purple-700">{frontmatter.title}</h1>
        <p className="mt-2 text-gray-600">{frontmatter.description}</p>
      </header>

      <section className="prose mx-auto mb-12">
        <ReactMarkdown>{body}</ReactMarkdown>
      </section>

      <section className="bg-purple-50 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-purple-800 mb-4">Orientación Universitaria</h2>
        <ul className="list-disc pl-5 text-gray-700">
          <li>Talleres de preparación para exámenes.</li>
          <li>Charlas con universidades aliadas.</li>
          <li>Asesoría de becas y convenios.</li>
        </ul>
      </section>
    </main>
  );
}
