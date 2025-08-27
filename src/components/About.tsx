import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Heart, Users, BookOpen } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Fresh Graduate",
      description: "Recently completed my degree in Early Childhood Education from Universitas Muhammadiyah Ponorogo (2024)"
    },
    {
      icon: Heart,
      title: "Passionate Educator",
      description: "Deeply committed to creating nurturing and supportive learning environments for young children"
    },
    {
      icon: Users,
      title: "Child Development",
      description: "Specialized knowledge in early childhood development, learning theories, and age-appropriate teaching methods"
    },
    {
      icon: BookOpen,
      title: "Lifelong Learner",
      description: "Continuously seeking new knowledge and innovative approaches to early childhood education"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            As a fresh graduate in Early Childhood Education, I bring enthusiasm, 
            contemporary knowledge, and a genuine passion for helping children reach their full potential.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-slide-in">
            <h3 className="text-2xl font-semibold text-foreground mb-6">My Journey</h3>
            <p className="text-muted-foreground mb-6">
              I recently graduated from Universitas Muhammadiyah Ponorogo in 2024 with a degree in 
              Pendidikan Guru Anak Usia Dini (Early Childhood Education). Throughout my studies, 
              I developed a deep understanding of child development, educational psychology, and 
              innovative teaching methodologies.
            </p>
            <p className="text-muted-foreground mb-6">
              My academic journey has equipped me with both theoretical knowledge and practical 
              experience in creating engaging, age-appropriate learning experiences that foster 
              children's cognitive, social, and emotional development.
            </p>
            <p className="text-muted-foreground">
              I believe every child is unique and deserves personalized attention to help them 
              discover their interests and develop their potential in a safe, encouraging environment.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 animate-fade-in">
            {highlights.map((highlight, index) => (
              <Card key={index} className="shadow-soft hover:shadow-elegant transition-all duration-300 border-0 bg-card">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <highlight.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{highlight.title}</h4>
                  <p className="text-sm text-muted-foreground">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;