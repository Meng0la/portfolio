import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { caseStudy as cs } from '../data/content'
import { useT } from '../i18n'
import { Reveal, SectionHead } from './ui'

function Lightbox({ shot, onClose }) {
  const { L } = useT()

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
    <motion.div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={L(shot.title)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <button className="lightbox-close" type="button" onClick={onClose} aria-label="Fechar">✕</button>
      <figure className="lightbox-figure" onClick={(e) => e.stopPropagation()}>
        <img src={shot.src} width={shot.width} height={shot.height} alt={L(shot.alt)} />
        <figcaption>{L(shot.caption)}</figcaption>
      </figure>
    </motion.div>
  )
}

export default function CaseStudy() {
  const { L } = useT()
  const [open, setOpen] = useState(null)

  return (
    <section className="section section-dark" id="estudo-de-caso">
      <div className="container">
        <SectionHead eyebrow={L(cs.eyebrow)} title={L(cs.title)} sub={L(cs.sub)} />

        <Reveal className="case-lead">
          <h3>{L(cs.contextTitle)}</h3>
          <p>{L(cs.context)}</p>
        </Reveal>

        <div className="case-split">
          <Reveal as="figure" className="case-diagram">
            <img
              src={cs.diagram.src}
              width={cs.diagram.width}
              height={cs.diagram.height}
              alt={L(cs.diagram.alt)}
              loading="lazy"
            />
            <figcaption>{L(cs.diagram.caption)}</figcaption>
          </Reveal>

          <div className="case-side">
            <Reveal>
              <h3>{L(cs.analyzedTitle)}</h3>
              <ul className="case-list">
                {L(cs.analyzed).map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </Reveal>
            <Reveal>
              <h3>{L(cs.toolsTitle)}</h3>
              <div className="case-tags">
                {cs.tools.map((tool, i) => (
                  <span key={i}>{L(tool)}</span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal className="case-evidence-head">
          <h3>{L(cs.evidenceTitle)}</h3>
          <p>{L(cs.evidenceHint)}</p>
        </Reveal>

        <div className="case-shots">
          {cs.shots.map((shot) => (
            <Reveal as="button" type="button" className="case-shot" key={shot.src} onClick={() => setOpen(shot)}>
              <img
                src={shot.src}
                width={shot.width}
                height={shot.height}
                alt={L(shot.alt)}
                loading="lazy"
              />
              <span className="case-shot-text">
                <strong>{L(shot.title)}</strong>
                <span>{L(shot.caption)}</span>
              </span>
            </Reveal>
          ))}
        </div>

        <div className="case-wrap-up">
          <Reveal>
            <h3>{L(cs.resultTitle)}</h3>
            <p>{L(cs.result)}</p>
          </Reveal>
          <Reveal>
            <h3>{L(cs.learnedTitle)}</h3>
            <ul className="case-list">
              {L(cs.learned).map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </Reveal>
        </div>

        <p className="case-note">{L(cs.note)}</p>
      </div>

      <AnimatePresence>
        {open && <Lightbox shot={open} onClose={() => setOpen(null)} />}
      </AnimatePresence>
    </section>
  )
}
