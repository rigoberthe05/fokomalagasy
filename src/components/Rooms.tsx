import useReveal from "../hooks/useReveal";
import chambre from "../assets/chambre.jpeg";
import bumgalow from "../assets/bumgalow.jpeg";
import familiale from "../assets/familoiale.jpeg";

const ROOMS = [
  {
    tag: "Vue jardin",
    title: "Bungalow pour Duo",
    photo: chambre,
    text: "Terrasse privée face aux arbres, hamac et douche extérieure.",
    meta: "2 pers. · 32 m²",
  },
  {
    tag: "Vue piscine",
    title: "Bungalow Canopée",
    photo: bumgalow,
    text: "Accès direct au bassin, transats privés sur la terrasse.",
    meta: "2 pers. · 36 m²",
  },
  {
    tag: "Familial",
    title: "Suite Raty",
    photo: familiale,
    text: "Deux chambres reliée, coin salon et grande varangue commune.",
    meta: "4 pers. · 54 m²",
  },
];

interface RoomCardProps {
  tag: string;
  title: string;
  photo: string;
  text: string;
  meta: string;
}

function RoomCard({ tag, title,photo, text, meta }: RoomCardProps) {
  const ref = useReveal();
  return (
    <div
      ref={ref}
      className="reveal rounded-2xl overflow-hidden bg-cream/5 border border-cream/15 hover:-translate-y-1.5 hover:border-cream/30 transition-all duration-300"
    >
      <img src={photo} alt="" className="h-50 w-full"/>
      <div className="p-6">
        <span className="font-mono text-[11px] tracking-[0.1em] uppercase text-sand block mb-2">
          {tag}
        </span>
        <h3 className="font-display text-xl mb-2 text-cream">{title}</h3>
        <p className="text-cream/65 text-sm mb-4">{text}</p>
        <div className="text-xs text-sand">{meta}</div>
      </div>
    </div>
  );
}

export default function Rooms() {
  const headRef = useReveal();
  return (
    <section id="hebergements" className="py-28 bg-clay-dark text-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={headRef} className="reveal max-w-xl mb-16">
          <span className="font-mono text-xs tracking-[0.14em] uppercase text-sand mb-3 inline-block">
            Hébergements
          </span>
          <h2 className="font-display text-3xl sm:text-4xl">
            Trois bungalows, une même envie de calme
          </h2>
          <p className="mt-4 text-cream/70">
            Chaque bungalow est orienté pour capter la brise et l'ombre de la canopée.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {ROOMS.map((r) => (
            <RoomCard key={r.title} {...r} />
          ))}
        </div>
      </div>
    </section>
  );
}
