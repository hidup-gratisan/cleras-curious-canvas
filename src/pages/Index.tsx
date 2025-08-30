import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Courses from "@/components/Courses";
import Certificates from "@/components/Certificates";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const Index = () => {
  return (
    <PageTransition>
      <div className="min-h-screen">
        <Navigation />
        <Hero />
        <About />
        <Experience />
        <Education />
        <Courses />
        <Certificates />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Index;
