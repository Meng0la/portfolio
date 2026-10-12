import handImage from '../assets/cyber-hand-realistic.webp'
import * as THREE from 'three'

export function createCyberSculpture(host, controls, onFallback, onReady) {
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
  const neon = new THREE.MeshBasicMaterial({ color: 0x83d7ff })
  const violet = new THREE.MeshBasicMaterial({ color: 0xb496ff })
  const mesh = (parent, geo, material, position, scale) => {
    const m = new THREE.Mesh(geo, material); if(position)m.position.set(...position); if(scale)m.scale.set(...scale);parent.add(m);return m
  }
  const root = new THREE.Group(); scene.add(root)
  const ball = new THREE.Group(); ball.position.set(0,.42,0); root.add(ball)
  mesh(ball,new THREE.IcosahedronGeometry(.94,3),new THREE.MeshStandardMaterial({ color:0x182b58,metalness:.55,roughness:.24,flatShading:true }))
  const lattice = new THREE.LineSegments(new THREE.WireframeGeometry(new THREE.IcosahedronGeometry(.963,2)),new THREE.LineBasicMaterial({color:0x89bfff,transparent:true,opacity:.5}));ball.add(lattice)
  // Discrete nodes and illuminated panels move with the sphere, not around it.
  for(let i=0;i<32;i++) {
    const y=1-(i+.5)/32*2, r=Math.sqrt(1-y*y), a=i*2.399963229728653
    const p=new THREE.Vector3(Math.cos(a)*r,y,Math.sin(a)*r).multiplyScalar(.975)
    mesh(ball,new THREE.SphereGeometry(i%4===0?.026:.012,8,8),i%3===0?violet:neon,p.toArray())
    if(i%4===0){const panel=mesh(ball,new THREE.PlaneGeometry(.12,.04),neon,p.clone().multiplyScalar(1.004).toArray());panel.lookAt(p.clone().multiplyScalar(2))}
  }
  // A high-detail anatomical holographic hand cutout replaces primitive robot geometry.
  const hand = new THREE.Group(); hand.position.set(0,-.88,.76); root.add(hand)
  let handTexture, alive=true
  const handMaterial = new THREE.MeshBasicMaterial({ transparent:true, depthWrite:false, side:THREE.DoubleSide, toneMapped:false })
  const handPlane=mesh(hand,new THREE.PlaneGeometry(2.75,1.72),handMaterial,[0,0,0])
  handPlane.visible=false
  new THREE.TextureLoader().load(handImage,texture=>{
    if(!alive){texture.dispose();return}
    texture.colorSpace=THREE.SRGBColorSpace;handTexture=texture;handMaterial.map=texture;handMaterial.needsUpdate=true;handPlane.visible=true;onReady?.()
  },undefined,()=>{if(alive)onFallback()})
  const motes=new THREE.Group();root.add(motes)
  for(let i=0;i<18;i++){const p=mesh(motes,new THREE.SphereGeometry(.008,6,4),i%2?neon:violet,[(Math.sin(i*8.1))*1.5,Math.cos(i*2.3)*1.5,Math.sin(i*3)*.9]);p.userData.baseY=p.position.y}
  let visible=true,elapsed=0,previous=0
  const resize=()=>{const {width,height}=host.getBoundingClientRect();if(!width||!height)return;renderer.setSize(width,height,false);camera.aspect=width/height;camera.updateProjectionMatrix();renderer.render(scene,camera)}
  const ro=new ResizeObserver(resize);ro.observe(host);resize()
  const io=new IntersectionObserver(([e])=>{visible=e.isIntersecting});io.observe(host)
  renderer.setAnimationLoop(now=>{
    const dt=previous?Math.min((now-previous)/1000,.05):0;previous=now
    if(!visible||document.hidden)return
    if(!controls.current.paused){elapsed+=dt;ball.rotation.y=elapsed*.26;ball.rotation.z=Math.sin(elapsed*.25)*.025;
      const lift=Math.sin(elapsed*.85)*.022;ball.position.y=.42+lift;hand.position.y=-.88+lift;hand.rotation.z=Math.sin(elapsed*.65)*.012
      motes.children.forEach((p,i)=>p.position.y=p.userData.baseY+Math.sin(elapsed*.5+i)*.05)
    }
    root.rotation.y+=(controls.current.x*.22-root.rotation.y)*.05
    root.rotation.x+=(controls.current.y*.1-root.rotation.x)*.05
    renderer.render(scene,camera)
  })
  const lost=event=>{event.preventDefault();onFallback()};renderer.domElement.addEventListener('webglcontextlost',lost)
  return ()=>{alive=false;handTexture?.dispose();ro.disconnect();io.disconnect();renderer.setAnimationLoop(null);renderer.domElement.removeEventListener('webglcontextlost',lost);const geometries=new Set(),materials=new Set();scene.traverse(o=>{if(o.geometry)geometries.add(o.geometry);if(o.material)(Array.isArray(o.material)?o.material:[o.material]).forEach(m=>materials.add(m))});geometries.forEach(g=>g.dispose());materials.forEach(m=>m.dispose());renderer.dispose();renderer.domElement.remove()}
}
