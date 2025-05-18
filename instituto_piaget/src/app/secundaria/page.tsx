import { getNivelContent } from '@/lib/md';
import ReactMarkdown from 'react-markdown';

export default async function SecundariaPage() {
  const { frontmatter, body } = await getNivelContent('secundaria');
  return (
    <main className="prose mx-auto p-4">
      <h1>{frontmatter.title}</h1>
      <ReactMarkdown>{body}</ReactMarkdown>
    </main>
  );
}
