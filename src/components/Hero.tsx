import g from "../assets/piscine.jpeg";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center bg-gradient-to-br from-clay-dark via-clay to-terracotta-dark overflow-hidden"
    >
      <div className="absolute inset-0 bg-cover bg-center blur-xs" style={{backgroundImage:`url(${g})`}}>

      </div>
      {/* Lignes décoratives en fond, façon courbes de niveau */}
      <svg
        className="absolute inset-0 w-full h-full opacity-10 pointer-events-none"
        viewBox="0 0 1200 800"
        preserveAspectRatio="none"
      >
        <path d="M0,120 C300,60 500,180 800,90 C1000,30 1100,110 1200,70" stroke="#EFE0C3" strokeWidth="1" fill="none" />
        <path d="M0,220 C300,160 500,280 800,190 C1000,140 1100,210 1200,170" stroke="#EFE0C3" strokeWidth="1" fill="none" />
        <path d="M0,320 C300,260 500,380 800,290 C1000,240 1100,310 1200,270" stroke="#EFE0C3" strokeWidth="1" fill="none" />
      </svg>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28">
        <span className="font-mono text-xs tracking-[0.14em] uppercase text-sand mb-4 inline-block">
          Écolodge &middot; & Restaurant
        </span>
        <h1 className="font-display text-5xl sm:text-7xl text-cream max-w-xl leading-[1.03]">
          Entre <em className="italic text-sand">forêt</em> et <em className="italic text-sand">rivage</em>
        </h1>
        <p className="mt-6 max-w-md text-cream/80 text-lg">
          Bungalows en bois nichés sous la canopée, natation en piscine, pêche
          traditionnelle et une table qui raconte le terroir malgache.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#hebergements"
            className="px-7 py-4 rounded-full bg-terracotta hover:bg-terracotta-dark text-cream font-semibold text-sm transition-colors"
          >
            Voir les bungalows
          </a>
          <a
            href="#activites"
            className="px-7 py-4 rounded-full border border-cream/40 hover:border-sand hover:bg-cream/10 text-cream font-semibold text-sm transition-colors"
          >
            Découvrir les activités
          </a>
        </div>
      </div>

      {/* Vague de transition vers la section suivante */}
      <svg
        className="absolute bottom-0 left-0 w-full h-24"
        viewBox="0 0 1440 140"
        preserveAspectRatio="none"
      >
        <path
          d="M0,60 C240,110 480,10 720,60 C960,110 1200,10 1440,60 L1440,140 L0,140 Z"
          fill="#FBF3E7"
        />
      </svg>
    </section>
  );
}
