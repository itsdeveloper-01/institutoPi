/* Maternal – Server Component
   Lee maternal.md y pasa los datos tipados a MaternalClient
----------------------------------------------------------------- */

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import MaternalClient, { MaternalProps } from './MaternalClient';

/* Helper: devuelve un objeto completamente tipado */
async function getMaternalData(): Promise<MaternalProps> {
  const filePath = path.join(process.cwd(), 'content/niveles/maternal.md');
  const raw = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(raw);

  /* Avisamos a TS que data sí cumple MaternalProps */
  return { ...(data as MaternalProps), body: content };
}

export default async function MaternalPage() {
  const data = await getMaternalData();
  return <MaternalClient {...data} />;
}
