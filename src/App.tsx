import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Rooms from "./components/Rooms";
import Activities from "./components/Activites";
import Menu from "./components/Menu";
import Restaurant from "./components/Restaurant";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="font-body text-ink">
      <Navbar />
      <Hero />
      <About />
      <Rooms />
      <Activities />
      <Menu />
      <Restaurant />
      <Footer />
    </div>
  );
}
