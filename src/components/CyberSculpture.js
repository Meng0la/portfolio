import * as THREE from 'three'

export function createCyberSculpture(host, controls, onFallback) {
  let renderer
  try { renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'low-power' }) }
  catch { onFallback(); return () => {} }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.6))
  renderer.outputColorSpace = THREE.SRGBColorSpace
  renderer.toneMapping = THREE.ACESFilmicToneMapping
  renderer.toneMappingExposure = 1.4
  renderer.domElement.setAttribute('aria-hidden', 'true')
  host.appendChild(renderer.domElement)
  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(37, 1, .1, 30)
  camera.position.set(0, 1.05, 7.8)
  camera.lookAt(0, -.22, 0)
  scene.add(new THREE.HemisphereLight(0xb2ceff, 0x201b4c, 2.7))
  const light = (color, intensity, x, y, z) => { const l = new THREE.PointLight(color, intensity, 20); l.position.set(x,y,z); scene.add(l) }
  light(0x72c9ff, 30, -3, 3, 4); light(0xb79aff, 28, 3, 1, 2); light(0x397bff, 14, 0, -2, 3)
  const metal = new THREE.MeshStandardMaterial({ color: 0x7389b0, metalness: .65, roughness: .27 })
  const armor = new THREE.MeshStandardMaterial({ color: 0x263a63, metalness: .65, roughness: .32 })
  const neon = new THREE.MeshBasicMaterial({ color: 0x83d7ff })
  const violet = new THREE.MeshBasicMaterial({ color: 0xb496ff })
  const black = new THREE.MeshStandardMaterial({ color: 0x101a31, roughness: .5, metalness: .45 })
  const mesh = (parent, geo, material, position, scale) => {
    const m = new THREE.Mesh(geo, material); if(position)m.position.set(...position); if(scale)m.scale.set(...scale);parent.add(m);return m
  }
  const root = new THREE.Group(); scene.add(root)
  const ball = new THREE.Group(); ball.position.set(0,.7,0); root.add(ball)
  mesh(ball,new THREE.IcosahedronGeometry(.94,3),new THREE.MeshStandardMaterial({ color:0x182b58,metalness:.55,roughness:.24,flatShading:true }))
  const lattice = new THREE.LineSegments(new THREE.WireframeGeometry(new THREE.IcosahedronGeometry(.963,2)),new THREE.LineBasicMaterial({color:0x89bfff,transparent:true,opacity:.5}));ball.add(lattice)
  // Discrete nodes and illuminated panels move with the sphere, not around it.
  for(let i=0;i<32;i++) {
    const y=1-(i+.5)/32*2, r=Math.sqrt(1-y*y), a=i*2.399963229728653
    const p=new THREE.Vector3(Math.cos(a)*r,y,Math.sin(a)*r).multiplyScalar(.975)
    mesh(ball,new THREE.SphereGeometry(i%4===0?.026:.012,8,8),i%3===0?violet:neon,p.toArray())
    if(i%4===0){const panel=mesh(ball,new THREE.PlaneGeometry(.12,.04),neon,p.clone().multiplyScalar(1.004).toArray());panel.lookAt(p.clone().multiplyScalar(2))}
  }
  // An articulated robotic hand: wrist, palm, thumb and four jointed fingers.
  const hand = new THREE.Group();hand.position.set(0,-1.12,.15);hand.rotation.set(.28,0,-.12);root.add(hand)
  mesh(hand,new THREE.SphereGeometry(1,24,16),metal,[0,0,0],[.65,.21,.64])
  mesh(hand,new THREE.SphereGeometry(1,24,16),armor,[0,.13,.07],[.55,.12,.46])
  mesh(hand,new THREE.BoxGeometry(.48,.18,.75),metal,[0,-.07,.81])
  mesh(hand,new THREE.BoxGeometry(.39,.025,.55),armor,[0,.035,.83])
  mesh(hand,new THREE.BoxGeometry(.32,.025,.025),neon,[0,.059,.97])
  mesh(hand,new THREE.BoxGeometry(.025,.025,.7),neon,[-.15,.041,.7])
  mesh(hand,new THREE.BoxGeometry(.025,.025,.7),neon,[.15,.041,.7])
  const fingers=[]
  const segment=(parent,len,radius) => {
    mesh(parent,new THREE.SphereGeometry(radius,12,10),black,[0,0,0])
    const bone=mesh(parent,new THREE.CylinderGeometry(radius*.84,radius,len,12),metal,[0,0,-len/2]);bone.rotation.x=Math.PI/2
    mesh(parent,new THREE.BoxGeometry(radius*.95,.032,len*.65),armor,[0,radius*.8,-len*.48])
    mesh(parent,new THREE.BoxGeometry(.017,.016,len*.65),neon,[0,radius*.99,-len*.48])
  }
  ;[-.41,-.14,.14,.41].forEach((x,i)=>{
    const base=new THREE.Group();base.position.set(x,.015,-.43);base.rotation.set(.18, (i-1.5)*-.11,0);hand.add(base)
    const len=[.37,.47,.43,.32][i];segment(base,len,.108)
    const joint=new THREE.Group();joint.position.z=-len;joint.rotation.x=.55;base.add(joint);segment(joint,len*.72,.093)
    const tip=new THREE.Group();tip.position.z=-len*.72;tip.rotation.x=.45;joint.add(tip);segment(tip,len*.53,.079)
    mesh(tip,new THREE.SphereGeometry(.08,12,10),metal,[0,0,-len*.53],[1,1,1.3])
    fingers.push({base,joint,tip,i})
  })
  const thumb=new THREE.Group();thumb.position.set(.53,.015,.19);thumb.rotation.set(.2,-1.1,-.25);hand.add(thumb);segment(thumb,.38,.14)
  const thumbTip=new THREE.Group();thumbTip.position.z=-.38;thumbTip.rotation.x=.6;thumb.add(thumbTip);segment(thumbTip,.31,.115)
  mesh(thumbTip,new THREE.SphereGeometry(.11,12,10),metal,[0,0,-.31],[1,1,1.2])
  // Palm traces emphasize the glove's circuitry without external orbit rings.
  for(const x of [-.24,0,.24])mesh(hand,new THREE.BoxGeometry(.018,.018,.43),neon,[x,.254,-.01])
  const motes=new THREE.Group();root.add(motes)
  for(let i=0;i<18;i++){const p=mesh(motes,new THREE.SphereGeometry(.008,6,4),i%2?neon:violet,[(Math.sin(i*8.1))*1.5,Math.cos(i*2.3)*1.5,Math.sin(i*3)*.9]);p.userData.baseY=p.position.y}
  let visible=true,elapsed=0,previous=0
  const resize=()=>{const {width,height}=host.getBoundingClientRect();if(!width||!height)return;renderer.setSize(width,height,false);camera.aspect=width/height;camera.updateProjectionMatrix();renderer.render(scene,camera)}
  const ro=new ResizeObserver(resize);ro.observe(host);resize()
  const io=new IntersectionObserver(([e])=>{visible=e.isIntersecting});io.observe(host)
  renderer.setAnimationLoop(now=>{
    const dt=previous?Math.min((now-previous)/1000,.05):0;previous=now
    if(!visible||document.hidden)return
    if(!controls.current.paused){elapsed+=dt;ball.rotation.y=elapsed*.26;ball.rotation.z=Math.sin(elapsed*.25)*.08;ball.position.y=.7+Math.sin(elapsed*1.1)*.045;hand.position.y=-1.12+Math.sin(elapsed*.85)*.035;hand.rotation.z=-.12+Math.sin(elapsed*.65)*.025
      fingers.forEach(({joint,tip,i})=>{joint.rotation.x=.55+Math.sin(elapsed*.85+i*.45)*.045;tip.rotation.x=.45+Math.sin(elapsed*.85+i*.45)*.035});thumbTip.rotation.x=.6+Math.sin(elapsed*.8)*.035
      motes.children.forEach((p,i)=>p.position.y=p.userData.baseY+Math.sin(elapsed*.5+i)*.05)
    }
    root.rotation.y+=(controls.current.x*.22-root.rotation.y)*.05
    root.rotation.x+=(controls.current.y*.1-root.rotation.x)*.05
    renderer.render(scene,camera)
  })
  const lost=event=>{event.preventDefault();onFallback()};renderer.domElement.addEventListener('webglcontextlost',lost)
  return ()=>{ro.disconnect();io.disconnect();renderer.setAnimationLoop(null);renderer.domElement.removeEventListener('webglcontextlost',lost);const geometries=new Set(),materials=new Set();scene.traverse(o=>{if(o.geometry)geometries.add(o.geometry);if(o.material)(Array.isArray(o.material)?o.material:[o.material]).forEach(m=>materials.add(m))});geometries.forEach(g=>g.dispose());materials.forEach(m=>m.dispose());renderer.dispose();renderer.domElement.remove()}
}
