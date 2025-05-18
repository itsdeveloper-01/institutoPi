// public/admin/config.js
window.CMS.init({
  backend: {
    name: "github",
    repo: "itsdeveloper-01/institutoPi", // nombre del repo asi como aparece en github
    branch: "main", // branch del repo
    base_url: "/", // URL base del repo
    auth_endpoint: "api/auth/github" // endpoint para la autenticación
  },
  media_folder: "public/uploads", // carpeta donde se guardan los archivos subidos
  public_folder: "/uploads", // carpeta donde se sirven los archivos subidos
  locale: "es",
  collections: [
    {
      name: "niveles", // Nombre de la colección para identificarla en el panel de Netlify CMS
      label: "Niveles Educativos", // Etiqueta que se mostrará en el panel
      folder: "content/niveles", // Carpeta donde se guardan los archivos
      create: true,
      slug: "{{slug}}",
      fields: [
        { label: "Título", name: "title", widget: "string" },
        { label: "Descripción", name: "description", widget: "text" },
        { label: "Contenido", name: "body", widget: "markdown" },
      ]
    }
  ]
});
