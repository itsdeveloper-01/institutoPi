
window.CMS.init({
  backend: {
    name: "github",
    repo: "usuario/repo",
    branch: "main",
    base_url: "/",
    auth_endpoint: "api/auth/github"
  },
  media_folder: "public/uploads",
  public_folder: "/uploads",
  locale: "es",
  collections: [
    {
      name: "niveles",
      label: "Niveles Educativos",
      folder: "content/niveles",
      create: true,
      slug: "{{slug}}",
      fields: [
        { label: "Título", name: "title", widget: "string" },
        { label: "Descripción", name: "description", widget: "text" },
        { label: "Contenido", name: "body", widget: "markdown" }
      ]
    }
  ]
});
