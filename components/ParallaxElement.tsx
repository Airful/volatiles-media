"use client";

import {
  useRef,
  useEffect,
  ReactNode,
  CSSProperties,
  HTMLAttributes,
} from "react";

interface ParallaxElementProps extends HTMLAttributes<HTMLDivElement> {
  /** Parallax intensity — 0.1 is subtle, 0.4 is strong. Default: 0.3 */
  speed?: number;
  /** "up" = background drifts up as section scrolls up (classic parallax). Default: "up" */
  direction?: "up" | "down";
  /**
   * Any CSS transforms the element already needs (e.g. centering).
   * The parallax translateY is appended so both work together.
   * Example: "translateX(-50%) translateY(-50%)"
   */
  baseTransform?: string;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}

/**
 * Walk the offsetParent chain to get element top in document coordinates.
 * Unlike getBoundingClientRect(), offsetTop is NOT affected by CSS transforms,
 * so this gives us the stable natural layout position.
 */
function getDocumentTop(el: HTMLElement): number {
  let top = 0;
  let current: HTMLElement | null = el;
  while (current) {
    top += current.offsetTop;
    current = current.offsetParent as HTMLElement | null;
  }
  return top;
}

export default function ParallaxElement({
  speed = 0.3,
  direction = "up",
  baseTransform = "",
  className,
  style,
  children,
  ...rest
}: ParallaxElementProps) {
  const elRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  // Stable natural document position — never changes due to our transforms
  const docTopRef = useRef(0);

  // Keep latest prop values accessible inside the stable effect closure
  const speedRef = useRef(speed);
  const directionRef = useRef(direction);
  const baseTransformRef = useRef(baseTransform);
  speedRef.current = speed;
  directionRef.current = direction;
  baseTransformRef.current = baseTransform;

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    /** Record layout position — not affected by transforms */
    const recordPosition = () => {
      docTopRef.current = getDocumentTop(el);
    };

    const applyParallax = () => {
      const isMobile = window.innerWidth < 768;
      const s = isMobile ? speedRef.current * 0.35 : speedRef.current;
      const viewH = window.innerHeight;
      // el.offsetHeight is layout-based (also unaffected by transforms)
      const height = el.offsetHeight;

      // Where the element's center naturally sits in the current viewport
      const naturalViewportCenter = docTopRef.current + height / 2 - window.scrollY;
      const fromCenter = viewH / 2 - naturalViewportCenter;
      const ty = fromCenter * s * (directionRef.current === "up" ? 1 : -1);

      const base = baseTransformRef.current ? `${baseTransformRef.current} ` : "";
      el.style.transform = `${base}translateY(${ty.toFixed(2)}px)`;
    };

    const onScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(applyParallax);
    };

    const onResize = () => {
      // offsetTop values change on resize (% units recompute) — refresh
      recordPosition();
      applyParallax();
    };

    recordPosition();
    applyParallax();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []); // stable — all values read via refs

  return (
    <div
      ref={elRef}
      className={className}
      style={{ ...style, willChange: "transform" }}
      {...rest}
    >
      {children}
    </div>
  );
}
