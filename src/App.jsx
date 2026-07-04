import { MessageCircle } from "lucide-react";
import Loader from "./components/Loader";
import ScrollProgress from "./components/ScrollProgress";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Industries from "./components/Industries";
import WhyChooseUs from "./components/WhyChooseUs";
import Process from "./components/Process";
import Showcase from "./components/Showcase";
import PricingPhilosophy from "./components/PricingPhilosophy";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative bg-void">
      <Loader />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Industries />
        <div id="why">
          <WhyChooseUs />
        </div>
        <Process />
        <Showcase />
        <PricingPhilosophy />
        <FAQ />
        <Contact />
      </main>
      <Footer />

      <a
        href="https://wa.me/917304656349"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-grad-primary shadow-glow transition-transform duration-300 hover:scale-110"
      >
        <MessageCircle size={24} className="text-white" />
      </a>
    </div>
  );
}

export default App;
