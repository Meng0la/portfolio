import { useEffect, useRef, useState } from 'react'
import { statusLabels } from '../data/content'
import { useT } from '../i18n'

/* Reveal on scroll via IntersectionObserver */
export function Reveal({ children, as: Tag = 'div', className = '', ...rest }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true)
      return
    }
    // Se já estiver na viewport ao montar (ex.: abrir direto numa âncora), revela na hora
    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight * 0.92 && rect.bottom > 0) {
      setVisible(true)
      return
    }
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          obs.unobserve(el)
        }
      },
      { threshold: 0.12 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <Tag ref={ref} className={`reveal ${visible ? 'visible' : ''} ${className}`.trim()} {...rest}>
      {children}
    </Tag>
  )
}

export function StatusPill({ status }) {
  const { lang } = useT()
  const s = statusLabels[status] || statusLabels.estudo
  return <span className={`status ${s.cls}`}>{s[lang]}</span>
}

/* Cabeçalho de seção centralizado (estilo Apple) */
export function SectionHead({ eyebrow, title, sub }) {
  return (
    <Reveal className="section-head">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {sub && <p className="sub">{sub}</p>}
    </Reveal>
  )
}
