// src/app/educacion/maternal/page.tsx
import { getNivelContent } from '@/lib/md';
import ReactMarkdown from 'react-markdown';
import type { Metadata } from 'next';
import styles from './maternal.module.css'; // Vista modular (opcional), puedes quitar si no usas modules

export const metadata: Metadata = {
  title: 'Nivel Maternal',
  description: 'Información detallada del nivel Maternal',
};

export default async function MaternalPage() {
  // Si usas Markdown para editar en Decap:
  const { frontmatter, body } = await getNivelContent('maternal');

  return (
    <main className={`${styles.container} mx-auto p-6`}>
      <header className={`${styles.header} text-center mb-8`}>
        <h1 className="text-4xl font-bold text-indigo-700">{frontmatter.title}</h1>
        <p className="mt-2 text-gray-600">{frontmatter.description}</p>
      </header>

      {/* Contenido Markdown */}
      <section className="prose mx-auto mb-12">
        <ReactMarkdown>{body}</ReactMarkdown>
      </section>

      {/* Sección adicional de ejemplo */}
      <section className="bg-blue-50 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">Beneficios de Maternal</h2>
        <ul className="list-disc pl-5 text-gray-700">
          <li>Desarrollo motor y cognitivo.</li>
          <li>Actividades lúdicas y sensoriales.</li>
          <li>Apoyo emocional y social.</li>
        </ul>
      </section>
    </main>
  );
}
