import fs from "fs";
import path from "path";
import matter from "gray-matter";
// Importo el componente reutilizable para mostrar el contenido del nivel
import NivelClient from "@/components/NivelClient";

async function getData() {
  // Leo el archivo markdown correspondiente a este nivel
  const filePath = path.join(process.cwd(), "content/niveles/maternal.md");
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContent);

  // Devuelvo las props que usará el componente cliente
  return {
    title: data.title || "Maternal",
    areasDesarrollo: data.areasDesarrollo || [],
    actividadesDiarias: data.actividadesDiarias || [],
    habilidades: data.habilidades || [],
    body: content,
  };
}

export default async function Page() {
  const props = await getData();
  return <NivelClient {...props} />;
}
