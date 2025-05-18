import { getNivelContent } from '@/lib/md';
import ReactMarkdown from 'react-markdown';

export default async function KinderPage() {
  const { frontmatter, body } = await getNivelContent('kinder');
  return (
    <main className="prose mx-auto p-4">
      <h1>{frontmatter.title}</h1>
      <ReactMarkdown>{body}</ReactMarkdown>
    </main>
  );
}
