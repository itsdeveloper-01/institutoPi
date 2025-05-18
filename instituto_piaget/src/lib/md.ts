import fs from 'fs/promises';
import matter from 'gray-matter';

// Lee el contenido Markdown de un nivel (ej: 'maternal')
export async function getNivelContent(nivel: string) {
  const file = await fs.readFile(`content/niveles/${nivel}.md`, 'utf8');
  const { data, content } = matter(file);
  return { frontmatter: data, body: content };
}
