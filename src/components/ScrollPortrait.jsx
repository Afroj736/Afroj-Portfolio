import { useEffect, useRef } from "react";

const GRID_W = 120;
const GRID_H = 160;
const BG_TOLERANCE = 42;

// Removes the flat photo background by flood-filling from the edges with pixels
// close to the corner colour, then feathers the bottom so the bust fades out.
function cutout(img) {
  const W = 360;
  const H = 480;
  const canvas = document.createElement("canvas");
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  // Centre-crop the source to 3:4.
  const cropW = Math.min(img.width, (img.height / 4) * 3);
  const cropH = (cropW / 3) * 4;
  ctx.drawImage(img, (img.width - cropW) / 2, (img.height - cropH) / 2, cropW, cropH, 0, 0, W, H);
  const image = ctx.getImageData(0, 0, W, H);
  const px = image.data;
  const ref = [px[0], px[1], px[2]];
  const seen = new Uint8Array(W * H);
  const stack = [];

  for (let x = 0; x < W; x++) stack.push(x, (H - 1) * W + x);
  for (let y = 0; y < H; y++) stack.push(y * W, y * W + W - 1);

  while (stack.length) {
    const p = stack.pop();
    if (seen[p]) continue;
    seen[p] = 1;
    const o = p * 4;
    const diff = Math.abs(px[o] - ref[0]) + Math.abs(px[o + 1] - ref[1]) + Math.abs(px[o + 2] - ref[2]);
    if (diff > BG_TOLERANCE * 3) continue;
    px[o + 3] = 0;
    const x = p % W;
    const y = (p / W) | 0;
    if (x > 0) stack.push(p - 1);
    if (x < W - 1) stack.push(p + 1);
    if (y > 0) stack.push(p - W);
    if (y < H - 1) stack.push(p + W);
  }

  const fadeStart = Math.floor(H * 0.8);
  for (let y = fadeStart; y < H; y++) {
    const fade = 1 - (y - fadeStart) / (H - fadeStart);
    for (let x = 0; x < W; x++) px[(y * W + x) * 4 + 3] *= fade;
  }

  ctx.putImageData(image, 0, 0);
  return canvas;
}

function buildParticles(source) {
  const sample = document.createElement("canvas");
  sample.width = GRID_W;
  sample.height = GRID_H;
  const ctx = sample.getContext("2d", { willReadFrequently: true });
  ctx.drawImage(source, 0, 0, GRID_W, GRID_H);
  const data = ctx.getImageData(0, 0, GRID_W, GRID_H).data;
  const particles = [];
  for (let y = 0; y < GRID_H; y++) {
    for (let x = 0; x < GRID_W; x++) {
      const o = (y * GRID_W + x) * 4;
      if (data[o + 3] < 30) continue;
      particles.push({
        gx: x,
        gy: y,
        color: `rgba(${data[o]}, ${data[o + 1]}, ${data[o + 2]}, ${data[o + 3] / 255})`,
        // Top rows break away first; a little noise keeps the edge ragged.
        threshold: 0.02 + (y / GRID_H) * 0.55 + Math.random() * 0.1,
        vx: (Math.random() - 0.3) * 10,
        vy: -(Math.random() * 6 + 2),
        spin: Math.random() * 0.6 + 0.4,
      });
    }
  }
  return particles;
}

// Hero portrait that disintegrates into drifting pixels as the hero scrolls out of view.
export default function ScrollPortrait({ src, ready }) {
  const wrapRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const section = wrap.closest("section");
    let source = null;
    let particles = [];
    let raf = 0;

    const progress = () => {
      const rect = section.getBoundingClientRect();
      return Math.min(Math.max(-rect.top / rect.height, 0), 1);
    };

    const draw = () => {
      raf = 0;
      if (!source) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = wrap.clientWidth;
      const h = wrap.clientHeight;
      if (canvas.width !== w * dpr || canvas.height !== h * dpr) {
        canvas.width = w * dpr;
        canvas.height = h * dpr;
      }
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);

      const p = progress();
      // Fit a 3:4 box to the bottom of the canvas.
      const boxH = Math.min(h, (w / 3) * 4);
      const boxW = (boxH / 4) * 3;
      const ox = (w - boxW) / 2;
      const oy = h - boxH;
      const cw = boxW / GRID_W;
      const ch = boxH / GRID_H;

      wrap.style.transform = `translateY(${p * 280}px) scale(${1 - Math.min(p / 0.3, 1) * 0.3})`;

      ctx.drawImage(source, ox, oy, boxW, boxH);
      if (p <= 0) return;

      // Punch out the cells that have already broken away...
      ctx.globalCompositeOperation = "destination-out";
      for (const particle of particles) {
        if (p > particle.threshold) ctx.fillRect(ox + particle.gx * cw - 0.5, oy + particle.gy * ch - 0.5, cw + 1, ch + 1);
      }
      // ...and draw them flying off.
      ctx.globalCompositeOperation = "source-over";
      for (const particle of particles) {
        const t = p - particle.threshold;
        if (t <= 0) continue;
        const life = t * 40;
        const alpha = Math.max(0, 1 - t * 3);
        if (!alpha) continue;
        ctx.globalAlpha = alpha;
        ctx.fillStyle = particle.color;
        const x = ox + particle.gx * cw + particle.vx * life;
        const y = oy + particle.gy * ch + particle.vy * life + 0.4 * life * life * 0.1;
        const s = cw * particle.spin * (1 + t * 2);
        ctx.fillRect(x, y, s, s);
      }
      ctx.globalAlpha = 1;
    };

    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(draw);
    };

    const img = new Image();
    img.onload = () => {
      source = cutout(img);
      particles = buildParticles(source);
      schedule();
    };
    img.src = src;

    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [src]);

  return (
    <div
      className={`absolute inset-0 transition-opacity duration-1000 delay-300 ${ready ? "opacity-100" : "opacity-0"}`}
    >
      <div ref={wrapRef} className="w-full h-full origin-bottom will-change-transform">
        <canvas
          ref={canvasRef}
          className="w-full h-full drop-shadow-[0_15px_60px_rgba(139,92,246,0.35)]"
          role="img"
          aria-label="Portrait"
        />
      </div>
    </div>
  );
}
