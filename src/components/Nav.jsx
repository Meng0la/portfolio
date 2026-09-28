import { useEffect, useState } from 'react'
import { profile } from '../data/content'
import { useT } from '../i18n'

export default function Nav() {
  const { t, lang, setLang } = useT()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  const links = [
    { href: '#sobre', label: t.nav.about },
    { href: '#tecnologias', label: t.nav.tech },
    { href: '#destaques', label: t.nav.highlights },
    { href: '#projetos', label: t.nav.projects },
    { href: '#experiencia', label: t.nav.experience },
    { href: '#formacao', label: t.nav.education },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = [...document.querySelectorAll('main section[id]')]
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-40% 0px -55% 0px' },
    )
    sections.forEach((s) => obs.observe(s))
    return () => obs.disconnect()
  }, [])

  const close = () => setOpen(false)

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`} id="inicio">
      <div className="container nav-wrap">
        <a className="brand" href="#inicio" aria-label={profile.name}>
          <span className="brand-mark" aria-hidden="true">GM</span>
          <span>Gabriel Mengue</span>
        </a>

        <nav className={`main-nav ${open ? 'open' : ''}`} id="main-nav">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={close} className={active === l.href.slice(1) ? 'active' : ''}>
              {l.label}
            </a>
          ))}
          <a className="nav-cta" href="#contato" onClick={close}>
            {t.nav.contact}
          </a>
        </nav>

        <div className="nav-right">
          <button
            className="lang-toggle"
            type="button"
            onClick={() => setLang(lang === 'pt' ? 'en' : 'pt')}
            aria-label={lang === 'pt' ? 'Switch to English' : 'Mudar para Português'}
          >
            <span className={lang === 'pt' ? 'on' : ''}>PT</span>
            <span className={lang === 'en' ? 'on' : ''}>EN</span>
          </button>
          <button
            className="menu-button"
            type="button"
            aria-expanded={open}
            aria-controls="main-nav"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </header>
  )
}
