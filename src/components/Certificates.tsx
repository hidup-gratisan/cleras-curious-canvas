import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Award, ExternalLink, Shield, Star } from "lucide-react";

const Certificates = () => {
  const certificates = [
    {
      title: "Finding, Sorting, & Filtering Data in Microsoft Excel",
      issuer: "Coursera",
      credentialId: "358d5565c83fb34ac2661bdbe62af6ee",
      issueDate: "2024",
      expiryDate: "2028",
      status: "Active",
      verificationUrl: "https://coursera.org/share/358d5565c83fb34ac2661bdbe62af6ee",
      description: "Certification in finding, sorting, and filtering data in Microsoft Excel, covering spreadsheet software, business intelligence, data entry, data analysis expressions (DAX), and Microsoft Excel.",
      competencies: ["Spreadsheet Software", "Business Intelligence", "Data Entry", "Data Analysis Expressions (DAX)", "Microsoft Excel"]
    },
    {
      title: "Create a Simple Gantt Chart using Microsoft Excel",
      issuer: "Coursera",
      credentialId: "641703fbcb090ef31c18ae3a6ce2d8e3",
      issueDate: "2024",
      expiryDate: "2028",
      status: "Active",
      verificationUrl: "https://coursera.org/share/641703fbcb090ef31c18ae3a6ce2d8e3",
      description: "Certification in creating simple Gantt charts using Microsoft Excel, covering timelines, scheduling, project schedules, data visualization, project management software, dashboard, and Microsoft Excel.",
      competencies: ["Timelines", "Scheduling", "Project Schedules", "Data Visualization", "Project Management Software", "Dashboard", "Microsoft Excel"]
    },
    {
      title: "Creating a Budget with Microsoft Excel",
      issuer: "Coursera",
      credentialId: "ce5407da72d82465f69e1af62ec0e615",
      issueDate: "2024",
      expiryDate: "2028",
      status: "Active",
      verificationUrl: "https://coursera.org/share/ce5407da72d82465f69e1af62ec0e615",
      description: "Certification in creating budgets with Microsoft Excel, covering financial data, spreadsheet software, accounting and finance software, Microsoft 365, Excel formulas, budget management, budgeting, and Microsoft Excel.",
      competencies: ["Financial Data", "Spreadsheet Software", "Accounting and Finance Software", "Microsoft 365", "Excel Formulas", "Budget Management", "Budgeting", "Microsoft Excel"]
    },
    {
      title: "Create a Financial Statement using Microsoft Excel",
      issuer: "Coursera",
      credentialId: "c6c8b323f24c9827b06c5e6ffc32eedf",
      issueDate: "2024",
      expiryDate: "2028",
      status: "Active",
      verificationUrl: "https://coursera.org/share/c6c8b323f24c9827b06c5e6ffc32eedf",
      description: "Certification in creating financial statements using Microsoft Excel, covering bookkeeping, financial data, balance sheet, financial reporting, financial accounting, profit and loss (P&L) management, Excel formulas, data entry, Microsoft Excel, and financial statements.",
      competencies: ["Bookkeeping", "Financial Data", "Balance Sheet", "Financial Reporting", "Financial Accounting", "Profit and Loss (P&L) Management", "Excel Formulas", "Data Entry", "Microsoft Excel", "Financial Statements"]
    },
    {
      title: "Create Charts and Dashboards Using Microsoft Excel",
      issuer: "Coursera",
      credentialId: "764d35e6d1e7a5f36463d992bada04e7",
      issueDate: "2024",
      expiryDate: "2028",
      status: "Active",
      verificationUrl: "https://coursera.org/share/764d35e6d1e7a5f36463d992bada04e7",
      description: "Certification in creating charts and dashboards using Microsoft Excel, covering spreadsheet software, Microsoft 365, data analysis, data visualization, trend analysis, dashboard, and Microsoft Excel.",
      competencies: ["Spreadsheet Software", "Microsoft 365", "Data Analysis", "Data Visualization", "Trend Analysis", "Dashboard", "Microsoft Excel"]
    },
    {
      title: "How to Use Lookup Reference Math and Text Functions in Excel",
      issuer: "Coursera",
      credentialId: "b459899b4cc44041937caa54f97514f4",
      issueDate: "2024",
      expiryDate: "2028",
      status: "Active",
      verificationUrl: "https://coursera.org/share/b459899b4cc44041937caa54f97514f4",
      description: "Certification in using lookup reference math and text functions in Excel, covering spreadsheet software, data validation, and Microsoft Excel.",
      competencies: ["Spreadsheet Software", "Data Validation", "Microsoft Excel"]
    },
    {
      title: "Introduction to Data Analysis using Microsoft Excel",
      issuer: "Coursera",
      credentialId: "53c3e80c4ef49252619743f321e30d06",
      issueDate: "2024",
      expiryDate: "2028",
      status: "Active",
      verificationUrl: "https://coursera.org/share/53c3e80c4ef49252619743f321e30d06",
      description: "Certification in introduction to data analysis using Microsoft Excel, covering spreadsheet software, data analysis, data manipulation, data mining, pivot tables and charts, Excel formulas, and Microsoft Excel.",
      competencies: ["Spreadsheet Software", "Data Analysis", "Data Manipulation", "Data Mining", "Pivot Tables And Charts", "Excel Formulas", "Microsoft Excel"]
    },
    {
      title: "Using Basic Formulas and Functions in Microsoft Excel",
      issuer: "Coursera",
      credentialId: "a995254cde3f812fec5b51512fa9b4ef",
      issueDate: "2024",
      expiryDate: "2028",
      status: "Active",
      verificationUrl: "https://coursera.org/share/a995254cde3f812fec5b51512fa9b4ef",
      description: "Certification in using basic formulas and functions in Microsoft Excel, covering spreadsheet software, Microsoft 365, data analysis, Excel formulas, business mathematics, gross profit, and Microsoft Excel.",
      competencies: ["Spreadsheet Software", "Microsoft 365", "Data Analysis", "Excel Formulas", "Business Mathematics", "Gross Profit", "Microsoft Excel"]
    },
    {
      title: "Getting Started with Microsoft Excel",
      issuer: "Coursera",
      credentialId: "5727b9afc0767bcf4f45da4ece776f24",
      issueDate: "2024",
      expiryDate: "2028",
      status: "Active",
      verificationUrl: "https://coursera.org/share/5727b9afc0767bcf4f45da4ece776f24",
      description: "Certification in getting started with Microsoft Excel, covering spreadsheet software, Microsoft 365, productivity software, Excel formulas, and Microsoft Excel.",
      competencies: ["Spreadsheet Software", "Microsoft 365", "Productivity Software", "Excel Formulas", "Microsoft Excel"]
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
                        <button 
                          className="flex items-center gap-1 text-xs text-primary hover:text-primary/80 transition-colors"
                          onClick={() => window.open(cert.verificationUrl, '_blank')}
                        >
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
