import React, { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

type Props = {
  atomicNumber: number; // átomo neutro => nº electrones
  size?: number;
};

const COLOR_NUCLEO_BASE = "#ff0000";
const COLOR_NUCLEO_SHADOW = "#c62131";
const COLOR_NUCLEO_EMISSIVE = "#700b1c";
const COLOR_ELECTRON_ACCENT = "#2c7797";
const COLOR_ELECTRON_SPRITE = "#f55283";
const COLOR_ORBITA = "#3b3b3b";

const COLOR_ELECTRON_GLOW_INNER = "rgba(56,189,248,0.95)";
const COLOR_ELECTRON_GLOW_MID = "rgba(14,165,233,0.55)";
const COLOR_ELECTRON_GLOW_OUTER = "rgba(8,10,14,0.92)";

const SHELL_CAPS = [2, 8, 18, 32, 32, 18, 8];

function distributeElectrons(z: number): number[] {
  let remaining = Math.max(0, Math.floor(z));
  const shells: number[] = [];
  for (const cap of SHELL_CAPS) {
    if (remaining <= 0) break;
    const n = Math.min(cap, remaining);
    shells.push(n);
    remaining -= n;
  }
  if (remaining > 0) shells.push(remaining);
  return shells;
}

// Para no petar la UI con 32 electrones visibles, limitamos puntos pero
// mantenemos el total para UI/tooltip si quieres.
function clampDots(n: number) {
  const MAX = 18; // un poco más generoso que 12
  return { dots: Math.min(n, MAX), total: n, clamped: n > MAX };
}

// Crea una textura circular suave para electron glow (sin assets externos)
function makeGlowTexture(size = 128) {
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d")!;
  const r = size / 2;

  const grad = ctx.createRadialGradient(r, r, 0, r, r, r);
  grad.addColorStop(0, COLOR_ELECTRON_GLOW_INNER);
  grad.addColorStop(0.25, COLOR_ELECTRON_GLOW_MID);
  grad.addColorStop(1, COLOR_ELECTRON_GLOW_OUTER);

  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.arc(r, r, r, 0, Math.PI * 2);
  ctx.fill();

  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.needsUpdate = true;
  return tex;
}

const AtomAnimation: React.FC<Props> = ({ atomicNumber, size = 180 }) => {
  const shells = useMemo(() => distributeElectrons(atomicNumber), [atomicNumber]);
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // --- Scene / Camera / Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 1000);
    camera.position.set(0, 0, 26);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(size, size);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    mount.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.07;
    controls.enablePan = false;
    controls.minDistance = 18;
    controls.maxDistance = 42;
    controls.rotateSpeed = 0.85;
    controls.target.set(0, 0, 0);
    controls.update();

    // --- Lights (suaves, con un rim light)
    const ambient = new THREE.AmbientLight(0xffffff, 0.40);
    const key = new THREE.PointLight(0xffd4d4, 1.35, 120);
    key.position.set(10, 8, 18);

    const rim = new THREE.PointLight(0x7f1d1d, 1.3, 120);
    rim.position.set(-12, -8, -16);

    const fill = new THREE.PointLight(0xfda4af, 0.75, 90);
    fill.position.set(0, -6, 10);

    scene.add(ambient, key, rim, fill);

    // --- Nucleus (más “orgánico”: un core + halo)
    const nucleus = new THREE.Group();

    const core = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.35, 3),
      new THREE.MeshPhysicalMaterial({
        color: COLOR_NUCLEO_BASE,
        emissive: COLOR_NUCLEO_EMISSIVE,
        emissiveIntensity: 0.85,
        metalness: 0.18,
        roughness: 0.58,
        clearcoat: 0.28,
        clearcoatRoughness: 0.44,
      })
    );
    nucleus.add(core);

    const coreShadow = new THREE.Mesh(
      new THREE.SphereGeometry(1.5, 28, 28),
      new THREE.MeshStandardMaterial({
        color: COLOR_NUCLEO_SHADOW,
        transparent: true,
        opacity: 0.5,
        roughness: 0.9,
        metalness: 0.05,
      })
    );
    coreShadow.scale.setScalar(1.06);
    nucleus.add(coreShadow);

    const halo = new THREE.Mesh(
      new THREE.SphereGeometry(1.85, 24, 24),
      new THREE.MeshBasicMaterial({
        color: COLOR_ELECTRON_ACCENT,
        transparent: true,
        opacity: 0.10,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      })
    );
    nucleus.add(halo);

    scene.add(nucleus);

    // --- Shared geometries/materials (performance)
    const glowTex = makeGlowTexture(128);

    const electronMat = new THREE.SpriteMaterial({
      map: glowTex,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      opacity: 0.95,
      color: new THREE.Color(COLOR_ELECTRON_SPRITE),
    });

    const ringMat = new THREE.LineBasicMaterial({
      color: COLOR_ORBITA,
      transparent: true,
      opacity: 0.65,
    });

    const trailMat = new THREE.LineBasicMaterial({
      color: COLOR_ORBITA,
      transparent: true,
      opacity: 0.4,
      blending: THREE.AdditiveBlending,
    });

    // --- Orbital groups per shell
    type ShellRuntime = {
      group: THREE.Group;              // contains ring + electrons + trails
      radius: number;
      speed: number;
      precession: number;              // how fast plane rotates
      phases: number[];
      electrons: THREE.Sprite[];
      trails: { line: THREE.Line; points: THREE.Vector3[] }[];
      tiltA: number;
      tiltB: number;
    };

    const orbitRuntimes: ShellRuntime[] = [];

    // helper: ring line points
    function makeRing(radius: number, segments = 160) {
      const pts: THREE.Vector3[] = [];
      for (let i = 0; i <= segments; i++) {
        const t = (i / segments) * Math.PI * 2;
        pts.push(new THREE.Vector3(Math.cos(t) * radius, 0, Math.sin(t) * radius));
      }
      const geom = new THREE.BufferGeometry().setFromPoints(pts);
      return new THREE.Line(geom, ringMat);
    }

    function randomSeeded(n: number) {
      // deterministic-ish based on atomicNumber + shell index
      const x = Math.sin(n * 999) * 10000;
      return x - Math.floor(x);
    }

    shells.forEach((count, shellIndex) => {
      const { dots } = clampDots(count);

      const group = new THREE.Group();
      scene.add(group);

      // radii con mejor espaciado visual
      const radius = 3.4 + shellIndex * 1.95;

      // ring como línea, no torus
      const ring = makeRing(radius);
      group.add(ring);

      // inclinaciones por capa
      const rA = randomSeeded(atomicNumber * 10 + shellIndex * 3 + 1);
      const rB = randomSeeded(atomicNumber * 10 + shellIndex * 3 + 2);

      const tiltA = THREE.MathUtils.lerp(0.25, 1.05, rA); // eje X
      const tiltB = THREE.MathUtils.lerp(-0.9, 0.9, rB);  // eje Z
      group.rotation.x = tiltA;
      group.rotation.z = tiltB;

      // velocidades (un poco más rápidas dentro, más lentas fuera)
      const base = 1.15;
      const speed = base * (1 / (1 + shellIndex * 0.35)); // decay suave
      const precession = 0.18 * (0.45 + shellIndex * 0.10); // plano gira lento

      const electrons: THREE.Sprite[] = [];
      const phases: number[] = [];

      // trails: guardamos N puntos por electrón
      const trails: { line: THREE.Line; points: THREE.Vector3[] }[] = [];
      const TRAIL_POINTS = 24;

      for (let i = 0; i < dots; i++) {
        const e = new THREE.Sprite(electronMat);
        // tamaño del glow
        const s = 0.9;
        e.scale.set(s, s, 1);
        group.add(e);
        electrons.push(e);

        phases.push((Math.PI * 2 * i) / dots);

        // trail line (buffer dinámico)
        const pts = Array.from({ length: TRAIL_POINTS }, () => new THREE.Vector3(0, 0, 0));
        const geom = new THREE.BufferGeometry().setFromPoints(pts);
        const line = new THREE.Line(geom, trailMat);
        group.add(line);
        trails.push({ line, points: pts });
      }

      orbitRuntimes.push({
        group,
        radius,
        speed,
        precession,
        phases,
        electrons,
        trails,
        tiltA,
        tiltB,
      });
    });

    // --- Animation loop
    const clock = new THREE.Clock();
    let frameId = 0;

    const tmpPos = new THREE.Vector3();

    const animate = () => {
      const t = clock.getElapsedTime();

      // nucleus “vida” (respira y rota)
      nucleus.rotation.y = t * 0.55;
      nucleus.rotation.x = t * 0.22;
      const pulse = 1 + Math.sin(t * 2.1) * 0.03;
      nucleus.scale.setScalar(pulse);

      // cada capa: precesión del plano + electrones + trails
      orbitRuntimes.forEach((sh, shellIndex) => {
        // precesión: rota el grupo en Y (cambia plano con el tiempo)
        sh.group.rotation.y = t * sh.precession;

        // leve “ondulación” radial por capa (sutil, para no ser cartoon)
        const radialWobble = 1 + Math.sin(t * 0.9 + shellIndex) * 0.015;

        sh.electrons.forEach((e, i) => {
          const theta = t * sh.speed + sh.phases[i];

          // Bohr: órbita circular (en el plano del grupo)
          const r = sh.radius * radialWobble;
          const x = Math.cos(theta) * r;
          const z = Math.sin(theta) * r;

          // ligera desviación vertical mínima (solo “profundidad”, no rompe Bohr)
          const y = Math.sin(theta * 2.0 + shellIndex) * 0.06;

          e.position.set(x, y, z);

          // trails: shift + insert current
          const tr = sh.trails[i];
          tr.points.pop();
          tr.points.unshift(tmpPos.set(x, y, z).clone());

          // actualizar geometry
          tr.line.geometry.setFromPoints(tr.points);

          // y que el trail no sea igual para todos (opacidad por capa)
          (tr.line.material as THREE.LineBasicMaterial).opacity = 0.22 + shellIndex * 0.03;
        });

        // ring “respira” sutilmente
        const ring = sh.group.children.find((c) => c.type === "Line") as THREE.Line | undefined;
        if (ring) {
          ring.scale.setScalar(1 + Math.sin(t * 0.8 + shellIndex) * 0.01);
        }
      });

      controls.update();

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };

    animate();

    // --- Cleanup
    return () => {
      cancelAnimationFrame(frameId);

      scene.traverse((obj: THREE.Object3D) => {
        // dispose geometries/materials
        // @ts-expect-error - runtime checks
        if (obj.geometry) obj.geometry.dispose?.();
        // @ts-expect-error - runtime checks
        if (obj.material) {
          // @ts-expect-error - runtime checks
          if (Array.isArray(obj.material)) obj.material.forEach((m: THREE.Material) => m.dispose());
          // @ts-expect-error - runtime checks
          else obj.material.dispose?.();
        }
      });

      glowTex.dispose();
      controls.dispose();
      renderer.dispose();

      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
    };
  }, [shells, size, atomicNumber]);

  const clamped = shells.some((n) => clampDots(n).clamped);

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <div ref={mountRef} className="h-full w-full" />
      {clamped ? (
        <div className="absolute bottom-0 right-0 rounded bg-white/75 px-1.5 py-0.5 text-[10px] text-slate-600">
          * visible electrons limited
        </div>
      ) : null}
    </div>
  );
};

export default AtomAnimation;