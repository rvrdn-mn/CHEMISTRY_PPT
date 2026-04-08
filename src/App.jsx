import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Import Components
import { allSlides } from './components/Slides';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Scroll Progress Bar
    gsap.to('.scroll-progress', {
      width: '100%',
      ease: 'none',
      scrollTrigger: {
        trigger: document.documentElement,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.3,
      },
    });

    // Animate each panel's elements when they snap into view
    // Using onEnter/onEnterBack with immediate toggle to work with scroll-snap
    gsap.utils.toArray('.panel').forEach((panel, index) => {
      const headings = panel.querySelectorAll('.slide-heading');
      const body = panel.querySelector('.slide-body');
      const dataItems = panel.querySelectorAll('.data-item');
      const img = panel.querySelector('.slide-image');
      const grid = panel.querySelector('.slide-grid');

      // Set initial hidden state for all animatable elements
      if (headings.length) gsap.set(headings, { y: 40, opacity: 0 });
      if (body) gsap.set(body, { y: 25, opacity: 0 });
      if (dataItems.length) gsap.set(dataItems, { y: 20, opacity: 0 });
      if (img) gsap.set(img, { scale: 1.06, opacity: 0 });
      if (grid) gsap.set(grid, { y: 20, opacity: 0 });

      // First slide should be visible immediately
      if (index === 0) {
        if (headings.length) gsap.set(headings, { y: 0, opacity: 1 });
        if (body) gsap.set(body, { y: 0, opacity: 1 });
        if (img) gsap.set(img, { scale: 1, opacity: 1 });
        return;
      }

      // For all other slides, use ScrollTrigger with onEnter callback
      ScrollTrigger.create({
        trigger: panel,
        start: 'top 80%',
        end: 'bottom 20%',
        onEnter: () => animateIn(panel, headings, body, dataItems, img, grid),
        onEnterBack: () => animateIn(panel, headings, body, dataItems, img, grid),
        onLeave: () => animateOut(panel, headings, body, dataItems, img, grid),
        onLeaveBack: () => animateOut(panel, headings, body, dataItems, img, grid),
      });
    });

    function animateIn(panel, headings, body, dataItems, img, grid) {
      const tl = gsap.timeline();
      if (headings.length) {
        tl.to(headings, { y: 0, opacity: 1, duration: 0.8, ease: 'expo.out', stagger: 0.08 }, 0);
      }
      if (body) {
        tl.to(body, { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' }, 0.1);
      }
      if (grid) {
        tl.to(grid, { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' }, 0.15);
      }
      if (dataItems.length) {
        tl.to(dataItems, { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power2.out' }, 0.25);
      }
      if (img) {
        tl.to(img, { scale: 1, opacity: 1, duration: 1.1, ease: 'expo.out' }, 0);
      }
    }

    function animateOut(panel, headings, body, dataItems, img, grid) {
      gsap.to([...headings, body, ...dataItems, img, grid].filter(Boolean), {
        opacity: 0, duration: 0.3, ease: 'power1.in'
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <main className="app-container">
      <div className="scroll-progress"></div>
      {allSlides.map((SlideComponent, index) => (
        <SlideComponent key={index} />
      ))}
    </main>
  );
}

export default App;
