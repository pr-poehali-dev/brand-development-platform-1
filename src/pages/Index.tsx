import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <NavBar />
      <main>
        <HeroSection />
        <FeaturesSection />

        {/* Можно добавить дополнительные секции: примеры работ, команда, отзывы и т.д. */}
        
        <footer className="bg-background border-t py-10">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0">
                <h2 className="text-2xl font-brand font-bold">DA\LI</h2>
                <p className="text-sm text-muted-foreground mt-2">
                  Архитектурно-дизайнерское бюро, предоставляющее<br />
                  услугу по разработке Бренда с нуля.
                </p>
              </div>
              <div className="text-center md:text-right">
                <p className="text-sm text-muted-foreground">
                  &copy; {new Date().getFullYear()} DA\LI. Все права защищены.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
