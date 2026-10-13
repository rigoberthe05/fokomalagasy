import useReveal from "../hooks/useReveal";

const CARDS = [
  {
    tag: "Le lieu",
    title: "À propos du lodge",
    text: `un projet visant à développer le tourisme dans le Sud-Est de Madagascar, notemment dans le 
    région de Vangaindrano, tout en valorisant la culture et la cuisine malagasy. Il cherche à protéger la biodiversité
    ,favoriser l'autosuffisance de l'hotêl pour réduire la pollution.`,
  },
  {
    tag: "L'équipe",
    title: "À propos des membres",
    text: `Une petite équipe locale, entre maîtres-nageurs, pêcheurs, cuisiniers et
    jardiniers, qui vit à quelques minutes du lodge et connaît la région mieux
    que personne.`,
  },
  {
    tag: "Le projet académique",
    title: "À propos de l'ISPM",
    text: `Ce site est réalisé dans le cadre d'un projet académique à l'Institut
    Supérieur Polytechnique de Madagascar (ISPM), établissement de formation
    en ingénierie et numérique. Il illustre l'application concrète des
    compétences acquises durant le cursus.`,
  },
];

interface CardProps {
  tag: string;
  title: string;
  text: string;
}

function Card({ tag, title, text }: CardProps) {
  const ref = useReveal();
  return (
    <div ref={ref} className="reveal relative overflow-hidden rounded-2xl bg-sand p-9">
      <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-terracotta/10" />
      <span className="relative font-mono text-[11px] tracking-[0.1em] uppercase text-terracotta-dark block mb-3">
        {tag}
      </span>
      <h3 className="relative font-display text-xl mb-3">{title}</h3>
      <p className="relative text-ink/70 text-sm leading-relaxed">{text}</p>
    </div>
  );
}

export default function About() {
  const headRef = useReveal();

  return (
    <section id="apropos" className="py-28 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={headRef} className="reveal max-w-xl mb-16">
          <span className="font-mono text-xs tracking-[0.14em] uppercase text-terracotta-dark mb-3 inline-block">
            À propos
          </span>
          <h2 className="font-display text-3xl sm:text-4xl">
            Un lieu, une équipe, un projet
          </h2>
          <p className="mt-4 text-ink/70">
            Trois façons de comprendre l'Écolodge Baobab avant de réserver.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-7">
          {CARDS.map((c) => (
            <Card key={c.title} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
}
