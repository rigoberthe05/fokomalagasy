import type { ReactNode } from "react";
import useReveal from "../hooks/useReveal";

const ACTIVITIES = [
  {
    title: "Piscine & plongée",
    text: "Bassin encadré par nos maîtres-nageurs, avec initiation plongée pour petits et grands.",
    icon: <path d="M4 8c2 4 4 4 8 4s6 0 8-4M4 16c2 4 4 4 8 4s6 0 8-4M12 2v10" />,
  },
  {
    title: "La pêche",
    text: "Départ à l'aube avec les pêcheurs du lodge, retour pour cuisiner la prise du jour.",
    icon: <path d="M3 17c4-6 14-6 18 0M8 6l3 3-3 3M16 6l-3 3 3 3" />,
  },
  {
    title: "La randonnée",
    text: "Sentier balisé jusqu'aux points de vue, guide naturaliste sur demande.",
    icon: <path d="M4 20l6-14 4 8 3-5 3 11H4z" />,
  },
  {
    title: "Visite du potager",
    text: "Tour du jardin qui approvisionne la cuisine du lodge, dégustation en fin de visite.",
    icon: <path d="M4 21c4-8 12-8 16 0M12 3a4 4 0 014 4c0 3-4 6-4 6s-4-3-4-6a4 4 0 014-4z" />,
  },
  {
    title: "Cuisine",
    text: "Atelier cuisine malgache avec notre chef, à base des produits du potager et de la pêche.",
    icon: <path d="M6 3v6a3 3 0 006 0V3M9 9v12M17 3v18M15 8h4" />,
  },
  {
    title: "Yoga",
    text: "Séances en terrasse au lever du soleil, tous niveaux, tapis fournis.",
    icon: <path d="M12 4a2 2 0 100 4 2 2 0 000-4zM12 8v5M12 13l-4 7M12 13l4 7M8 13H4M16 13h4" />,
  },
];

interface ActivityCardProps {
  title: string;
  text: string;
  icon: ReactNode;
}

function ActivityCard({ title, text, icon }: ActivityCardProps) {
  const ref = useReveal();
  return (
    <div ref={ref} className="reveal p-9 bg-cream hover:bg-sand transition-colors">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="w-9 h-9 text-terracotta-dark mb-5">
        {icon}
      </svg>
      <h3 className="font-display text-lg mb-2">{title}</h3>
      <p className="text-sm text-ink/65">{text}</p>
    </div>
  );
}

export default function Activites() {
  const headRef = useReveal();
  return (
    <section id="activites" className="py-28 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={headRef} className="reveal max-w-xl mb-16">
          <span className="font-mono text-xs tracking-[0.14em] uppercase text-terracotta-dark mb-3 inline-block">
            Activités
          </span>
          <h2 className="font-display text-3xl sm:text-4xl">De la piscine à la forêt</h2>
          <p className="mt-4 text-ink/70">Guidées ou en autonomie, à choisir selon l'humeur du jour.</p>
        </div>

        <div className="grid sm:grid-cols-3 gap-px bg-ink/10 rounded-2xl overflow-hidden">
          {ACTIVITIES.map((a) => (
            <ActivityCard key={a.title} {...a} />
          ))}
        </div>
      </div>
    </section>
  );
}