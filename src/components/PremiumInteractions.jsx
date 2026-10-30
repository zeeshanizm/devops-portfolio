import React, { useEffect, useRef, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { useReducedMotion } from 'framer-motion';

/** Non-layout overlay. No changes to the portfolio's existing sections or content. */
export default function PremiumInteractions() {
  const reduced = useReducedMotion();
  const [progress, setProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);
  const [active, setActive] = useState('#home');
  const glow = useRef(null);

  useEffect(() => {
    let scheduled = false;
    const update = () => {
      scheduled = false;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(100, Math.max(0, window.scrollY / max * 100)) : 0);
      setShowTop(window.scrollY > 650);
    };
    const onScroll = () => {
      if (!scheduled) { scheduled = true; requestAnimationFrame(update); }
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); };
  }, []);

  useEffect(() => {
    const targets = [...document.querySelectorAll('main section[id]')];
    if (!targets.length || !('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver(entries => {
      const candidates = entries.filter(e => e.isIntersecting).sort((a,b) => b.intersectionRatio - a.intersectionRatio);
      if (candidates.length) setActive('#' + candidates[0].target.id);
    }, { rootMargin: '-22% 0px -52% 0px', threshold: [0, .1, .3, .6] });
    targets.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const anchors = document.querySelectorAll('.navlinks a[href^="#"]');
    anchors.forEach(el => {
      const selected = el.getAttribute('href') === active;
      if (selected) el.setAttribute('aria-current', 'location');
      else el.removeAttribute('aria-current');
    });
  }, [active]);

  useEffect(() => {
    if (reduced || !window.matchMedia('(pointer: fine)').matches) return;
    const el = glow.current;
    if (!el) return;
    let raf = 0;
    const move = e => {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
        el.style.opacity = '1';
      });
    };
    const hide = () => { el.style.opacity = '0'; };
    window.addEventListener('pointermove', move, { passive: true });
    document.addEventListener('pointerleave', hide);
    return () => { window.removeEventListener('pointermove', move); document.removeEventListener('pointerleave', hide); cancelAnimationFrame(raf); };
  }, [reduced]);

  return <>
    <div className="premium-scroll-track" aria-hidden="true"><div className="premium-scroll-fill" style={{ width: `${progress}%` }} /></div>
    {!reduced && <div ref={glow} className="premium-cursor-glow" aria-hidden="true" />}
    <button type="button" className={`premium-back-top${showTop ? ' is-visible' : ''}`} aria-label="Back to top" tabIndex={showTop ? 0 : -1} onClick={() => window.scrollTo({top: 0, behavior: reduced ? 'instant' : 'smooth'})}><ArrowUp size={19}/></button>
  </>;
}
