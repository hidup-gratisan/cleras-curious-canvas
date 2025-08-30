import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Award, ExternalLink, Shield, Star } from "lucide-react";

const Certificates = () => {
  const certificates = [
    {
      title: "Pelatihan Dasar Microsoft Excel",
      issuer: "Workforce Academy Partnership",
      credentialId: "MS-EXCEL-2025-001",
      issueDate: "2025",
      expiryDate: "2028",
      status: "Active",
      verificationUrl: "#",
      description: "Certification in basic Microsoft Excel training covering fundamental spreadsheet skills, data management, and basic formulas for administrative work.",
      competencies: ["Microsoft Excel", "Data Management", "Basic Formulas", "Spreadsheet Skills"]
    }
  ];

  return (
    <section id="certificates" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">Courses & Certifications</h2>
          <p className="text-xl text-muted-foreground">
            Professional training and certifications supporting career development
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
            {certificates.map((cert, index) => (
              <Card 
                key={index} 
                className="shadow-glow border border-border/50 bg-gradient-card backdrop-blur-sm animate-fade-in hover:border-primary/30 transition-all duration-500 hover:scale-[1.02]"
              >
                <CardContent className="p-6">
                  <div className="flex flex-col gap-4">
                    {/* Header */}
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-3">
                        <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center shadow-soft flex-shrink-0">
                          <Award className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-foreground mb-1">
                            {cert.title}
                          </h3>
                          <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                            <Shield className="h-4 w-4" />
                            <span>{cert.issuer}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <Badge 
                          variant="default"
                          className="bg-green-100 text-green-800 hover:bg-green-200"
                        >
                          {cert.status}
                        </Badge>
                      </div>
                    </div>

                    {/* Certificate Details */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>Issued: {cert.issueDate}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>Expires: {cert.expiryDate}</span>
                      </div>
                    </div>

                    {/* Credential ID */}
                    <div className="bg-muted/50 rounded-lg p-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-xs text-muted-foreground font-medium">Credential ID:</span>
                          <p className="text-sm font-mono text-foreground">{cert.credentialId}</p>
                        </div>
                        <button className="flex items-center gap-1 text-xs text-primary hover:text-primary/80 transition-colors">
                          <ExternalLink className="h-3 w-3" />
                          Verify
                        </button>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground">
                      {cert.description}
                    </p>

                    {/* Competencies */}
                    <div>
                      <h5 className="font-semibold text-foreground mb-2 text-sm">Core Competencies:</h5>
                      <div className="flex flex-wrap gap-1">
                        {cert.competencies.map((competency, compIndex) => (
                          <Badge 
                            key={compIndex} 
                            variant="secondary" 
                            className="bg-primary/10 text-primary hover:bg-primary/20 text-xs"
                          >
                            {competency}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Certification Summary */}
          <div className="mt-12 text-center">
            <Card className="shadow-glow border border-border/50 bg-gradient-card backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">{certificates.length}</div>
                    <div className="text-sm text-muted-foreground">Active Certifications</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">
                      {certificates.filter(cert => cert.status === "Active").length}
                    </div>
                    <div className="text-sm text-muted-foreground">Current Credentials</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">
                      {new Set(certificates.flatMap(cert => cert.competencies)).size}
                    </div>
                    <div className="text-sm text-muted-foreground">Verified Competencies</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
