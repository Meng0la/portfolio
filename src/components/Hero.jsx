import { profile } from '../data/content'
import { useT } from '../i18n'
import { Reveal } from './ui'

export default function Hero() {
  const { t } = useT()

  return (
    <section className="hero">
      <div className="container hero-inner">
        <Reveal>
          <span className="hero-badge">{t.hero.badge}</span>
          <h1>{t.hero.title}</h1>
          <p className="hero-sub">{t.hero.sub}</p>
          <div className="hero-links">
            <a className="button button-primary" href="#destaques">{t.hero.cta1}</a>
            <a className="button button-outline" href={profile.github} target="_blank" rel="noreferrer">{t.hero.cta2}</a>
          </div>
        </Reveal>

        <Reveal className="bento">
          {t.bento.map((b) => (
            <article className="bento-tile" key={b.t}>
              <h3>{b.t}</h3>
              <p>{b.d}</p>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
