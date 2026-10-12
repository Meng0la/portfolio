# Gabriel Mengue — Portfólio técnico

Portfólio bilíngue (PT/EN) que apresenta projetos de manutenção industrial, backend, automação e cibersegurança. Os projetos aparecem antes das seções de formação e tecnologias, com busca por nome/tecnologia, filtros e detalhes de arquitetura.

## Visual e interação

- Tema escuro com azul e violeta, tipografia DM Sans e IBM Plex Mono.
- Cubo CSS 3D com seis faces, anéis orbitais, rotação e resposta ao cursor.
- Controle de pausa e suporte a `prefers-reduced-motion`, inclusive nas transições Framer Motion.
- Layout responsivo, navegação PT/EN e diálogos com foco contido e restauração ao fechar.
- Contatos por LinkedIn, GitHub e e-mail. Telefone e link pessoal de WhatsApp removidos da versão atual.
- Contagens calculadas a partir dos projetos cadastrados; resultados e status continuam baseados no conteúdo existente.

## Desenvolvimento

Requisitos: Node.js 20.19+ ou 22.12+ e npm.

```bash
npm ci
npm run dev
npm run build
npm run preview
```

Stack: React 19, Vite 6, Tailwind CSS 4, Framer Motion e lucide-react. O cubo usa `perspective` e `transform-style: preserve-3d`, sem dependência de um motor WebGL.

## Atualizar conteúdo

- `src/data/content.js`: perfil, projetos, competências, formação e textos PT/EN.
- `src/components/Hero.jsx`: apresentação e contagens derivadas dos projetos.
- `src/components/HeroScene.jsx`: ilustração 3D e controles de movimento.
- `src/components/Projects.jsx`: destaques, busca, filtros e detalhes.
- `src/index.css`: estilos estruturais.
- `src/redesign.css`: identidade visual e estilos 3D.

Não inclua senhas, tokens ou dados internos nos cases publicados. Os assets de `public/estudo-de-caso/` permanecem como evidências sanitizadas do estudo existente.

## Publicação

`npm run build` gera `dist/`. O `base: ''` em `vite.config.js` mantém os caminhos relativos, permitindo publicação em um subdiretório ou domínio próprio.

O arquivo `deploy.yml.exemplo` é apenas um exemplo de GitHub Actions; não é um workflow ativo. Para publicar por GitHub Pages, configure Pages para usar Actions e adapte o exemplo em `.github/workflows/deploy.yml`. Também é possível publicar `dist/` em Cloudflare Pages, Netlify ou Vercel.
