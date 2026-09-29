// ============================================================================
//  CONTEÚDO DO PORTFÓLIO, Gabriel Mengue  (bilíngue PT/EN)
//  Campos bilíngues são objetos { pt, en }. Use o helper L() do i18n.
//  Nada é inventado: onde o repositório não deixa claro, o campo é omitido.
// ============================================================================

export const profile = {
  name: 'Gabriel Mengue Barros',
  handle: 'Meng0la',
  location: { pt: 'Botucatu/SP · Brasil', en: 'Botucatu/SP · Brazil' },
  phone: '+55 47 98438-3634',
  phoneHref: '+5547984383634',
  github: 'https://github.com/Meng0la',
  githubPages: 'https://meng0la.github.io/',
  linkedin: 'https://www.linkedin.com/in/gabriel-mengue-barros-b23447268/',
  email: 'g.menguebarros@gmail.com',
  role: {
    pt: 'Manutenção Industrial (PCM) · Segurança da Informação · Automação',
    en: 'Industrial Maintenance (PCM) · Information Security · Automation',
  },
  intro: {
    pt: 'Analista de PCM com experiência prática em manutenção industrial, planejamento e controle de manutenção, gestão de ativos e indicadores como MTTR/MTBF, combinada com formação em Segurança Cibernética. Projetei e mantenho em produção um sistema CMMS completo para uma fornecedora aeronáutica certificada AS9100 Rev D, e desenvolvi uma plataforma própria de treinamento ofensivo mapeada ao MITRE ATT&CK.',
    en: 'A PCM analyst with hands-on experience in industrial maintenance, maintenance planning and control, asset management and metrics such as MTTR/MTBF, combined with training in Cybersecurity. I designed and keep in production a complete CMMS for an AS9100 Rev D-certified aerospace supplier, and built my own offensive-training platform mapped to MITRE ATT&CK.',
  },
}

// ---------------------------------------------------------------------------
//  Strings de interface (chrome) por idioma
// ---------------------------------------------------------------------------
export const ui = {
  pt: {
    nav: { about: 'Sobre', experience: 'Experiência', tech: 'Tecnologias', highlights: 'Destaques', projects: 'Projetos', education: 'Formação', contact: 'Contato' },
    hero: {
      badge: 'Manutenção Industrial · Segurança · Automação',
      title: 'Software que conecta operação, dados e segurança.',
      sub: 'Analista de PCM e estudante de Segurança Cibernética. Uno manutenção industrial, backend e automação para fortalecer processos produtivos e ambientes digitais.',
      cta1: 'Ver projetos',
      cta2: 'GitHub',
    },
    bento: [
      { t: 'Sistemas em produção', d: 'Gestão industrial usada no chão de fábrica.' },
      { t: 'Segurança aplicada', d: 'Autorização, auditoria e isolamento de dados.' },
      { t: 'Automação', d: 'Rotinas, integrações e pipelines de dados.' },
    ],
    about: { eyebrow: 'Sobre', title: 'Entender o processo antes de escrever o código.',
      body2: 'Meus projetos surgem de necessidades concretas, manutenção e produção industrial, controle operacional, finanças pessoais, análise de documentos e laboratórios de segurança. Essa prática me levou a trabalhar com aplicações web, Android, scripts Python, bancos relacionais e sistemas em rede local.',
      interests: ['Backend e APIs', 'Automação com Python', 'AppSec', 'Bancos relacionais', 'Redes', 'Integração de sistemas'] },
    tech: { eyebrow: 'Tecnologias', title: 'Stack organizada por responsabilidade.', aside: 'Ferramentas encontradas em projetos reais, destacadas pelo uso relevante, não por quantidade de logos.' },
    highlights: { eyebrow: 'Projetos em destaque', title: 'Cases com contexto, arquitetura e propósito.', aside: 'Selecionados por impacto prático, complexidade, segurança e integração, não apenas pelo volume de código.' },
    projects: { eyebrow: 'Todos os projetos', title: 'Explorar por área.', aside: 'Projetos profissionais, experimentos e estudos, com status explícito.' },
    experience: { eyebrow: 'Competências', title: 'Competências demonstradas no código.' },
    education: { eyebrow: 'Formação', title: 'Formação acadêmica.' },
    contact: { eyebrow: 'Contato', title: 'Vamos construir algo útil?', body: 'Aberto a oportunidades em manutenção industrial (PCM), segurança da informação, backend e automação. O caminho mais rápido é o LinkedIn, o WhatsApp ou o e-mail.' },
    labels: { viewDetails: 'Ver detalhes', viewRepo: 'Ver repositório', internal: 'Case interno', noRepo: 'Projeto interno · sem repositório público', problem: 'Problema que resolve', features: 'Principais funcionalidades', architecture: 'Arquitetura', challenge: 'Desafio técnico', demonstrates: 'O que demonstra', techUsed: 'Tecnologias' },
    footer: 'Projetado com foco em clareza, evidência e privacidade.',
  },
  en: {
    nav: { about: 'About', experience: 'Experience', tech: 'Technologies', highlights: 'Highlights', projects: 'Projects', education: 'Education', contact: 'Contact' },
    hero: {
      badge: 'Industrial Maintenance · Security · Automation',
      title: 'Software that connects operations, data and security.',
      sub: 'PCM analyst and Cybersecurity student. I combine industrial maintenance, backend and automation to strengthen production processes and digital environments.',
      cta1: 'View projects',
      cta2: 'GitHub',
    },
    bento: [
      { t: 'Systems in production', d: 'Industrial management used on the shop floor.' },
      { t: 'Applied security', d: 'Authorization, auditing and data isolation.' },
      { t: 'Automation', d: 'Routines, integrations and data pipelines.' },
    ],
    about: { eyebrow: 'About', title: 'Understand the process before writing the code.',
      body2: 'My projects come from concrete needs, industrial maintenance and production, operational control, personal finance, document analysis and security labs. That practice led me to work with web apps, Android, Python scripts, relational databases and local-network systems.',
      interests: ['Backend & APIs', 'Automation with Python', 'AppSec', 'Relational databases', 'Networking', 'Systems integration'] },
    tech: { eyebrow: 'Technologies', title: 'A stack organized by responsibility.', aside: 'Tools found in real projects, highlighted by relevant use, not by number of logos.' },
    highlights: { eyebrow: 'Featured projects', title: 'Case studies with context, architecture and purpose.', aside: 'Chosen for practical impact, complexity, security and integration, not just lines of code.' },
    projects: { eyebrow: 'All projects', title: 'Browse by area.', aside: 'Professional work, experiments and studies, each with an explicit status.' },
    experience: { eyebrow: 'Skills', title: 'Skills demonstrated in the code.' },
    education: { eyebrow: 'Education', title: 'Academic background.' },
    contact: { eyebrow: 'Contact', title: 'Let’s build something useful?', body: 'Open to opportunities in industrial maintenance (PCM), information security, backend and automation. The fastest way is LinkedIn, WhatsApp or e-mail.' },
    labels: { viewDetails: 'View details', viewRepo: 'View repository', internal: 'Internal case', noRepo: 'Internal project · no public repository', problem: 'Problem it solves', features: 'Key features', architecture: 'Architecture', challenge: 'Technical challenge', demonstrates: 'What it shows', techUsed: 'Technologies' },
    footer: 'Designed with a focus on clarity, evidence and privacy.',
  },
}


