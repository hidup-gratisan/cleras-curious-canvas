import { Button } from "@/components/ui/button";
import { Mail, Download, Linkedin, FileText, Award } from "lucide-react";
import { motion } from "framer-motion";
import profileImage from "@/assets/profile-clera.png";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1
      }
    }
  };
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      
      <motion.div 
        className="container mx-auto px-6 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Profile Image */}
          <motion.div className="flex-shrink-0" variants={imageVariants}>
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-glow bg-gradient-card p-1 border border-primary/20">
                <img
                  src={profileImage}
                  alt="Clera Agretyas Nur Anisa"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div className="flex-1 text-center lg:text-left" variants={itemVariants}>
            <h1 className="text-5xl lg:text-7xl font-display font-black text-foreground mb-6 tracking-tight">
              Clera Agretyas <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">Nur Anisa</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-4">
              Sarjana Pendidikan | Pendidikan AUD
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              Lulusan S1 Pendidikan yang memiliki kemampuan dan pengalaman di bidang administrasi dan organisasi
              yang baik. Berpengalaman dalam mengelola dokumen, mengatur jadwal, dan mendukung operasional
              kantor secara efektif. Aktif terlibat dalam berbagai kegiatan organisasi kampus dan mengikuti berbagai
              kursus untuk memperkuat kemampuan profesional, termasuk penguasaan software perkantoran dan
              keterampilan komunikasi.
            </p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
              variants={itemVariants}
            >
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300 border-0 font-semibold">
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </Button>
              <Button variant="outline" size="lg" className="border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary backdrop-blur-sm">
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
            </motion.div>

            <motion.div 
              className="flex gap-4 justify-center lg:justify-start"
              variants={itemVariants}
            >
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 hover:shadow-soft backdrop-blur-sm">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 hover:shadow-soft backdrop-blur-sm">
                <FileText className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 hover:shadow-soft backdrop-blur-sm">
                <Award className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 hover:shadow-soft backdrop-blur-sm">
                <Mail className="h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;