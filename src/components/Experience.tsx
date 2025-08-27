import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      title: "Teaching Intern",
      company: "TK Aisyiyah Bustanul Athfal",
      location: "Ponorogo, East Java",
      period: "Aug 2023 - Dec 2023",
      type: "Internship",
      description: "Gained hands-on experience in early childhood education through comprehensive teaching internship program. Developed practical skills in classroom management, lesson planning, and child development assessment.",
      achievements: [
        "Assisted in daily classroom activities for 20+ children aged 4-6 years",
        "Developed and implemented creative learning activities",
        "Collaborated with senior teachers on curriculum delivery",
        "Conducted parent-teacher communication sessions"
      ],
      skills: ["Classroom Management", "Lesson Planning", "Child Assessment", "Parent Communication"]
    },
    {
      title: "Volunteer Teaching Assistant",
      company: "PAUD Melati Ponorogo",
      location: "Ponorogo, East Java", 
      period: "Jan 2023 - Jul 2023",
      type: "Volunteer",
      description: "Volunteered as teaching assistant to gain practical experience in early childhood education while completing academic studies. Focused on supporting children with diverse learning needs.",
      achievements: [
        "Supported 15+ children with various learning activities",
        "Assisted in organizing educational games and storytelling sessions",
        "Helped create visual learning materials and displays",
        "Participated in monthly parent engagement events"
      ],
      skills: ["Creative Activities", "Visual Materials", "Storytelling", "Community Engagement"]
    },
    {
      title: "Student Mentor",
      company: "Universitas Muhammadiyah Ponorogo",
      location: "Ponorogo, East Java",
      period: "Sep 2022 - Dec 2023", 
      type: "Leadership",
      description: "Served as student mentor for junior students in the Early Childhood Education program. Provided academic guidance and support for new students adapting to university life.",
      achievements: [
        "Mentored 10+ junior students throughout their first year",
        "Organized study groups and academic workshops",
        "Facilitated peer-to-peer learning sessions",
        "Achieved 95% mentee retention rate"
      ],
      skills: ["Leadership", "Mentoring", "Academic Support", "Peer Learning"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">Experience</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Practical experience in early childhood education through internships, volunteer work, and leadership roles
          </p>
        </motion.div>

        <motion.div 
          className="max-w-4xl mx-auto space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {experiences.map((exp, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="shadow-soft border border-border/50 bg-gradient-card backdrop-blur-sm hover:shadow-glow hover:border-primary/30 transition-all duration-500 group">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row gap-6">
                    {/* Left Side - Icon and Type */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-soft group-hover:shadow-glow transition-all duration-300">
                        <Building className="h-8 w-8 text-primary-foreground" />
                      </div>
                      <div className="mt-4 text-center">
                        <Badge 
                          variant="secondary" 
                          className={`
                            ${exp.type === 'Internship' ? 'bg-primary/20 text-primary border-primary/30' : ''}
                            ${exp.type === 'Volunteer' ? 'bg-secondary/20 text-secondary border-secondary/30' : ''}
                            ${exp.type === 'Leadership' ? 'bg-accent/20 text-accent-foreground border-accent/30' : ''}
                          `}
                        >
                          {exp.type}
                        </Badge>
                      </div>
                    </div>

                    {/* Right Side - Content */}
                    <div className="flex-1">
                      <div className="mb-4">
                        <h3 className="text-2xl font-bold text-foreground mb-2">{exp.title}</h3>
                        <h4 className="text-xl text-primary font-semibold mb-3">{exp.company}</h4>
                        
                        <div className="flex flex-col sm:flex-row gap-4 text-muted-foreground mb-4">
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            <span>{exp.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            <span>{exp.period}</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-6">{exp.description}</p>

                      {/* Achievements */}
                      <div className="mb-6">
                        <h5 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                          <TrendingUp className="h-4 w-4" />
                          Key Achievements
                        </h5>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="text-muted-foreground flex items-start gap-2">
                              <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Skills */}
                      <div>
                        <h5 className="font-semibold text-foreground mb-3">Skills Developed</h5>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, skillIndex) => (
                            <Badge 
                              key={skillIndex} 
                              variant="outline" 
                              className="border-border/50 text-foreground hover:bg-primary/10 hover:border-primary/50 transition-colors"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;