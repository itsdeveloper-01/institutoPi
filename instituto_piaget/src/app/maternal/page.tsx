/* Muestra contenido gestionado por Decap CMS */
import MaternalView from '@/components/views/MaternalView';

export default async function MaternalPage() {
  //  Más adelante inyectaremos data MD/JSON desde `getMaternalContent()`
  return <MaternalView />;
}
