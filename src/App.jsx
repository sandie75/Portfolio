import "./app.scss"
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
/*import About from "./components/about/About";*/

//Pas besoin de spécifier  ".jsx" à la fin du fichier avec Vite.

const App = () => {
  return <div>
    <section id="Homepage">
      <Navbar/>
      <Hero/>
    </section>
    <section id="about">À propos</section>
    <Portfolio />
    <section id="Contact">
      <Contact/>
    </section>
  </div>;
};

export default App;

