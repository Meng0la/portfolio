import { createContext, useContext, useEffect, useState } from 'react'
import { ui } from './data/content'

const LangContext = createContext(null)

export function LangProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try {
      const saved = localStorage.getItem('lang')
      if (saved === 'pt' || saved === 'en') return saved
      return navigator.language?.toLowerCase().startsWith('en') ? 'en' : 'pt'
    } catch {
      return 'pt'
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem('lang', lang)
    } catch {
      /* ignore */
    }
    document.documentElement.lang = lang === 'en' ? 'en' : 'pt-BR'
  }, [lang])

  // Resolve campos bilíngues { pt, en } → string do idioma atual
  const L = (value) =>
    value && typeof value === 'object' && ('pt' in value || 'en' in value)
      ? value[lang] ?? value.pt ?? value.en
      : value

  const toggle = () => setLang((l) => (l === 'pt' ? 'en' : 'pt'))

  return (
    <LangContext.Provider value={{ lang, setLang, toggle, L, t: ui[lang] }}>
      {children}
    </LangContext.Provider>
  )
}

export function useT() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useT must be used within LangProvider')
  return ctx
}
