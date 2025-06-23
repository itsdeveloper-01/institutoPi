import fs from "fs";
import path from "path";
import matter from "gray-matter";
import KinderClient from "./KinderClient";

async function getData() {
  const filePath = path.join(process.cwd(), "content/niveles/kinder.md");
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContent);

  return {
    title: data.title || "Kinder",
    areasDesarrollo: data.areasDesarrollo || [],
    actividadesDiarias: data.actividadesDiarias || [],
    habilidades: data.habilidades || [],
    body: content, // Markdown body completo
  };
}

export default async function KinderPage() {
  const content = await getData();
  return <KinderClient {...content} />;
}
