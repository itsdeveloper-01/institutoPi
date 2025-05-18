import { getNivelContent } from '@/lib/md';
import ReactMarkdown from 'react-markdown';

export default async function MaternalPage() {
  const { frontmatter, body } = await getNivelContent('maternal');
  return (
    <main className="prose mx-auto p-6">
      <h1>{frontmatter.title}</h1>
      <p>{frontmatter.description}</p>
      <ReactMarkdown>{body}</ReactMarkdown>
    </main>
  );
}
