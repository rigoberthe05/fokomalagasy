import useReveal from "../hooks/useReveal";
import bar from "../assets/bar.jpeg";
import bar2 from "../assets/bar2.jpeg"

const FEATURES = [
  {
    title: "Cuisine locale & de saison",
    text: "Poissons du jour, légumes du potager du lodge, épices malgaches.",
  },
  {
    title: "Bar en terrasse",
    text: "Cocktails maison au coucher du soleil, vue dégagée sur le jardin.",
  },
  {
    title: "Petit-déjeuner inclus",
    text: "Servi en terrasse pour tous les résidents du lodge.",
  },
];

export default function Restaurant() {
  const visualRef = useReveal();
  const textRef = useReveal();

  return (
    <section id="resto" className="py-28 bg-gradient-to-br from-terracotta-dark to-clay-dark text-cream">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
        <div ref={visualRef} className="reveal aspect-[4/5] rounded-3xl bg-cream/5 border border-cream/15 relative overflow-hidden">
          <img src={bar2} alt="" />
        </div>

        <div ref={textRef} className="reveal">
          <span className="font-mono text-xs tracking-[0.14em] uppercase text-sand mb-3 inline-block">
            Restaurant & Bar
          </span>
          <h2 className="font-display text-3xl sm:text-4xl mb-5">Une table posée sur le jardin</h2>
          <p className="text-cream/80 mb-8">
            Cuisine du terroir malgache, carte courte qui change avec la pêche du
            jour, et un bar ouvert jusque tard en terrasse.
          </p>

          <div className="flex flex-col gap-5 mb-9">
            {FEATURES.map((f) => (
              <div key={f.title} className="flex gap-4">
                <span className="w-2 h-2 rounded-full bg-terracotta mt-2 shrink-0" />
                <div>
                  <h4 className="font-semibold text-sm">{f.title}</h4>
                  <p className="text-sm text-cream/65">{f.text}</p>
                </div>
              </div>
            ))}
          </div>

          <a
            href="#menu"
            className="inline-block px-7 py-4 rounded-full bg-terracotta hover:bg-terracotta-dark font-semibold text-sm transition-colors"
          >
            Voir la carte
          </a>
        </div>
      </div>
    </section>
  );
}
