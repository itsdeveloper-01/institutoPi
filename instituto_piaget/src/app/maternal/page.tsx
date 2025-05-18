import { getNivelContent } from '@/lib/md';
import ReactMarkdown from 'react-markdown';

export default async function MaternalPage() {
  const { frontmatter, body } = await getNivelContent('maternal');
  return (
    <main className="prose mx-auto p-4">
      <h1>{frontmatter.title}</h1>
      <ReactMarkdown>{body}</ReactMarkdown>
    </main>
  );
}
