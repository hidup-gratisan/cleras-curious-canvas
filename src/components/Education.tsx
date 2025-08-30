import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Award } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">Education</h2>
          <p className="text-xl text-muted-foreground">
            My academic foundation in education
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-glow border border-border/50 bg-gradient-card backdrop-blur-sm animate-fade-in hover:border-primary/30 transition-all duration-500">
            <CardContent className="p-8">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-soft">
                    <Award className="h-10 w-10 text-primary-foreground" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      Sarjana Pendidikan (S.Pd)
                    </h3>
                    <h4 className="text-xl text-primary font-semibold mb-3">
                      Pendidikan Guru Anak Usia Dini
                    </h4>
                    <div className="flex flex-col sm:flex-row gap-4 text-muted-foreground mb-4">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>Universitas Muhammadiyah Ponorogo</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>2020-2024</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="h-4 w-4" />
                        <span>IPK: 3.84/4.00</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h5 className="font-semibold text-foreground mb-3">Key Competencies Developed:</h5>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                        Child Development
                      </Badge>
                      <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                        Educational Psychology
                      </Badge>
                      <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                        Teaching Methods
                      </Badge>
                      <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                        Curriculum Design
                      </Badge>
                      <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                        Communication Skills
                      </Badge>
                      <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                        Organizational Skills
                      </Badge>
                    </div>
                  </div>

                  <p className="text-muted-foreground">
                    Comprehensive program focused on developing professional educators capable of 
                    nurturing and educating children. The program included theoretical foundations, 
                    practical teaching experience, and research in child development and education.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;