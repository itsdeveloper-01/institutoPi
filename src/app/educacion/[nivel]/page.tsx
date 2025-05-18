
import { getNivelContent } from '@/lib/md';
import ReactMarkdown from 'react-markdown';
import type { Metadata } from 'next';

type NivelParams = {
  params: { nivel: string };
};

export async function generateStaticParams() {
  const niveles = ['maternal', 'kinder', 'primaria', 'secundaria', 'preparatoria'];
  return niveles.map(nivel => ({ nivel }));
}

export async function generateMetadata({ params }: NivelParams): Promise<Metadata> {
  return {
    title: `Nivel ${params.nivel}`,
  };
}

export default async function NivelPage({ params }: NivelParams) {
  const { frontmatter, body } = await getNivelContent(params.nivel);

  return (
    <main className="prose mx-auto p-6">
      <h1>{frontmatter.title}</h1>
      <p>{frontmatter.description}</p>
      <ReactMarkdown>{body}</ReactMarkdown>
    </main>
  );
}
