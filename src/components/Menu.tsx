import useReveal from "../hooks/useReveal";
import akondro from "../assets/akondro.jpg";
import saoaba from "../assets/saoaba.jpg";
import vary from "../assets/vary.jpg"

const DISHES = [
  {
    category: "Entrée",
    name: "Ankodro Fritte accompagné de l'Achard",
    photo: akondro,
    ingredients: ["Akondro Lahy", "Pomme de terre", "Carotte", "Oignon"],
    price: "8 000 Ar",
  },
  {
    category: "Dessert",
    name: "Saoaba",
    photo: saoaba,
    ingredients: ["Banane", "Saonjo", "Lait de coco", "Sucre", "Citron"],
    price: "12 000 Ar",
  },
  {
    category: "Plat",
    name: "Poisson & riz",
    photo: vary ,
    ingredients: ["Poisson du jour", "Riz local","Persil", "Coco", "Citron"],
    price: "22 000 Ar",
  },
];

interface DishCardProps {
  category: string;
  name: string;
  photo : string
  ingredients: string[];
  price: string;
}

function DishCard({ category, name, photo, ingredients, price }: DishCardProps) {
  const ref = useReveal();
  return (
    <div ref={ref} className="reveal rounded-2xl overflow-hidden bg-cream border border-ink/10">
      <div className="h-60 bg-gradient-to-br from-sand to-terracotta/40 flex items-center justify-center">
        <img src={photo} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="p-6">
        <span className="font-mono text-[11px] tracking-[0.1em] uppercase text-terracotta-dark">
          {category}
        </span>
        <div className="flex items-start justify-between gap-3 mt-2 mb-3">
          <h3 className="font-display text-lg leading-tight">{name}</h3>
          <span className="text-sm font-semibold text-clay-dark whitespace-nowrap">{price}</span>
        </div>
        <ul className="flex flex-wrap gap-2">
          {ingredients.map((ing) => (
            <li
              key={ing}
              className="text-xs bg-sand text-clay-dark px-2.5 py-1 rounded-full"
            >
              {ing}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Menu() {
  const headRef = useReveal();
  return (
    <section id="menu" className="py-28 bg-sand/40">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={headRef} className="reveal max-w-xl mb-16">
          <span className="font-mono text-xs tracking-[0.14em] uppercase text-terracotta-dark mb-3 inline-block">
            Notre carte
          </span>
          <h2 className="font-display text-3xl sm:text-4xl">Le menu</h2>
          <p className="mt-4 text-ink/70">
            Une sélection qui change avec la pêche du jour et les récoltes du potager.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {DISHES.map((d) => (
            <DishCard key={d.name} {...d} />
          ))}
        </div>
      </div>
    </section>
  );
}
