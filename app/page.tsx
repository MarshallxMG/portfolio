import Background from "@/components/Background";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import TechStack from "@/components/TechStack";
import TechMarquee from "@/components/TechMarquee";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Background />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <TechStack />
      <TechMarquee />
      <Projects />
      <Education />
      <Certifications />
      <Achievements />
      <Contact />
      <Footer />
    </main>
  );
}
