// src/lib/md.ts
import fs from 'fs/promises';
import matter from 'gray-matter';

export async function getNivelContent(nivel: string) {
  const file = await fs.readFile(`content/niveles/${nivel}.md`, 'utf8');
  const { data, content } = matter(file);
  return { frontmatter: data, body: content };
}