// ---------------------------------------------------------------------------
//  FORMAÇÃO ACADÊMICA
// ---------------------------------------------------------------------------
export const education = [
  {
    institution: 'SENAC',
    course: { pt: 'Tecnologia em Segurança Cibernética', en: 'Cybersecurity Technology (Associate)' },
    period: { pt: '2025 a 2028 (em andamento)', en: '2025 a 2028 (in progress)' },
    detail: {
      pt: 'Graduação tecnológica com foco em segurança e auditoria de sistemas, criptografia, controle de acessos, redes, DevSecOps e governança de T.I. TCC: CyberLab, plataforma de treino ofensivo mapeada ao MITRE ATT&CK.',
      en: 'Technology degree focused on system security and auditing, cryptography, access control, networks, DevSecOps and IT governance. Capstone: CyberLab, an offensive-training platform mapped to MITRE ATT&CK.',
    },
  },
  {
    institution: 'UniSociesc',
    course: { pt: 'Análise e Desenvolvimento de Sistemas', en: 'Systems Analysis & Development' },
    period: { pt: '2023 a 2024 (trancado)', en: '2023 a 2024 (paused)' },
    detail: {
      pt: 'Graduação tecnológica em desenvolvimento de sistemas, base em lógica, programação, bancos de dados e engenharia de software.',
      en: 'Technology degree in systems development, foundations in logic, programming, databases and software engineering.',
    },
  },
  {
    institution: 'SENAC',
    course: { pt: 'Técnico em Informática', en: 'Technical Diploma in IT' },
    period: { pt: '2018 a 2020', en: '2018 a 2020' },
    detail: {
      pt: 'Formação técnica em informática, fundamentos de hardware, redes, sistemas operacionais e programação.',
      en: 'Technical training in IT, fundamentals of hardware, networking, operating systems and programming.',
    },
  },
]

// ---------------------------------------------------------------------------
//  STACK
// ---------------------------------------------------------------------------
export const stack = [
  { area: { pt: 'Linguagens', en: 'Languages' }, items: ['Python', 'PHP', 'JavaScript', 'TypeScript', 'Kotlin', 'SQL'] },
  { area: { pt: 'Backend & APIs', en: 'Backend & APIs' }, items: ['PHP (PDO)', 'FastAPI', 'Node / Vite', 'Edge Functions (Deno)', 'REST', 'Webhooks'] },
  { area: { pt: 'Frontend', en: 'Frontend' }, items: ['React 19', 'Vue 3', 'Tailwind CSS', 'Vite', 'Pinia', 'PWA'] },
  { area: { pt: 'Banco de Dados', en: 'Databases' }, items: ['PostgreSQL', 'MySQL / MariaDB', 'Supabase', 'SQLite', 'Row Level Security', 'pg_cron'] },
  { area: { pt: 'Infra & DevOps', en: 'Infra & DevOps' }, items: ['Docker', 'Linux', 'Cloudflare Workers', 'GitHub Actions', 'XAMPP / Apache', 'Redes'] },
  { area: { pt: 'Segurança', en: 'Security' }, items: ['MITRE ATT&CK', 'OSINT / Recon', 'Pentest (lab)', 'Forense digital', 'Sliver C2', 'RBAC / RLS'] },
]

// ---------------------------------------------------------------------------
//  COMPETÊNCIAS
// ---------------------------------------------------------------------------
export const competencies = [
  { title: { pt: 'Arquitetura de sistemas em produção', en: 'Architecture of systems in production' }, body: { pt: 'Projeto e mantenho sozinho um sistema multi-setor real, do schema do banco ao deploy contínuo.', en: 'I design and maintain a real multi-sector system single-handedly, from the database schema to continuous deploy.' } },
  { title: { pt: 'Modelagem de dados e SQL', en: 'Data modeling and SQL' }, body: { pt: 'Schemas relacionais, migrations versionadas, RLS no Postgres e consultas otimizadas em Postgres, MySQL e SQLite.', en: 'Relational schemas, versioned migrations, RLS on Postgres and optimized queries across Postgres, MySQL and SQLite.' } },
  { title: { pt: 'Controle de acesso e segurança de aplicação', en: 'Access control and application security' }, body: { pt: 'RBAC granular com 14 papéis, políticas RLS restritivas por setor, autenticação, auditoria e coleta anônima ponta a ponta.', en: 'Granular RBAC with 14 roles, restrictive per-sector RLS policies, authentication, auditing and end-to-end anonymous collection.' } },
  { title: { pt: 'Automação de processos', en: 'Process automation' }, body: { pt: 'Substituo planilhas e trabalho manual por rotinas: geração automática de OS, jobs no banco e coleta/tratamento de dados.', en: 'I replace spreadsheets and manual work with routines: automatic work-order generation, in-database jobs and data collection/cleaning.' } },
  { title: { pt: 'Integração de sistemas', en: 'Systems integration' }, body: { pt: 'Pontes REST↔gRPC, webhooks de WhatsApp Business, e-mails via serverless e ingestão de PDF/planilhas.', en: 'REST↔gRPC bridges, WhatsApp Business webhooks, serverless e-mail and PDF/spreadsheet ingestion.' } },
  { title: { pt: 'Segurança ofensiva e defensiva', en: 'Offensive and defensive security' }, body: { pt: 'Ferramentas de reconhecimento, laboratório mapeado ao MITRE ATT&CK e estudo de forense, sempre em contexto autorizado.', en: 'Reconnaissance tools, a lab mapped to MITRE ATT&CK and forensics study, always in an authorized context.' } },
]

