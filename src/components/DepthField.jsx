import { useEffect, useRef } from "react";

/**
 * DepthField — the site's signature visual motif.
 * Several translucent "planes" are stacked in 3D and drift at different
 * speeds in response to scroll + mouse position, literalizing the idea
 * of "depth" that gives Deep Sites its name. Reused (at lower intensity)
 * as a quiet ambient backdrop throughout the page.
 */
export default function DepthField({ intensity = 1, className = "" }) {
  const wrapRef = useRef(null);
  const planeRefs = useRef([]);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    let raf = null;
    let mouseX = 0.5;
    let mouseY = 0.5;
    let scrollFactor = 0;

    const onMouse = (e) => {
      const rect = wrap.getBoundingClientRect();
      mouseX = (e.clientX - rect.left) / rect.width;
      mouseY = (e.clientY - rect.top) / rect.height;
    };
    const onScroll = () => {
      scrollFactor = window.scrollY;
    };

    const tick = () => {
      planeRefs.current.forEach((el, i) => {
        if (!el) return;
        const depth = (i + 1) * 0.6 * intensity;
        const x = (mouseX - 0.5) * 30 * depth;
        const y = (mouseY - 0.5) * 20 * depth + scrollFactor * 0.02 * depth;
        el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      });
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMouse);
    window.addEventListener("scroll", onScroll, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [intensity]);

  const planes = [
    { size: 420, top: "8%", left: "62%", color: "rgba(124,92,255,0.22)", blur: 60 },
    { size: 300, top: "45%", left: "6%", color: "rgba(34,211,238,0.16)", blur: 50 },
    { size: 260, top: "68%", left: "72%", color: "rgba(124,92,255,0.14)", blur: 40 },
  ];

  return (
    <div ref={wrapRef} className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {planes.map((p, i) => (
        <div
          key={i}
          ref={(el) => (planeRefs.current[i] = el)}
          className="absolute rounded-full will-change-transform"
          style={{
            width: p.size,
            height: p.size,
            top: p.top,
            left: p.left,
            background: p.color,
            filter: `blur(${p.blur}px)`,
          }}
        />
      ))}
      {/* thin layered rings echoing the "depth" wordmark */}
      <svg className="absolute -bottom-24 -right-24 opacity-20" width="480" height="480" viewBox="0 0 480 480">
        <polygon points="240,60 400,180 240,300 80,180" fill="none" stroke="url(#depthGrad)" strokeWidth="1.5" opacity="0.5" />
        <polygon points="240,110 400,230 240,350 80,230" fill="none" stroke="url(#depthGrad)" strokeWidth="1.5" opacity="0.7" />
        <polygon points="240,160 400,280 240,400 80,280" fill="none" stroke="url(#depthGrad)" strokeWidth="1.5" />
        <defs>
          <linearGradient id="depthGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#7C5CFF" />
            <stop offset="1" stopColor="#22D3EE" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
