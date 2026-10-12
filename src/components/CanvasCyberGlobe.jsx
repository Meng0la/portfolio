import { useEffect, useRef } from 'react'

// Software projection keeps the rotating globe available without WebGL/GPU support.
export default function CanvasCyberGlobe({ paused }) {
  const canvas=useRef(null), pause=useRef(paused)
  useEffect(()=>{pause.current=paused},[paused])
  useEffect(()=>{
    const el=canvas.current,ctx=el.getContext('2d');if(!ctx)return
    const size=300,dpr=Math.min(window.devicePixelRatio||1,2);el.width=size*dpr;el.height=size*dpr;ctx.scale(dpr,dpr)
    let raf,angle=.4,last=0,visible=true,dead=false
    const rows=10,columns=20,points=[]
    for(let row=0;row<=rows;row++)for(let col=0;col<columns;col++){
      const lat=Math.PI*row/rows,lon=2*Math.PI*(col+(row%2)*.5)/columns
      points.push({x:Math.sin(lat)*Math.cos(lon),y:Math.cos(lat),z:Math.sin(lat)*Math.sin(lon)})
    }
    const draw=now=>{
      if(dead)return
      const dt=last?Math.min((now-last)/1000,.06):0;last=now
      if(visible&&!document.hidden){
        if(!pause.current)angle+=dt*.19
        ctx.clearRect(0,0,size,size);const cx=150,cy=150,r=123
        const glow=ctx.createRadialGradient(cx,cy,r*.7,cx,cy,r*1.18);glow.addColorStop(0,'rgba(57,136,255,0)');glow.addColorStop(.75,'rgba(57,136,255,.13)');glow.addColorStop(1,'rgba(57,136,255,0)');ctx.fillStyle=glow;ctx.fillRect(0,0,size,size)
        const sphere=ctx.createRadialGradient(108,90,6,155,154,132);sphere.addColorStop(0,'#3566b4');sphere.addColorStop(.33,'#193b7b');sphere.addColorStop(.75,'#0b1d45');sphere.addColorStop(1,'#030d22');ctx.beginPath();ctx.arc(cx,cy,r,0,Math.PI*2);ctx.fillStyle=sphere;ctx.fill();ctx.save();ctx.clip()
        const projected=points.map(p=>{const x=p.x*Math.cos(angle)+p.z*Math.sin(angle),z=-p.x*Math.sin(angle)+p.z*Math.cos(angle);return{x:cx+x*r,y:cy-p.y*r,z}})
        for(let row=0;row<rows;row++)for(let col=0;col<columns;col++){
          const ids=[row*columns+col,row*columns+(col+1)%columns,(row+1)*columns+col]
          const ps=ids.map(i=>projected[i]);const z=ps.reduce((a,p)=>a+p.z,0)/3;if(z<-.08)continue
          ctx.beginPath();ps.forEach((p,i)=>i?ctx.lineTo(p.x,p.y):ctx.moveTo(p.x,p.y));ctx.closePath();ctx.strokeStyle=`rgba(102,213,255,${.11+Math.max(0,z)*.39})`;ctx.lineWidth=.65;ctx.stroke()
        }
        projected.forEach((p,i)=>{if(p.z<.15||i%3)return;ctx.beginPath();ctx.arc(p.x,p.y,1+Math.max(0,p.z)*.9,0,Math.PI*2);ctx.fillStyle=`rgba(158,237,255,${p.z*.75})`;ctx.fill()})
        ctx.restore();ctx.beginPath();ctx.arc(cx,cy,r,0,Math.PI*2);ctx.strokeStyle='rgba(130,205,255,.55)';ctx.lineWidth=1;ctx.stroke()
      }
      raf=requestAnimationFrame(draw)
    }
    const io=new IntersectionObserver(([e])=>visible=e.isIntersecting);io.observe(el);raf=requestAnimationFrame(draw)
    return()=>{dead=true;cancelAnimationFrame(raf);io.disconnect()}
  },[])
  return <canvas className="software-globe" ref={canvas} aria-hidden="true" />
}
