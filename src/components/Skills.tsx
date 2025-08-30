import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Monitor, Users, FileText, Heart, Brain, Database } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Office Administration",
      icon: FileText,
      skills: [
        { name: "Pengelolaan arsip dan dokumen", level: 90 },
        { name: "Penyusunan laporan administrasi", level: 85 },
        { name: "Dasar manajemen jadwal dan kalender kerja", level: 88 },
        { name: "Document Management", level: 90 }
      ]
    },
    {
      title: "Software Proficiency",
      icon: Monitor,
      skills: [
        { name: "Penggunaan Canva dan Power point", level: 85 },
        { name: "Microsoft Office Suite", level: 80 },
        { name: "Penguasaan software perkantoran", level: 88 },
        { name: "Digital Communication", level: 82 }
      ]
    },
    {
      title: "Communication & Support",
      icon: Users,
      skills: [
        { name: "Keterampilan komunikasi", level: 90 },
        { name: "Customer Service", level: 85 },
        { name: "Team Collaboration", level: 88 },
        { name: "Professional Communication", level: 86 }
      ]
    },
    {
      title: "Administrative Tasks",
      icon: Database,
      skills: [
        { name: "Cash Reconciliation", level: 85 },
        { name: "Data Recording", level: 88 },
        { name: "Document Archiving", level: 90 },
        { name: "Scheduling", level: 82 }
      ]
    }
  ];

  const personalQualities = [
    { quality: "Detail-Oriented", icon: Heart, description: "Attention to detail in administrative tasks and documentation" },
    { quality: "Organized", icon: FileText, description: "Strong organizational skills for efficient workflow management" },
    { quality: "Reliable", icon: Users, description: "Dependable and consistent in meeting deadlines and commitments" },
    { quality: "Adaptable", icon: Brain, description: "Flexible in learning new systems and adapting to changing priorities" }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">Skills & Competencies</h2>
          <p className="text-xl text-muted-foreground">
            Transferable skills from education background and new administrative competencies
          </p>
        </div>

        {/* Technical Skills */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="shadow-soft border border-border/50 bg-gradient-card animate-fade-in hover:shadow-glow hover:border-primary/30 transition-all duration-500 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center shadow-soft">
                    <category.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-foreground">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Personal Qualities */}
        <div>
          <h3 className="text-2xl font-display font-bold text-foreground text-center mb-12">Personal Qualities</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {personalQualities.map((item, index) => (
              <Card key={index} className="shadow-soft border border-border/50 bg-gradient-card hover:shadow-glow hover:border-secondary/30 transition-all duration-500 animate-fade-in backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-secondary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-soft">
                    <item.icon className="h-8 w-8 text-secondary-foreground" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">{item.quality}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;