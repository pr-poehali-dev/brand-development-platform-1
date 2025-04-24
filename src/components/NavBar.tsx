import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CreateProjectDialog } from "@/components/CreateProjectDialog";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-md z-50 border-b">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-brand font-bold">
            DA\LI
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              Главная
            </Link>
            <Link to="/services" className="text-foreground hover:text-primary transition-colors">
              Услуги
            </Link>
            <Link to="/portfolio" className="text-foreground hover:text-primary transition-colors">
              Портфолио
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors">
              О нас
            </Link>
            <Link to="/contact" className="text-foreground hover:text-primary transition-colors">
              Контакты
            </Link>
          </div>

          <div className="hidden md:block">
            <Button 
              onClick={() => setIsDialogOpen(true)} 
              className="bg-primary hover:bg-primary/90 text-white"
            >
              Создать проект
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button 
              onClick={() => setIsDialogOpen(true)} 
              className="mr-4 bg-primary hover:bg-primary/90 text-white"
            >
              Создать проект
            </Button>
            <button
              onClick={toggleMenu}
              className="text-foreground p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-foreground hover:text-primary transition-colors block py-2">
                Главная
              </Link>
              <Link to="/services" className="text-foreground hover:text-primary transition-colors block py-2">
                Услуги
              </Link>
              <Link to="/portfolio" className="text-foreground hover:text-primary transition-colors block py-2">
                Портфолио
              </Link>
              <Link to="/about" className="text-foreground hover:text-primary transition-colors block py-2">
                О нас
              </Link>
              <Link to="/contact" className="text-foreground hover:text-primary transition-colors block py-2">
                Контакты
              </Link>
            </div>
          </div>
        )}
      </div>
      
      <CreateProjectDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
    </nav>
  );
};

export default NavBar;