// ---------------------------------------------------------------------------
//  PROJETOS
// ---------------------------------------------------------------------------
export const projects = [
  {
    id: 'sig-industrial', name: 'SIG Industrial (PCM Aerocris)', category: 'Backend & APIs', featured: true, status: 'producao',
    repo: 'https://github.com/Meng0la/sig-industrial-public',
    tech: ['JavaScript', 'Supabase', 'PostgreSQL', 'RLS', 'Edge Functions (Deno)', 'pg_cron', 'Cloudflare Workers', 'GitHub Actions', 'PWA'],
    short: { pt: 'Sistema de gestão industrial em produção numa fornecedora aeronáutica AS9100. Um app, quatro setores isolados por permissão.', en: 'Industrial management system in production at an AS9100 aerospace supplier. One app, four sectors isolated by permission.' },
    problem: { pt: 'Manutenção, qualidade, RH e T.I. eram controlados em planilhas soltas e processos manuais, sem histórico confiável nem separação de acesso entre setores.', en: 'Maintenance, quality, HR and IT were run on scattered spreadsheets and manual processes, with no reliable history and no access separation between sectors.' },
    features: {
      pt: ['Ordens de serviço corretivas, preventivas e preditivas com histórico, materiais, mão de obra e análise de causa raiz (5 Porquês)', 'Motor de geração automática de preventivas por frequência (dias/horímetro) com reprogramação de fim de semana', 'Quadro de programação semanal drag-and-drop e impressão/PDF de OS e relatórios', 'Módulo de Qualidade (AS9100) com OEE por inspetor, retrabalho vinculado e SLA por peça', 'Pesquisa de clima de RH 100% anônima (escrita só via Edge Function) e módulo de T.I. isolado'],
      en: ['Corrective, preventive and predictive work orders with history, materials, labor and root-cause analysis (5 Whys)', 'Automatic preventive-order engine by frequency (days/hour-meter) with weekend rescheduling', 'Weekly drag-and-drop scheduling board and PDF export of orders and reports', 'Quality module (AS9100) with OEE per inspector, linked rework and per-part SLA', 'Fully anonymous HR climate survey (writes only via Edge Function) and an isolated IT module'],
    },
    architecture: { pt: 'Frontend estático (HTML/CSS/JS puro, sem build) sobre Supabase: Postgres com RLS como fonte de verdade, Edge Functions em Deno para IA, e-mails e rotinas, pg_cron/pg_net para jobs no banco, deploy contínuo por GitHub Actions e PWA offline. 14 papéis; três setores isolados por RLS restritiva.', en: 'Static frontend (plain HTML/CSS/JS, no build) on Supabase: Postgres with RLS as the source of truth, Deno Edge Functions for AI, e-mail and routines, pg_cron/pg_net for in-database jobs, continuous deploy via GitHub Actions and an offline PWA. 14 roles; three sectors isolated by restrictive RLS.' },
    challenges: { pt: 'Garantir isolamento real entre setores num único app público, a segurança vive no banco (RLS), não na UI, e manter anonimato ponta a ponta na pesquisa de RH.', en: 'Guaranteeing real isolation between sectors in a single public app, security lives in the database (RLS), not the UI, and keeping end-to-end anonymity in the HR survey.' },
    demonstrates: { pt: 'Capacidade de arquitetar, desenvolver e operar sozinho um sistema crítico, com decisões corretas de segurança de dados e automação.', en: 'Ability to architect, build and operate a critical system single-handedly, with sound data-security and automation decisions.' },
    note: { pt: 'Versão pública/sanitizada do sistema. ~530 commits no repositório de trabalho.', en: 'Public/sanitized version of the system. ~530 commits in the working repository.' },
  },
  {
    id: 'cyberlab', name: 'CyberLab', category: 'Cibersegurança', featured: true, status: 'desenvolvimento',
    repo: 'https://github.com/Meng0la/cyberlab-portfolio',
    tech: ['React 19', 'Tailwind CSS 4', 'Vite 8', 'Supabase', 'FastAPI', 'Python', 'Sliver (Go)', 'gRPC', 'jsPDF'],
    short: { pt: 'Plataforma de treino em cibersegurança com 22 módulos, mapeamento MITRE ATT&CK e relatórios em PDF. Projeto de TCC (Senac).', en: 'A cybersecurity training platform with 22 modules, MITRE ATT&CK mapping and PDF reports. Final-year project (Senac).' },
    problem: { pt: 'Faltava um ambiente único para praticar e documentar um ciclo completo de pentest autorizado, do reconhecimento à pós-exploração, com rastreio das técnicas por framework.', en: 'There was no single environment to practice and document a full authorized pentest cycle, from reconnaissance to post-exploitation, with technique tracking by framework.' },
    features: {
      pt: ['22 módulos cobrindo gestão de lab, reconhecimento, scanning e pós-exploração em ambiente controlado', 'Mapeamento das ações às 14 fases e técnicas do MITRE ATT&CK, com feed de CVEs (NVD)', 'Bridge FastAPI fazendo proxy REST→gRPC para o C2 Sliver, scanner de portas e captura de pacotes com SSE', 'Gestão de sessões, credenciais, IOCs e loot em banco, com realtime', 'Exportação de writeups e cobertura MITRE em PDF'],
      en: ['22 modules covering lab management, reconnaissance, scanning and post-exploitation in a controlled environment', 'Actions mapped to the 14 MITRE ATT&CK phases and techniques, with a CVE feed (NVD)', 'FastAPI bridge proxying REST→gRPC to the Sliver C2, port scanner and packet capture with SSE', 'Management of sessions, credentials, IOCs and loot in the database, with realtime', 'Export of writeups and MITRE coverage to PDF'],
    },
    architecture: { pt: 'SPA React (~6.500 linhas, 22 módulos) consumindo Supabase (Postgres + Realtime + Auth) e uma bridge FastAPI que traduz REST para o gRPC do C2 Sliver, além de sockets brutos para scan e captura. Matriz MITRE ATT&CK com heatmap das 14 táticas e exportação para o ATT&CK Navigator.', en: 'React SPA (~6,500 lines, 22 modules) consuming Supabase (Postgres + Realtime + Auth) and a FastAPI bridge translating REST to the Sliver C2 gRPC, plus raw sockets for scanning and capture. MITRE ATT&CK matrix with a heatmap of the 14 tactics and ATT&CK Navigator export.' },
    challenges: { pt: 'Orquestrar componentes heterogêneos (React ↔ FastAPI ↔ gRPC/Go) e modelar todo o fluxo de um engajamento como dados consultáveis e auditáveis.', en: 'Orchestrating heterogeneous components (React ↔ FastAPI ↔ gRPC/Go) and modeling a whole engagement as queryable, auditable data.' },
    demonstrates: { pt: 'Domínio de arquitetura full-stack não trivial, integração entre linguagens e entendimento estruturado de segurança ofensiva.', en: 'Command of non-trivial full-stack architecture, cross-language integration and a structured understanding of offensive security.' },
    note: { pt: 'Ferramentas de uso exclusivamente educacional e autorizado (ver SECURITY.md do repositório).', en: 'Tools for strictly educational and authorized use (see the repository SECURITY.md).' },
  },
  {
    id: 'finic', name: 'Finic', category: 'Desenvolvimento Web', featured: true, status: 'desenvolvimento',
    repo: 'https://github.com/Meng0la/Finic',
    tech: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS 4', 'Supabase', 'Recharts', 'Groq', 'Cloudflare'],
    short: { pt: 'Dashboard de finanças pessoais com importação de dados, gráficos e apoio de IA. Stack de ponta rodando na edge da Cloudflare.', en: 'A personal-finance dashboard with data import, charts and AI assistance. Cutting-edge stack running on the Cloudflare edge.' },
    problem: { pt: 'Acompanhar receitas, despesas e tendências financeiras de forma visual, sem depender de planilhas.', en: 'Tracking income, expenses and financial trends visually, without relying on spreadsheets.' },
    features: { pt: ['Importação de dados financeiros via CSV e normalização', 'Dashboards e gráficos interativos (Recharts)', 'Camada de IA (Groq) para apoio à análise', 'Autenticação e persistência com Supabase (SSR)'], en: ['Financial data import via CSV and normalization', 'Interactive dashboards and charts (Recharts)', 'AI layer (Groq) for analysis assistance', 'Authentication and persistence with Supabase (SSR)'] },
    architecture: { pt: 'App Next.js com SSR, autenticação Supabase via cookies, cálculos e parsing de CSV no servidor, e deploy na Cloudflare via adaptador OpenNext.', en: 'A Next.js app with SSR, cookie-based Supabase auth, calculations and CSV parsing on the server, deployed to Cloudflare via the OpenNext adapter.' },
    challenges: { pt: 'Rodar um app Next.js moderno na edge da Cloudflare mantendo SSR e sessão segura.', en: 'Running a modern Next.js app on the Cloudflare edge while keeping SSR and a secure session.' },
    demonstrates: { pt: 'Fluência com o ecossistema React/TypeScript mais atual e deploy serverless na edge.', en: 'Fluency with the most current React/TypeScript ecosystem and serverless edge deployment.' },
  },
  {
    id: 'sistema-pcp', name: 'Sistema PCP', category: 'Backend & APIs', featured: true, status: 'desenvolvimento', repo: null,
    tech: ['PHP (PDO)', 'MySQL / MariaDB', 'Vue 3', 'Vite', 'Tailwind CSS', 'Pinia'],
    short: { pt: 'Planejamento e Controle de Produção: cadastros, fluxo de aproveitamento de peças e apontamento de chão de fábrica.', en: 'Production Planning & Control: registrations, part-reuse flow and shop-floor time tracking.' },
    problem: { pt: 'O controle de peças, dispositivos, centros de trabalho e programação de máquinas era feito em planilhas dispersas.', en: 'Control of parts, fixtures, work centers and machine scheduling was done in scattered spreadsheets.' },
    features: { pt: ['Cadastros de Peças, Dispositivos e Centros de Trabalho com fluxo de aproveitamento de PN', 'Login com cinco perfis de acesso (Admin, Gerente, Supervisores e Analista de PCP)', 'Programação de máquinas, apontamentos de operadores e sessões multi-máquina', 'Variáveis de sistema editáveis pela interface e auditoria completa'], en: ['Parts, Fixtures and Work Centers registration with a PN reuse flow', 'Login with five access profiles (Admin, Manager, Supervisors and PCP Analyst)', 'Machine scheduling, operator time tracking and multi-machine sessions', 'System variables editable from the interface and a full audit trail'] },
    architecture: { pt: 'Backend PHP nativo com PDO expondo API REST (roteador próprio) sobre MySQL, com ~20 migrations versionadas; frontend Vue 3 + Pinia. Deploy em rede local via XAMPP.', en: 'Native PHP backend with PDO exposing a REST API (custom router) over MySQL, with ~20 versioned migrations; Vue 3 + Pinia frontend. Deployed on a local network via XAMPP.' },
    challenges: { pt: 'Evoluir o schema com segurança por migrations incrementais e modelar o fluxo produtivo real da fábrica.', en: 'Evolving the schema safely through incremental migrations and modeling the factory’s real production flow.' },
    demonstrates: { pt: 'Backend estruturado sem framework, modelagem relacional e disciplina de migrations.', en: 'Structured backend without a framework, relational modeling and migration discipline.' },
    note: { pt: 'Projeto interno (não publicado no GitHub).', en: 'Internal project (not published on GitHub).' },
  },
  {
    id: 'reconspider', name: 'ReconSpider', category: 'Cibersegurança', featured: true, status: 'desenvolvimento',
    repo: 'https://github.com/Meng0la/ReconSpider', tech: ['Python 3.8+'],
    short: { pt: 'Framework de reconhecimento (OSINT/recon) em Python para pentest autorizado e pesquisa em segurança.', en: 'A reconnaissance (OSINT/recon) framework in Python for authorized pentesting and security research.' },
    problem: { pt: 'Automatizar a fase de reconhecimento e a descoberta de exposições acidentais durante testes autorizados.', en: 'Automating the reconnaissance phase and the discovery of accidental exposures during authorized testing.' },
    features: { pt: ['Coleta e enumeração para reconhecimento externo', 'Estrutura modular em Python voltada a fluxos de Red Team autorizado', 'Foco em identificação de superfícies e exposições'], en: ['Collection and enumeration for external reconnaissance', 'Modular Python structure aimed at authorized Red Team workflows', 'Focus on identifying attack surface and exposures'] },
    architecture: { pt: 'Ferramenta de linha de comando modular em Python. (Detalhes de cada módulo no repositório.)', en: 'A modular Python command-line tool. (See the repository for per-module details.)' },
    challenges: { pt: 'Organizar coletas heterogêneas sob uma interface única e reutilizável.', en: 'Organizing heterogeneous collectors under a single, reusable interface.' },
    demonstrates: { pt: 'Autonomia em Python aplicado a segurança e entendimento da metodologia de pentest.', en: 'Autonomy in Python applied to security and an understanding of pentest methodology.' },
    note: { pt: 'Uso restrito a testes autorizados e pesquisa.', en: 'Restricted to authorized testing and research.' },
  },
  {
    id: 'cnc-checklist', name: 'AeroCheck, Checklist de CNCs', category: 'Ferramentas internas', featured: false, status: 'producao',
    repo: 'https://github.com/Meng0la/cnc-checklist-system', tech: ['PHP', 'MySQL', 'Tailwind CSS', 'JavaScript', 'PowerShell'],
    short: { pt: 'Checklist web de limpeza e vistoria de máquinas CNC por turno, com perfis, histórico e relatório de conformidade.', en: 'A web checklist for cleaning and inspecting CNC machines per shift, with roles, history and compliance reporting.' },
    problem: { pt: 'Registrar e cobrar a limpeza/vistoria de início e fim de turno das CNCs, com rastreabilidade e alerta de não conformidade.', en: 'Recording and enforcing start/end-of-shift cleaning and inspection of CNC machines, with traceability and non-conformity alerts.' },
    features: { pt: ['Login por matrícula, troca de senha obrigatória no 1º acesso e perfis (Operador, Supervisor, Gerente, Manutenção, Admin)', 'Preenchimento restrito às máquinas do operador; histórico e exportação CSV', 'Relatórios de pendências e dashboard de conformidade', 'Log de auditoria, backup automático (PowerShell) e alerta agendado de não conformidade'], en: ['Login by employee ID, mandatory password change on first access and roles (Operator, Supervisor, Manager, Maintenance, Admin)', 'Filling restricted to the operator’s machines; history and CSV export', 'Pending-items reports and a compliance dashboard', 'Audit log, automatic backup (PowerShell) and a scheduled non-conformity alert'] },
    architecture: { pt: 'Aplicação PHP/MySQL sobre XAMPP, CSS gerado por Tailwind CLI, com scripts de backup e verificação de alertas via Agendador de Tarefas.', en: 'A PHP/MySQL app on XAMPP, CSS built by the Tailwind CLI, with backup and alert scripts via the Windows Task Scheduler.' },
    challenges: { pt: 'Modelar perfis e visibilidade por máquina e operar de forma confiável num servidor de fábrica.', en: 'Modeling roles and per-machine visibility and running reliably on a factory server.' },
    demonstrates: { pt: 'Entrega de ferramenta interna completa com segurança básica, auditoria e operação real.', en: 'Delivery of a complete internal tool with basic security, auditing and real operation.' },
  },
  {
    id: 'rh-conversas', name: 'RH, Conversas de Permanência', category: 'Ferramentas internas', featured: false, status: 'producao', repo: null,
    tech: ['PHP', 'MySQL', 'Vue 3', 'Tailwind CSS', 'Python'],
    short: { pt: 'Sistema de RH para aplicar e acompanhar questionários de permanência, com dashboard e comparativo entre edições.', en: 'An HR system to run and track retention questionnaires, with a dashboard and edition comparison.' },
    problem: { pt: 'Estruturar a "Conversa de Permanência" e outros questionários, com controle de quem responde e leitura dos resultados.', en: 'Structuring the “Retention Conversation” and other questionnaires, controlling who answers and reading the results.' },
    features: { pt: ['Cadastro/importação de colaboradores por setor (CSV) e atribuição de questionários', 'Editor de questionários (blocos e perguntas) com perguntas marcadas como importantes', 'Dashboard com KPIs, score por categoria, eNPS/ranking e comparativo entre edições', 'Perfis de acesso (Admin, RH, Usuário) e alerta visual para respostas de risco'], en: ['Employee registration/import by sector (CSV) and questionnaire assignment', 'Questionnaire editor (blocks and questions) with questions flagged as important', 'Dashboard with KPIs, score per category, eNPS/ranking and edition comparison', 'Access profiles (Admin, HR, User) and a visual alert for at-risk answers'] },
    architecture: { pt: 'API PHP com MySQL, frontend Vue 3 + Tailwind via CDN (sem build), rodando em XAMPP; seeds SQL e gerador de seed em Python.', en: 'A PHP API with MySQL, a Vue 3 + Tailwind frontend via CDN (no build), running on XAMPP; SQL seeds and a Python seed generator.' },
    challenges: { pt: 'Modelar questionários flexíveis e comparação entre edições preservando a leitura por setor.', en: 'Modeling flexible questionnaires and edition comparison while preserving per-sector reading.' },
    demonstrates: { pt: 'Capacidade de traduzir um processo de RH em software utilizável, com dados e permissões.', en: 'Ability to translate an HR process into usable software, with data and permissions.' },
    note: { pt: 'Projeto interno (não publicado no GitHub).', en: 'Internal project (not published on GitHub).' },
  },
  {
    id: 'tt-crm', name: 'TT CRM', category: 'Desenvolvimento Web', featured: false, status: 'desenvolvimento',
    repo: 'https://github.com/Meng0la/tt-crm', tech: ['React', 'Vite', 'Supabase', 'Tailwind CSS'],
    short: { pt: 'CRM enxuto com onboarding, autenticação e dashboard, em React + Supabase.', en: 'A lean CRM with onboarding, authentication and dashboard, in React + Supabase.' },
    problem: { pt: 'Centralizar contatos/clientes e acompanhamento em um painel simples.', en: 'Centralizing contacts/customers and follow-up in a simple panel.' },
    features: { pt: ['Fluxo de onboarding e autenticação', 'Dashboard de gestão', 'Persistência em Supabase'], en: ['Onboarding and authentication flow', 'Management dashboard', 'Persistence with Supabase'] },
    architecture: { pt: 'SPA React (Vite) com Supabase para auth e dados.', en: 'A React (Vite) SPA with Supabase for auth and data.' },
    challenges: { pt: 'Estruturar um CRM utilizável com o mínimo de dependências.', en: 'Building a usable CRM with minimal dependencies.' },
    demonstrates: { pt: 'Produtividade com React + Supabase para entregar um produto funcional.', en: 'Productivity with React + Supabase to ship a working product.' },
  },
  {
    id: 'controle-notas', name: 'Extração de Notas Fiscais', category: 'Automação', featured: false, status: 'experimental',
    repo: 'https://github.com/Meng0la/controle_de_notas', tech: ['JavaScript', 'Parsing heurístico', 'IA (opcional)'],
    short: { pt: 'Ferramenta client-side que extrai dados estruturados de NF-e/NFS-e em PDF via parsing heurístico, com IA opcional.', en: 'A client-side tool that extracts structured data from NF-e/NFS-e PDFs via heuristic parsing, with optional AI.' },
    problem: { pt: 'Copiar manualmente número, cliente, CNPJ/CPF, valor e datas de notas fiscais é lento e propenso a erro.', en: 'Manually copying the number, customer, tax ID, amount and dates from invoices is slow and error-prone.' },
    features: { pt: ['Upload de PDF e extração automática de texto no navegador', 'Identificação do tipo (NF-e / NFS-e) e parsing heurístico dos campos', 'Normalização para dados financeiros prontos para dashboards'], en: ['PDF upload and automatic text extraction in the browser', 'Document-type detection (NF-e / NFS-e) and heuristic field parsing', 'Normalization into financial data ready for dashboards'] },
    architecture: { pt: 'Processamento 100% no cliente: lê o PDF, extrai texto e aplica regras de parsing por tipo de documento.', en: 'Fully client-side processing: reads the PDF, extracts text and applies parsing rules per document type.' },
    challenges: { pt: 'Lidar com layouts variados de notas mantendo o parsing confiável.', en: 'Handling varied invoice layouts while keeping parsing reliable.' },
    demonstrates: { pt: 'Automação prática de um problema administrativo real, sem backend.', en: 'Practical automation of a real administrative problem, with no backend.' },
  },
  {
    id: 'buscador-mapas', name: 'Buscador de Mapas (OSM)', category: 'Automação', featured: false, status: 'concluido',
    repo: 'https://github.com/Meng0la/Buscador-de-Mapas', tech: ['Python', 'Overpass API', 'Nominatim', 'Excel'],
    short: { pt: 'Pipeline em Python que coleta empresas de uma área geográfica no OpenStreetMap, trata os dados e completa endereços por geocodificação.', en: 'A Python pipeline that collects businesses from a geographic area on OpenStreetMap, cleans the data and completes addresses via geocoding.' },
    problem: { pt: 'Montar listas de prospecção de empresas por região, com endereços completos, sem trabalho manual.', en: 'Building regional business prospect lists with complete addresses, without manual work.' },
    features: { pt: ['Coleta por área via API Overpass do OpenStreetMap', 'Tratamento e padronização dos dados', 'Preenchimento de endereços ausentes por geocodificação (Nominatim)', 'Saída final em planilha Excel'], en: ['Collection by area via the OpenStreetMap Overpass API', 'Data cleaning and standardization', 'Filling missing addresses via geocoding (Nominatim)', 'Final output as an Excel spreadsheet'] },
    architecture: { pt: 'Três scripts executados em sequência: coleta → tratamento → geocodificação, gerando um Excel pronto para análise.', en: 'Three scripts run in sequence: collect → clean → geocode, producing an analysis-ready Excel file.' },
    challenges: { pt: 'Respeitar limites das APIs públicas e padronizar dados heterogêneos.', en: 'Respecting public-API limits and standardizing heterogeneous data.' },
    demonstrates: { pt: 'Construção de pipeline de dados end-to-end em Python.', en: 'Building an end-to-end data pipeline in Python.' },
  },
  {
    id: 'bot-wpps', name: 'Bot de Atendimento (WhatsApp)', category: 'Automação', featured: false, status: 'experimental',
    repo: 'https://github.com/Meng0la/bot_wpps', tech: ['Python', 'SQLite', 'WhatsApp Business API', 'JavaScript'],
    short: { pt: 'Webhook de WhatsApp Business que consulta uma base local de peças e responde automaticamente.', en: 'A WhatsApp Business webhook that queries a local parts database and replies automatically.' },
    problem: { pt: 'Automatizar consultas de peças no atendimento ao cliente.', en: 'Automating parts lookups in customer service.' },
    features: { pt: ['Recebimento de mensagens via webhook do WhatsApp Business', 'Consulta de peças em base SQLite', 'Scripts de cadastro/carga de peças'], en: ['Message reception via the WhatsApp Business webhook', 'Parts lookup in a SQLite database', 'Parts registration/loading scripts'] },
    architecture: { pt: 'Webhook em Python roteando mensagens e consultando SQLite; utilitários de carga de dados.', en: 'A Python webhook routing messages and querying SQLite; data-loading utilities.' },
    challenges: { pt: 'Integrar a API do WhatsApp Business com uma base de dados local.', en: 'Integrating the WhatsApp Business API with a local database.' },
    demonstrates: { pt: 'Integração de sistemas via webhook e automação de atendimento.', en: 'System integration via webhook and service automation.' },
  },
  {
    id: 'shieldcall', name: 'ShieldCall', category: 'Aplicações Mobile', featured: false, status: 'desenvolvimento',
    repo: 'https://github.com/Meng0la/ShieldCall', tech: ['Kotlin', 'Jetpack Compose', 'CallScreeningService', 'Room'],
    short: { pt: 'App Android de triagem e bloqueio de chamadas com a API oficial CallScreeningService.', en: 'An Android app for call screening and blocking using the official CallScreeningService API.' },
    problem: { pt: 'Bloquear números desconhecidos e indesejados de forma transparente, sem depender de backend externo.', en: 'Blocking unknown and unwanted numbers transparently, without relying on an external backend.' },
    features: { pt: ['Bloqueio de números desconhecidos antes do toque', 'Whitelist, blacklist e regras personalizadas', 'Registro local de eventos e resposta automática por SMS com fallback'], en: ['Blocking unknown numbers before they ring', 'Whitelist, blacklist and custom rules', 'Local event logging and automatic SMS reply with fallback'] },
    architecture: { pt: 'App Android local em Kotlin/Compose usando a API CallScreeningService, com persistência local e testes instrumentados.', en: 'A local Android app in Kotlin/Compose using the CallScreeningService API, with local persistence and instrumented tests.' },
    challenges: { pt: 'Trabalhar dentro das restrições do Android para triagem de chamadas mantendo o uso 100% local.', en: 'Working within Android’s call-screening constraints while keeping everything fully local.' },
    demonstrates: { pt: 'Desenvolvimento Android nativo moderno com API de sistema e boas práticas.', en: 'Modern native Android development with a system API and good practices.' },
  },
  {
    id: 'grimsweep', name: 'GrimSweep', category: 'Cibersegurança', featured: false, status: 'experimental',
    repo: 'https://github.com/Meng0la/GrimSweep', tech: ['Python'],
    short: { pt: 'Ferramenta de estudo de forense digital e anti-forense em Windows (Python).', en: 'A tool for studying Windows digital forensics and anti-forensics (Python).' },
    problem: { pt: 'Entender como o Windows armazena rastros de atividade e o impacto de sua remoção na análise forense.', en: 'Understanding how Windows stores activity traces and the impact of removing them on forensic analysis.' },
    features: { pt: ['Estudo de persistência de artefatos e sanitização de dados', 'Observação do impacto na recuperação de dados'], en: ['Study of artifact persistence and data sanitization', 'Observation of the impact on data recovery'] },
    architecture: { pt: 'Script Python de linha de comando voltado à pesquisa em forense digital.', en: 'A Python command-line script aimed at digital-forensics research.' },
    challenges: { pt: 'Mapear os diversos artefatos investigativos do Windows.', en: 'Mapping the many Windows investigative artifacts.' },
    demonstrates: { pt: 'Conhecimento de forense digital pela ótica de quem estuda a defesa.', en: 'Knowledge of digital forensics from a defender’s perspective.' },
    note: { pt: 'Ferramenta destrutiva, de pesquisa, nunca para produção. Fins educacionais.', en: 'A destructive research tool, never for production. Educational purposes.' },
  },
  {
    id: 'ascii', name: 'ASCII Ultra V2', category: 'Projetos de estudo', featured: false, status: 'experimental',
    repo: 'https://github.com/Meng0la/ASCII', tech: ['Python', 'FFmpeg'],
    short: { pt: 'Player de vídeo em ASCII no terminal (ANSI) com exportação para MP4.', en: 'A terminal video-to-ASCII player (ANSI) with MP4 export.' },
    problem: { pt: 'Explorar processamento de vídeo e renderização em terminal por diversão técnica.', en: 'Exploring video processing and terminal rendering as a technical exercise.' },
    features: { pt: ['Reprodução de vídeo como ASCII colorido no terminal', 'Exportação para MP4 via FFmpeg'], en: ['Playback of video as colored ASCII in the terminal', 'MP4 export via FFmpeg'] },
    architecture: { pt: 'CLI em Python que converte frames de vídeo em ASCII e reproduz/exporta.', en: 'A Python CLI that converts video frames to ASCII and plays/exports them.' },
    challenges: { pt: 'Processar frames com desempenho aceitável no terminal.', en: 'Processing frames with acceptable performance in the terminal.' },
    demonstrates: { pt: 'Criatividade técnica e manipulação de mídia em Python.', en: 'Technical creativity and media handling in Python.' },
  },
  {
    id: 'site-login', name: 'Site Login (UI)', category: 'Projetos de estudo', featured: false, status: 'estudo',
    repo: 'https://github.com/Meng0la/Site_Login', tech: ['HTML', 'CSS', 'JavaScript'],
    short: { pt: 'Estudo de interface de autenticação com foco em HTML/CSS.', en: 'A study of an authentication interface focused on HTML/CSS.' },
    problem: { pt: 'Praticar layout e design de telas de login.', en: 'Practicing layout and login-screen design.' },
    features: { pt: ['Tela de login estilizada'], en: ['Styled login screen'] },
    architecture: { pt: 'Projeto estático de front-end.', en: 'A static front-end project.' },
    challenges: { pt: 'Refino visual e responsividade.', en: 'Visual refinement and responsiveness.' },
    demonstrates: { pt: 'Cuidado com UI e fundamentos de front-end.', en: 'Attention to UI and front-end fundamentals.' },
  },
  {
    id: 'mini-soc', name: 'Mini Ambiente SOC', category: 'Cibersegurança', featured: false, status: 'estudo', repo: null,
    tech: ['Wazuh', 'Suricata', 'Pi-hole', 'Linux', 'SIEM/EDR', 'IDS/IPS'],
    short: { pt: 'Laboratório SOC local com Wazuh (SIEM/EDR), Suricata (IDS/IPS) e Pi-hole (filtro DNS).', en: 'A local SOC lab with Wazuh (SIEM/EDR), Suricata (IDS/IPS) and Pi-hole (DNS filtering).' },
    problem: { pt: 'Praticar monitoramento, detecção e resposta a incidentes num ambiente controlado e reproduzível.', en: 'Practicing monitoring, detection and incident response in a controlled, reproducible environment.' },
    features: { pt: ['SIEM/EDR com Wazuh para coleta de logs e detecção em endpoints', 'IDS/IPS de rede com Suricata', 'Filtro de DNS com Pi-hole e análise de tráfego'], en: ['SIEM/EDR with Wazuh for log collection and endpoint detection', 'Network IDS/IPS with Suricata', 'DNS filtering with Pi-hole and traffic analysis'] },
    architecture: { pt: 'Ambiente laboratorial local (virtualização) integrando Wazuh, Suricata e Pi-hole para simular um SOC de pequeno porte.', en: 'A local lab (virtualization) integrating Wazuh, Suricata and Pi-hole to simulate a small-scale SOC.' },
    challenges: { pt: 'Integrar as ferramentas e gerar telemetria útil para detecção.', en: 'Integrating the tools and producing useful telemetry for detection.' },
    demonstrates: { pt: 'Segurança defensiva prática: SIEM, IDS/IPS e higiene de DNS.', en: 'Hands-on defensive security: SIEM, IDS/IPS and DNS hygiene.' },
    note: { pt: 'Laboratório local para estudo defensivo.', en: 'A local lab for defensive study.' },
  },
  {
    id: 'assure', name: 'Assure', category: 'Ferramentas internas', featured: false, status: 'experimental', repo: null,
    tech: ['PHP', 'SQL', 'MySQL'],
    short: { pt: 'Sistema web de chamados (helpdesk) em PHP e SQL.', en: 'A web ticketing (helpdesk) system in PHP and SQL.' },
    problem: { pt: 'Organizar a abertura, o acompanhamento e o histórico de chamados de suporte.', en: 'Organizing the opening, tracking and history of support tickets.' },
    features: { pt: ['Abertura e acompanhamento de chamados', 'Histórico e status por solicitação', 'Backend PHP com banco relacional'], en: ['Ticket opening and tracking', 'History and status per request', 'PHP backend with a relational database'] },
    architecture: { pt: 'Aplicação web PHP sobre banco SQL, com CRUD de chamados e perfis de acesso.', en: 'A PHP web app on an SQL database, with ticket CRUD and access profiles.' },
    challenges: { pt: 'Modelar o fluxo de um chamado do início ao fechamento.', en: 'Modeling a ticket’s flow from opening to closure.' },
    demonstrates: { pt: 'Backend PHP e modelagem relacional aplicados a um fluxo real.', en: 'PHP backend and relational modeling applied to a real workflow.' },
  },
  {
    id: 'simplica', name: 'Simplica', category: 'Automação', featured: false, status: 'experimental', repo: null,
    tech: ['Python', 'WhatsApp API', 'SQLite'],
    short: { pt: 'Assistente financeiro pessoal integrado ao WhatsApp.', en: 'A personal finance assistant integrated with WhatsApp.' },
    problem: { pt: 'Registrar e consultar finanças pessoais de forma conversacional, direto no WhatsApp.', en: 'Recording and querying personal finances conversationally, right in WhatsApp.' },
    features: { pt: ['Registro de gastos e receitas por mensagem', 'Consultas e resumos financeiros', 'Integração com a API do WhatsApp'], en: ['Expense and income logging by message', 'Financial queries and summaries', 'WhatsApp API integration'] },
    architecture: { pt: 'Backend em Python integrado ao WhatsApp, processando mensagens e persistindo os lançamentos.', en: 'A Python backend integrated with WhatsApp, processing messages and persisting entries.' },
    challenges: { pt: 'Interpretar mensagens livres e transformá-las em lançamentos estruturados.', en: 'Interpreting free-form messages and turning them into structured entries.' },
    demonstrates: { pt: 'Automação conversacional e integração de mensageria com dados.', en: 'Conversational automation and messaging-to-data integration.' },
  },
  {
    id: 'automacao-web', name: 'Automação Web', category: 'Automação', featured: false, status: 'experimental', repo: null,
    tech: ['Python', 'Playwright', 'Selenium'],
    short: { pt: 'Scripts de automação de tarefas web com Playwright e Selenium.', en: 'Web task-automation scripts with Playwright and Selenium.' },
    problem: { pt: 'Automatizar tarefas repetitivas em navegadores (coleta, preenchimento, verificação).', en: 'Automating repetitive browser tasks (scraping, form-filling, checks).' },
    features: { pt: ['Automação de navegação e formulários', 'Coleta de dados de páginas', 'Rotinas com Playwright e Selenium'], en: ['Navigation and form automation', 'Page data scraping', 'Routines with Playwright and Selenium'] },
    architecture: { pt: 'Scripts Python dirigindo navegadores headless para tarefas repetíveis.', en: 'Python scripts driving headless browsers for repeatable tasks.' },
    challenges: { pt: 'Lidar com páginas dinâmicas mantendo os scripts estáveis.', en: 'Handling dynamic pages while keeping the scripts stable.' },
    demonstrates: { pt: 'Automação prática de processos web em Python.', en: 'Practical web-process automation in Python.' },
  },
]

