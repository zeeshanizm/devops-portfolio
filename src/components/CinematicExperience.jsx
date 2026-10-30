import { useEffect } from 'react';
import { useReducedMotion } from 'framer-motion';

/** Progressive enhancement: no new layout blocks, no changes to existing content. */
export default function CinematicExperience() {
  const reduced = useReducedMotion();
  useEffect(() => {
    const root = document.documentElement;
    if (reduced) {
      root.classList.remove('cinematic-enabled');
      return;
    }
    root.classList.add('cinematic-enabled');
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const cleanup = [];
    const targets = document.querySelectorAll('.hero-visual, .project-card, .github-card, .expertise-detail, .lab-panel, .interactive-terminal');
    if (finePointer) {
      targets.forEach(element => {
        let frame = 0;
        const move = event => {
          if (frame) cancelAnimationFrame(frame);
          const rect = element.getBoundingClientRect();
          const x = (event.clientX - rect.left) / rect.width;
          const y = (event.clientY - rect.top) / rect.height;
          frame = requestAnimationFrame(() => {
            element.style.setProperty('--cin-x', `${(x * 100).toFixed(1)}%`);
            element.style.setProperty('--cin-y', `${(y * 100).toFixed(1)}%`);
            if (element.classList.contains('hero-visual')) {
              element.style.setProperty('--cin-parallax-x', `${((x - .5) * 16).toFixed(1)}px`);
              element.style.setProperty('--cin-parallax-y', `${((y - .5) * 12).toFixed(1)}px`);
            }
          });
        };
        const enter = () => element.classList.add('cinematic-hover');
        const leave = () => {
          element.classList.remove('cinematic-hover');
          element.style.setProperty('--cin-parallax-x', '0px');
          element.style.setProperty('--cin-parallax-y', '0px');
        };
        element.addEventListener('pointermove', move, { passive: true });
        element.addEventListener('pointerenter', enter);
        element.addEventListener('pointerleave', leave);
        cleanup.push(() => {
          element.removeEventListener('pointermove', move);
          element.removeEventListener('pointerenter', enter);
          element.removeEventListener('pointerleave', leave);
          cancelAnimationFrame(frame);
        });
      });
    }
    const sections = [...document.querySelectorAll('main > section')];
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('cinematic-in-view');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: .09, rootMargin: '0px 0px -5% 0px' });
      sections.forEach(section => observer.observe(section));
      cleanup.push(() => observer.disconnect());
    } else sections.forEach(section => section.classList.add('cinematic-in-view'));
    return () => {
      cleanup.forEach(fn => fn());
      root.classList.remove('cinematic-enabled');
    };
  }, [reduced]);
  return null;
}
