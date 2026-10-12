import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import { Pause, Play } from 'lucide-react'
import { useT } from '../i18n'

export default function HeroScene() {
  const { lang } = useT()
  const reduced = useReducedMotion()
  const [paused, setPaused] = useState(false)
  const [fallback, setFallback] = useState(false)
  const host = useRef(null)
  const controls = useRef({ paused: true, x: 0, y: 0 })
  const pt = lang === 'pt'
  useEffect(()=>{controls.current.paused=paused||!!reduced;if(paused||reduced){controls.current.x=0;controls.current.y=0}},[paused,reduced])
  useEffect(()=>{
    let cancelled=false,cleanup
    import('./CyberSculpture').then(({createCyberSculpture})=>{if(!cancelled)cleanup=createCyberSculpture(host.current,controls,()=>setFallback(true))}).catch(()=>{if(!cancelled)setFallback(true)})
    return ()=>{cancelled=true;cleanup?.()}
  },[])
  const follow=event=>{
    if(reduced||paused||event.pointerType!=='mouse')return
    const box=event.currentTarget.getBoundingClientRect();controls.current.x=(event.clientX-box.left)/box.width-.5;controls.current.y=(event.clientY-box.top)/box.height-.5
  }
  return (
    <div className={`hero-scene cyber-sculpture ${paused||reduced?'is-paused':''}`} onPointerMove={follow} onPointerLeave={()=>{controls.current.x=0;controls.current.y=0}}>
      <div className="scene-grid" aria-hidden="true" />
      <div className="scene-coordinates" aria-hidden="true"><span>GM / CYBER CORE</span><span>WEBGL / 3D</span></div>
      <div className="sculpture-canvas" ref={host} />
      {fallback&&<div className="sculpture-fallback" aria-hidden="true"><div className="fallback-sphere"/><img src={`${import.meta.env.BASE_URL}assets/cyber-hand-realistic.webp`} alt="" /></div>}
      <p className="sr-only">{pt?'Esfera cyber tridimensional girando sobre uma mão anatômica holográfica em concha, sustentando o globo.':'A three-dimensional cyber sphere rotating above an animated anatomical holographic hand cradling the globe.'}</p>
      <div className="scene-bottom"><span>{pt?'Mova o cursor para explorar':'Move your cursor to explore'}</span><button type="button" disabled={!!reduced} aria-pressed={paused||!!reduced} onClick={()=>setPaused(!paused)}>
        {paused||reduced?<Play size={13}/>:<Pause size={13}/>}{reduced?(pt?'Movimento reduzido':'Reduced motion'):paused?(pt?'Retomar':'Resume'):(pt?'Pausar':'Pause')}
      </button></div>
    </div>
  )
}
