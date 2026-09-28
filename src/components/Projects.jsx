import { useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { projects, categoryFilters, filterTabs } from '../data/content'
import { useT } from '../i18n'
import { Reveal, SectionHead, StatusPill } from './ui'

function initials(name) {
  const words = name.replace(/[()]/g, '').split(/\s+/).filter(Boolean)
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase()
  return (words[0][0] + words[1][0]).toUpperCase()
}

/* ---------------------------------------------------------------- Modal ---- */
function ProjectModal({ p, onClose }) {
  const { t, L } = useT()

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <motion.div className="modal-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
      <motion.div
        className="modal-card"
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 60, opacity: 0 }}
        transition={{ type: 'spring', damping: 30, stiffness: 320 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose} aria-label="Fechar">✕</button>

        <div className="modal-meta">
          <span>{p.category}</span>
          <StatusPill status={p.status} />
        </div>
        <h3>{p.name}</h3>
        <p className="modal-lead">{L(p.short)}</p>

        <div className="modal-block">
          <h4>{t.labels.problem}</h4>
          <p>{L(p.problem)}</p>
        </div>

        <div className="modal-block">
          <h4>{t.labels.features}</h4>
          <ul>
            {L(p.features).map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </div>

        <div className="modal-block modal-cols">
          <div>
            <h4>{t.labels.architecture}</h4>
            <p>{L(p.architecture)}</p>
          </div>
          <div>
            <h4>{t.labels.challenge}</h4>
            <p>{L(p.challenges)}</p>
          </div>
        </div>

        <div className="modal-block">
          <h4>{t.labels.demonstrates}</h4>
          <p>{L(p.demonstrates)}</p>
        </div>

        <div className="modal-block">
          <h4>{t.labels.techUsed}</h4>
          <div className="tag-list">
            {p.tech.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
        </div>

        {p.note && <p className="modal-note">{L(p.note)}</p>}

        <div className="modal-actions">
          {p.repo ? (
            <a className="button button-primary" href={p.repo} target="_blank" rel="noreferrer">
              {t.labels.viewRepo} ↗
            </a>
          ) : (
            <span className="button button-ghost" style={{ cursor: 'default' }}>{t.labels.noRepo}</span>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}

/* ------------------------------------------------------------- Destaques ---- */
export function Featured({ onOpen }) {
  const { t, L } = useT()
  const featured = projects.filter((p) => p.featured)
  const trackRef = useRef(null)
  const [index, setIndex] = useState(0)

  const scrollToCard = (i) => {
    const track = trackRef.current
    if (!track) return
    const clamped = Math.max(0, Math.min(i, featured.length - 1))
    const card = track.children[clamped]
    if (card) track.scrollTo({ left: card.offsetLeft - track.offsetLeft, behavior: 'smooth' })
  }

  const onScroll = () => {
    const track = trackRef.current
    if (!track) return
    const center = track.scrollLeft + track.clientWidth / 2
    let best = 0
    let bestDist = Infinity
    ;[...track.children].forEach((c, i) => {
      const cCenter = c.offsetLeft - track.offsetLeft + c.clientWidth / 2
      const d = Math.abs(cCenter - center)
      if (d < bestDist) { bestDist = d; best = i }
    })
    setIndex(best)
  }

  return (
    <section className="section" id="destaques">
      <div className="container">
        <SectionHead eyebrow={t.highlights.eyebrow} title={t.highlights.title} sub={t.highlights.aside} />

        <Reveal className="carousel">
          <div className="carousel-track" ref={trackRef} onScroll={onScroll}>
            {featured.map((p, i) => (
              <button
                key={p.id}
                type="button"
                className={`carousel-card ${i === 0 ? 'dark' : ''}`}
                onClick={() => onOpen(p)}
              >
                <div className="card-meta">
                  <span>{p.category}</span>
                  <StatusPill status={p.status} />
                </div>
                <h3>{p.name}</h3>
                <p>{L(p.short)}</p>
                <ul className="feature-points">
                  {L(p.features).slice(0, 3).map((f, k) => (
                    <li key={k}>{f}</li>
                  ))}
                </ul>
                <div className="tag-list">
                  {p.tech.slice(0, 5).map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
                <span className="featured-hint">{t.labels.viewDetails}</span>
              </button>
            ))}
          </div>

          <div className="carousel-nav">
            <button
              className="carousel-btn"
              type="button"
              aria-label="Anterior"
              disabled={index === 0}
              onClick={() => scrollToCard(index - 1)}
            >
              ‹
            </button>
            <div className="carousel-dots">
              {featured.map((p, i) => (
                <button
                  key={p.id}
                  type="button"
                  className={`carousel-dot ${i === index ? 'on' : ''}`}
                  aria-label={`Ir ao card ${i + 1}`}
                  onClick={() => scrollToCard(i)}
                />
              ))}
            </div>
            <button
              className="carousel-btn"
              type="button"
              aria-label="Próximo"
              disabled={index === featured.length - 1}
              onClick={() => scrollToCard(index + 1)}
            >
              ›
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* --------------------------------------------------------- Todos projetos ---- */
export function AllProjects({ onOpen }) {
  const { t, L } = useT()
  const [active, setActive] = useState('all')

  const list = useMemo(() => {
    if (active === 'all') return projects
    return projects.filter((p) => (categoryFilters[p.category] || []).includes(active))
  }, [active])

  return (
    <section className="section section-tonal" id="projetos">
      <div className="container">
        <SectionHead eyebrow={t.projects.eyebrow} title={t.projects.title} sub={t.projects.aside} />

        <div className="filters" role="group" aria-label="Filter">
          {filterTabs.map((f) => (
            <button
              key={f.key}
              type="button"
              className={`filter-button ${active === f.key ? 'active' : ''}`}
              onClick={() => setActive(f.key)}
            >
              {L(f)}
            </button>
          ))}
        </div>

        <motion.div layout className="project-grid">
          <AnimatePresence mode="popLayout">
            {list.map((p) => (
              <motion.button
                key={p.id}
                layout
                type="button"
                onClick={() => onOpen(p)}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.28 }}
                className="project-card"
              >
                <div className="project-top">
                  <span className="project-icon">{initials(p.name)}</span>
                  <StatusPill status={p.status} />
                </div>
                <h3>{p.name}</h3>
                <p>{L(p.short)}</p>
                <div className="tag-list">
                  {p.tech.slice(0, 3).map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
                {p.repo ? (
                  <span className="card-cta">{t.labels.viewDetails}</span>
                ) : (
                  <span className="card-note">{t.labels.internal}</span>
                )}
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

/* ---------------------------------------------------------- Provider (modal) */
export function ProjectsProvider({ children }) {
  const [selected, setSelected] = useState(null)
  return (
    <>
      {children({ onOpen: setSelected })}
      <AnimatePresence>
        {selected && <ProjectModal p={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </>
  )
}
