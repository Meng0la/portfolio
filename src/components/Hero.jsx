import { ArrowUpRight, Github } from 'lucide-react'
import { profile, projects } from '../data/content'
import { useT } from '../i18n'
import { Reveal } from './ui'
import HeroScene from './HeroScene'

export default function Hero() {
  const { t, lang } = useT()
  const pt = lang === 'pt'
  const stats = [
    { value: String(projects.length).padStart(2, '0'), label: pt ? 'Projetos documentados' : 'Documented projects' },
    { value: String(projects.filter(p => p.status === 'producao').length).padStart(2, '0'), label: pt ? 'Sistemas em produção' : 'Systems in production' },
    { value: 'PT / EN', label: pt ? 'Portfólio bilíngue' : 'Bilingual portfolio' },
  ]
  return (
    <section className="hero" aria-label={pt ? 'Apresentação' : 'Introduction'}>
      <div className="container">
        <div className="hero-inner">
          <Reveal className="hero-copy">
            <span className="hero-badge"><span />{t.hero.badge}</span>
            <p className="hero-name">GABRIEL MENGUE / {pt ? 'PORTFÓLIO TÉCNICO' : 'TECHNICAL PORTFOLIO'}</p>
            <h1>{pt ? <>Da operação<br />ao código.<br /><em>Com propósito.</em></> : <>From operations<br />to code.<br /><em>With purpose.</em></>}</h1>
            <p className="hero-sub">{t.hero.sub}</p>
            <div className="hero-links">
              <a className="button button-primary" href="#destaques">{t.hero.cta1}<ArrowUpRight size={17} /></a>
              <a className="button button-outline" href={profile.github} target="_blank" rel="noreferrer"><Github size={16} />{t.hero.cta2}</a>
            </div>
          </Reveal>
          <HeroScene />
        </div>
        <div className="hero-proof">{stats.map(s => <div key={s.label}><strong>{s.value}</strong><span>{s.label}</span></div>)}<a href="#contato">{pt ? 'Vamos conversar' : 'Let’s connect'}<ArrowUpRight size={18} /></a></div>
        <Reveal className="bento">{t.bento.map((b, i) => <article className="bento-tile" key={b.t}><span className="bento-index">0{i + 1} /</span><h3>{b.t}</h3><p>{b.d}</p></article>)}</Reveal>
      </div>
    </section>
  )
}
