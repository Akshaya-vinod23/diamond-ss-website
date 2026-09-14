import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Process from "./components/Process";
import Industries from "./components/Industries";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-body">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        <Industries />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
