'use client';

import { useEffect, useState } from 'react';

export default function MouseGlow() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    checkDevice();
    
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    // Create and inject the cursor glow with exact gradient from requirements
    const style = document.createElement('style');
    style.textContent = `
      .cursor-glow {
        position: fixed;
        width: 320px;
        height: 320px;
        border-radius: 50%;
        background: radial-gradient(circle at center, rgba(201,169,98,0.22) 0%, rgba(201,169,98,0.12) 25%, rgba(0,0,0,0) 65%);
        pointer-events: none;
        z-index: 999999;
        transform: translate(-50%, -50%);
        transition: opacity .3s ease;
        filter: blur(60px);
        mix-blend-mode: screen;
      }
    `;
    document.head.appendChild(style);

    // Create glow element
    const glow = document.createElement('div');
    glow.className = 'cursor-glow';
    glow.style.opacity = '0';
    document.body.appendChild(glow);

    let mouseX = 0, mouseY = 0;
    let glowX = 0, glowY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      glow.style.opacity = '1';
    };

    document.addEventListener('mousemove', handleMouseMove);

    // Smooth follow with lerp
    const smoothGlow = () => {
      glowX += (mouseX - glowX) * 0.12;
      glowY += (mouseY - glowY) * 0.12;

      glow.style.left = glowX + 'px';
      glow.style.top = glowY + 'px';

      requestAnimationFrame(smoothGlow);
    };
    
    const animationId = requestAnimationFrame(smoothGlow);

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
      if (glow.parentNode) {
        glow.parentNode.removeChild(glow);
      }
      if (style.parentNode) {
        style.parentNode.removeChild(style);
      }
    };
  }, [isDesktop]);

  return null;
}

