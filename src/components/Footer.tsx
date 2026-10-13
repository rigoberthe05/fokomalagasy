export default function Footer() {
  return (
    <footer className="bg-clay-dark text-cream/70 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-wrap justify-between gap-10 pb-10 border-b border-cream/15">
          <div>
            <div className="font-display text-xl text-sand">Écolodge & Réstaurant</div>
            <p className="text-sm text-cream/50 mt-2 max-w-xs">
              Entre forêt et rivage, un lodge pensé pour ralentir.
            </p>
          </div>

          <div className="flex gap-14 flex-wrap">
            <div>
              <h5 className="font-mono text-[11px] tracking-[0.1em] uppercase text-sand mb-3">
                Le lodge
              </h5>
              <a href="#apropos" className="block text-sm mb-2 hover:text-sand">À propos</a>
              <a href="#hebergements" className="block text-sm mb-2 hover:text-sand">Hébergements</a>
            </div>
            <div>
              <h5 className="font-mono text-[11px] tracking-[0.1em] uppercase text-sand mb-3">
                Vivre le lodge
              </h5>
              <a href="#activites" className="block text-sm mb-2 hover:text-sand">Activités</a>
              <a href="#menu" className="block text-sm mb-2 hover:text-sand">Menu</a>
              <a href="#resto" className="block text-sm mb-2 hover:text-sand">Restaurant & Bar</a>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-between gap-3 pt-6 text-xs text-cream/40">
          <span>&copy; 2026 Écolodge & Restaurant</span>
          <span>Projet académique &middot; ISPM</span>
        </div>
      </div>
    </footer>
  );
}
