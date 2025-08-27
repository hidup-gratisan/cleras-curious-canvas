import { Button } from "@/components/ui/button";
import { Mail, Download, Linkedin, Github } from "lucide-react";
import profileImage from "@/assets/profile-clera.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Profile Image */}
          <div className="flex-shrink-0 animate-fade-in">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-elegant bg-gradient-primary p-1">
                <img
                  src={profileImage}
                  alt="Clera Agretyas Nur Anisa"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-secondary rounded-full flex items-center justify-center shadow-soft">
                <span className="text-2xl">🎓</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left animate-slide-in">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Clera Agretyas <br />
              <span className="text-primary">Nur Anisa</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-4">
              Fresh Graduate | Early Childhood Education
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              Passionate educator dedicated to nurturing young minds and creating 
              engaging learning environments for children. Recently graduated from 
              Universitas Muhammadiyah Ponorogo with expertise in early childhood development.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-soft">
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
            </div>

            <div className="flex gap-4 justify-center lg:justify-start">
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;