import { Heart, Mail, Phone, MapPin, Linkedin, FileText, Award } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Personal Info */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Clera Agretyas Nur Anisa
            </h3>
            <p className="text-gray-300 mb-4">
              Sarjana Pendidikan | Pendidikan AUD
            </p>
            <p className="text-gray-400 text-sm">
              Lulusan S1 Pendidikan dengan pengalaman di bidang administrasi dan organisasi
            </p>
          </div>

          {/* Contact Info */}
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4 text-blue-300">Contact Information</h4>
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-2 text-gray-300">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-sm">Agretyas@gmail.com</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-gray-300">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-sm">+62-8533-6272-463</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-gray-300">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span className="text-sm">Nganjuk, Jawa Timur</span>
              </div>
            </div>
          </div>

          {/* Professional Links */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold mb-4 text-blue-300">Professional Links</h4>
            <div className="flex justify-center md:justify-end gap-4 mb-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-blue-700 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="Professional Portfolio"
              >
                <FileText className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-yellow-600 hover:bg-yellow-700 rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="Professional Certifications"
              >
                <Award className="h-5 w-5" />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              Connect for administrative and professional opportunities
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-gray-400">
              <span>Crafted with</span>
              <Heart className="h-4 w-4 fill-current text-red-400" />
              <span>and professional dedication</span>
            </div>
            <div className="text-gray-400 text-sm">
              © 2024 Clera Agretyas Nur Anisa. All rights reserved.
            </div>
          </div>
          
          {/* Career Transition Note */}
          <div className="mt-4 p-4 bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-lg border border-blue-800/50">
            <p className="text-center text-sm text-gray-300">
              <span className="font-semibold text-blue-300">Professional Background:</span> 
              {" "}Lulusan S1 Pendidikan dengan pengalaman di bidang administrasi, organisasi, dan pendidikan. 
              Siap berkontribusi dengan kemampuan manajemen dokumen, komunikasi, dan dedikasi profesional.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;