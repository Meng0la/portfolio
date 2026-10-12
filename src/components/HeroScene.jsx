import { useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import { Pause, Play } from 'lucide-react'
import { useT } from '../i18n'

export default function HeroScene() {
  const { lang } = useT()
  const reduced = useReducedMotion()
  const [paused, setPaused] = useState(false)
  const scene = useRef(null)
  const pt = lang === 'pt'
  const follow = (event) => {
    if (reduced || paused || event.pointerType !== 'mouse') return
    const box = event.currentTarget.getBoundingClientRect()
    scene.current.style.setProperty('--pointer-y', `${((event.clientX - box.left) / box.width - .5) * 24}deg`)
    scene.current.style.setProperty('--pointer-x', `${-((event.clientY - box.top) / box.height - .5) * 18}deg`)
  }
  const reset = () => {
    scene.current?.style.setProperty('--pointer-y', '0deg')
    scene.current?.style.setProperty('--pointer-x', '0deg')
  }
  return (
    <div className={`hero-scene ${paused || reduced ? 'is-paused' : ''}`} ref={scene} onPointerMove={follow} onPointerLeave={reset}>
      <div className="scene-grid" aria-hidden="true" />
      <div className="scene-coordinates" aria-hidden="true"><span>GM / SYSTEM CORE</span><span>01 — 03</span></div>
      <div className="scene-camera" aria-hidden="true"><div className="scene-parallax">
        <div className="core-orbit orbit-one" /><div className="core-orbit orbit-two" />
        <div className="core-float"><div className="core-cube">
          <div className="cube-face face-front"><span className="cube-glyph">GM<span>ENGINEERED TO CONNECT</span></span></div>
          <div className="cube-face face-back"><span className="cube-glyph">{'</>'}</span></div>
          <div className="cube-face face-right"><span className="cube-glyph">{'{}'}<span>BUILD / AUTOMATE</span></span></div>
          <div className="cube-face face-left"><span className="cube-glyph">01<span>SECURE / EVOLVE</span></span></div>
          <div className="cube-face face-top"><span className="cube-chip" /></div>
          <div className="cube-face face-bottom"><span className="cube-chip" /></div>
        </div></div>
      </div></div>
      <div className="scene-shadow" aria-hidden="true" />
      <span className="scene-label label-backend" aria-hidden="true"><i /> BACKEND</span>
      <span className="scene-label label-security" aria-hidden="true"><i /> SECURITY</span>
      <span className="scene-label label-automation" aria-hidden="true"><i /> AUTOMATION</span>
      <p className="sr-only">{pt ? 'Cubo tridimensional com seis faces, anéis orbitais e as iniciais GM.' : 'Three-dimensional cube with six faces, orbital rings and the initials GM.'}</p>
      <div className="scene-bottom"><span>{pt ? 'Mova o cursor para explorar' : 'Move your cursor to explore'}</span><button type="button" disabled={!!reduced} aria-pressed={paused || !!reduced} onClick={() => { reset(); setPaused(!paused) }}>
        {paused || reduced ? <Play size={13} /> : <Pause size={13} />}
        {reduced ? (pt ? 'Movimento reduzido' : 'Reduced motion') : paused ? (pt ? 'Retomar' : 'Resume') : (pt ? 'Pausar' : 'Pause')}
      </button></div>
    </div>
  )
}
