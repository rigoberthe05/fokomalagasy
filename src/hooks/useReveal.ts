import { useEffect, useRef } from "react";

/**
 * Ajoute la classe "in-view" quand l'élément entre dans le viewport.
 * Usage : const ref = useReveal(); <div ref={ref} className="reveal">...</div>
 */
export default function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("in-view");
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}
