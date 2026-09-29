import { profile, stack, competencies, education } from '../data/content'
import { useT } from '../i18n'
import { Reveal, SectionHead } from './ui'

export function About() {
  const { t, L } = useT()
  return (
    <section className="section" id="sobre">
      <div className="container">
        <SectionHead eyebrow={t.about.eyebrow} title={t.about.title} />
        <Reveal className="about-lead">
          <p>{L(profile.intro)}</p>
          <p>{t.about.body2}</p>
        </Reveal>
        <Reveal className="interest-grid">
          {t.about.interests.map((i) => (
            <span key={i}>{i}</span>
          ))}
        </Reveal>
      </div>
    </section>
  )
}

export function Stack() {
  const { t, L } = useT()
  return (
    <section className="section section-tonal" id="tecnologias">
      <div className="container">
        <SectionHead eyebrow={t.tech.eyebrow} title={t.tech.title} sub={t.tech.aside} />
        <div className="tech-grid">
          {stack.map((group, i) => (
            <Reveal as="article" className="tech-card" key={L(group.area)}>
              <span className="tech-index">{String(i + 1).padStart(2, '0')}</span>
              <h3>{L(group.area)}</h3>
              <p>{group.items.join(' · ')}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Competencies() {
  const { t, L } = useT()
  return (
    <section className="section" id="competencias">
      <div className="container">
        <SectionHead eyebrow={t.experience.eyebrow} title={t.experience.title} />
        <div className="capability-grid">
          {competencies.map((c, i) => (
            <Reveal as="article" className="capability" key={L(c.title)}>
              <span>{String(i + 1).padStart(2, '0')}</span>
              <h3>{L(c.title)}</h3>
              <p>{L(c.body)}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Education() {
  const { t, L } = useT()
  return (
    <section className="section section-tonal" id="formacao">
      <div className="container">
        <SectionHead eyebrow={t.education.eyebrow} title={t.education.title} />
        <div className="edu-list">
          {education.map((e) => (
            <Reveal as="article" className="edu-item" key={L(e.course)}>
              <div>
                <h3>{L(e.course)}</h3>
                <div className="edu-inst">{L(e.institution)}</div>
              </div>
              <span className="edu-period">{L(e.period)}</span>
              <p>{L(e.detail)}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Contact() {
  const { t, L } = useT()
  return (
    <>
      <section className="section contact" id="contato">
        <Reveal className="container">
          <p className="eyebrow" style={{ color: 'var(--blue-ink)', fontWeight: 600, marginBottom: 10 }}>
            {t.contact.eyebrow}
          </p>
          <h2>{t.contact.title}</h2>
          <p className="sub">{t.contact.body}</p>
          <div className="contact-actions">
            <a className="button button-primary" href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a className="button button-ghost" href={`https://wa.me/${profile.phoneHref.replace(/\D/g, '')}`} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
            <a className="button button-ghost" href={profile.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className="button button-ghost" href={`mailto:${profile.email}`}>
              E-mail
            </a>
          </div>
          <p className="contact-info">
            {L(profile.location)} · {profile.phone} · {profile.email}
          </p>
        </Reveal>
      </section>

      <footer className="site-footer">
        <div className="container">
          <p>© {new Date().getFullYear()} {profile.name}</p>
          <p>{t.footer}</p>
        </div>
      </footer>
    </>
  )
}
