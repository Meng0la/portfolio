# Portfólio, Gabriel Mengue

Site de portfólio profissional (SPA) com foco em **backend, automação, cibersegurança e infraestrutura**, gerado a partir dos projetos reais do GitHub e da área de trabalho.

## Stack

- **React 19** + **Vite 6**
- **Tailwind CSS 4** (`@tailwindcss/vite`)
- **Framer Motion** (animações) · **lucide-react** (ícones)
- Fontes: Inter, Space Grotesk, JetBrains Mono (Google Fonts)

Todo o conteúdo (projetos, stack, competências) vive em **`src/data/content.js`**, é o único arquivo que você precisa editar para atualizar textos, adicionar um projeto ou mudar um status.

## Rodar localmente

```bash
npm install
npm run dev      # http://localhost:5173
```

## Build de produção

```bash
npm run build    # gera a pasta dist/
npm run preview  # serve o build para conferência
```

## Deploy

O `vite.config.js` usa `base: ''` (caminhos relativos), então o build funciona em qualquer host estático.

### GitHub Pages (recomendado, você já tem `meng0la.github.io`)
1. Crie um repositório `portfolio` (ou use `meng0la.github.io`).
2. `npm run build`.
3. Publique o conteúdo de `dist/` na branch `gh-pages`, ou use uma GitHub Action de deploy do Pages.

### Cloudflare Pages / Netlify / Vercel
- Build command: `npm run build`
- Output directory: `dist`

## Estrutura

```
src/
  data/content.js       ← conteúdo (projetos, stack, competências, melhorias)
  components/
    Nav.jsx             ← navegação fixa + menu mobile
    Hero.jsx            ← topo com terminal e métricas
    Sections.jsx        ← Sobre, Tecnologias, Experiência, Contato/Footer
    Projects.jsx        ← Destaques + Todos (filtro por categoria) + modal
    ui.jsx              ← componentes utilitários (badges, headings, reveal)
  App.jsx · main.jsx · index.css
```

## Seções

Home (hero) · Sobre · Tecnologias · Projetos em destaque · Todos os projetos (filtráveis) · Experiência técnica · Contato.

---

Projetos e informações extraídos dos repositórios de [github.com/Meng0la](https://github.com/Meng0la). Nenhuma experiência ou habilidade foi inventada: onde o repositório não deixava claro, o campo foi omitido.
