import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-8">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="text-lg font-semibold mb-2">Clera Agretyas Nur Anisa</p>
          <p className="text-background/80 mb-4">
            Early Childhood Education Graduate | Passionate Educator
          </p>
          <div className="flex items-center justify-center gap-2 text-background/60">
            <span>Made with</span>
            <Heart className="h-4 w-4 fill-current text-primary" />
            <span>for nurturing young minds</span>
          </div>
          <p className="text-background/60 text-sm mt-4">
            © 2024 Clera Agretyas Nur Anisa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;