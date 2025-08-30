import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Target, Users, TrendingUp } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Education Background",
      description: "Sarjana Pendidikan from Universitas Muhammadiyah Ponorogo (2020-2024) with IPK 3.84/4.00"
    },
    {
      icon: Target,
      title: "Administrative Experience",
      description: "Experience in administrative roles including staff administration and tour leadership"
    },
    {
      icon: Users,
      title: "Organizational Skills",
      description: "Strong organizational and communication skills developed through various professional experiences"
    },
    {
      icon: TrendingUp,
      title: "Professional Development",
      description: "Continuous learning through courses and certifications to enhance professional capabilities"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Lulusan S1 Pendidikan yang memiliki kemampuan dan pengalaman di bidang administrasi dan organisasi
            yang baik. Berpengalaman dalam mengelola dokumen, mengatur jadwal, dan mendukung operasional
            kantor secara efektif.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-slide-in">
            <h3 className="text-2xl font-semibold text-foreground mb-6">My Professional Journey</h3>
            <p className="text-muted-foreground mb-6">
              I graduated from Universitas Muhammadiyah Ponorogo in 2024 with a degree in 
              Pendidikan Guru Anak Usia Dini (Early Childhood Education). My academic background has equipped me with 
              strong organizational skills, attention to detail, and excellent communication abilities.
            </p>
            <p className="text-muted-foreground mb-6">
              Throughout my career, I have gained valuable experience in administrative roles, including 
              staff administration, tour leadership, and educational support positions. I have actively 
              participated in campus organizational activities and pursued various courses to strengthen 
              my professional skills, particularly in office software and communication.
            </p>
            <p className="text-muted-foreground">
              I am committed to applying my strong work ethic, reliability, and eagerness to learn 
              in administrative roles where I can contribute to organizational efficiency and 
              provide excellent support to teams and clients.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 animate-fade-in">
            {highlights.map((highlight, index) => (
              <Card key={index} className="shadow-soft hover:shadow-glow transition-all duration-500 border border-border/50 bg-gradient-card backdrop-blur-sm hover:border-primary/30">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4 shadow-soft">
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