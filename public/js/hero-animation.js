import { animate, stagger } from 'https://cdn.jsdelivr.net/npm/motion@12.23.26/+esm';

animate(
  '.hero-animate',
  { opacity: [0, 1], y: [24, 0] },
  { duration: 0.8, delay: stagger(0.1, { start: 0.3 }), ease: [0.22, 1, 0.36, 1] }
);
