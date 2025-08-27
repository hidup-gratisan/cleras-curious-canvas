import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Palette, Users, BookOpen, Heart, Brain, Music } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Teaching & Pedagogy",
      icon: BookOpen,
      skills: [
        { name: "Curriculum Development", level: 85 },
        { name: "Lesson Planning", level: 90 },
        { name: "Assessment & Evaluation", level: 80 },
        { name: "Differentiated Instruction", level: 75 }
      ]
    },
    {
      title: "Child Development",
      icon: Brain,
      skills: [
        { name: "Developmental Psychology", level: 88 },
        { name: "Behavioral Management", level: 82 },
        { name: "Social-Emotional Learning", level: 85 },
        { name: "Cognitive Development", level: 80 }
      ]
    },
    {
      title: "Communication",
      icon: Users,
      skills: [
        { name: "Parent-Teacher Communication", level: 85 },
        { name: "Child Communication", level: 92 },
        { name: "Team Collaboration", level: 88 },
        { name: "Presentation Skills", level: 78 }
      ]
    },
    {
      title: "Creative Arts",
      icon: Palette,
      skills: [
        { name: "Art & Craft Activities", level: 90 },
        { name: "Music & Movement", level: 75 },
        { name: "Storytelling", level: 88 },
        { name: "Creative Play Design", level: 85 }
      ]
    }
  ];

  const personalQualities = [
    { quality: "Patient", icon: Heart, description: "Understanding and patient with children's learning pace" },
    { quality: "Creative", icon: Palette, description: "Innovative in designing engaging learning activities" },
    { quality: "Empathetic", icon: Users, description: "Deeply understanding of children's emotional needs" },
    { quality: "Adaptable", icon: Brain, description: "Flexible in adjusting teaching methods to individual needs" }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Skills & Competencies</h2>
          <p className="text-xl text-muted-foreground">
            Professional skills and personal qualities that make me an effective educator
          </p>
        </div>

        {/* Technical Skills */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="shadow-soft border-0 bg-card animate-fade-in">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
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
          <h3 className="text-2xl font-bold text-foreground text-center mb-12">Personal Qualities</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {personalQualities.map((item, index) => (
              <Card key={index} className="shadow-soft border-0 bg-card hover:shadow-elegant transition-all duration-300 animate-fade-in">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
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