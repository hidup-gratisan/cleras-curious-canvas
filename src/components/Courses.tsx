import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, BookOpen, Clock, Star } from "lucide-react";

const Courses = () => {
  const courses = [
    {
      title: "Pelatihan Dasar Microsoft Excel",
      provider: "Workforce Academy Partnership",
      duration: "2025",
      year: "2025",
      status: "Completed",
      rating: 4.8,
      description: "Basic training in Microsoft Excel covering fundamental spreadsheet skills, data management, and basic formulas for administrative work.",
      skills: ["Microsoft Excel", "Data Management", "Basic Formulas", "Spreadsheet Skills"]
    }
  ];

  return (
    <section id="courses" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">Professional Courses</h2>
          <p className="text-xl text-muted-foreground">
            Transitioning from education to administration through continuous professional development
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
            {courses.map((course, index) => (
              <Card 
                key={index} 
                className="shadow-glow border border-border/50 bg-gradient-card backdrop-blur-sm animate-fade-in hover:border-primary/30 transition-all duration-500 hover:scale-[1.02]"
              >
                <CardContent className="p-6">
                  <div className="flex flex-col gap-4">
                    {/* Header */}
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-foreground mb-2">
                          {course.title}
                        </h3>
                        <div className="flex items-center gap-2 text-primary font-semibold mb-3">
                          <BookOpen className="h-4 w-4" />
                          <span>{course.provider}</span>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <Badge 
                          variant={course.status === "Completed" ? "default" : "secondary"}
                          className={course.status === "Completed" 
                            ? "bg-green-100 text-green-800 hover:bg-green-200" 
                            : "bg-yellow-100 text-yellow-800 hover:bg-yellow-200"
                          }
                        >
                          {course.status}
                        </Badge>
                        {course.rating && (
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                            <span>{course.rating}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Course Details */}
                    <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{course.year}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>{course.duration}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-4">
                      {course.description}
                    </p>

                    {/* Skills */}
                    <div>
                      <h5 className="font-semibold text-foreground mb-3">Key Skills Acquired:</h5>
                      <div className="flex flex-wrap gap-2">
                        {course.skills.map((skill, skillIndex) => (
                          <Badge 
                            key={skillIndex} 
                            variant="secondary" 
                            className="bg-primary/10 text-primary hover:bg-primary/20"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