export const statusLabels = {
  producao: { cls: 'status-live', pt: 'Em produção', en: 'In production' },
  concluido: { cls: 'status-done', pt: 'Concluído', en: 'Completed' },
  desenvolvimento: { cls: 'status-progress', pt: 'Em desenvolvimento', en: 'In development' },
  experimental: { cls: 'status-lab', pt: 'Experimental', en: 'Experimental' },
  estudo: { cls: 'status-study', pt: 'Estudo', en: 'Study' },
}

export const categoryFilters = {
  'Backend & APIs': ['web'],
  'Desenvolvimento Web': ['web'],
  'Cibersegurança': ['security'],
  'Automação': ['automation'],
  'Ferramentas internas': ['web'],
  'Aplicações Mobile': ['mobile'],
  'Projetos de estudo': ['study'],
}

export const filterTabs = [
  { key: 'all', pt: 'Todos', en: 'All' },
  { key: 'web', pt: 'Web & Backend', en: 'Web & Backend' },
  { key: 'security', pt: 'Segurança', en: 'Security' },
  { key: 'automation', pt: 'Automação & Dados', en: 'Automation & Data' },
  { key: 'mobile', pt: 'Mobile', en: 'Mobile' },
  { key: 'study', pt: 'Estudos', en: 'Studies' },
]
