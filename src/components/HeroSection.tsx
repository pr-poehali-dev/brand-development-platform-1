import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CreateProjectDialog } from "@/components/CreateProjectDialog";

const HeroSection = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div className="relative pt-32 pb-24 md:py-40 bg-gradient-to-br from-accent/80 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-brand font-bold mb-6 tracking-tight">
            Разработка бренда с нуля <br />
            в бюро <span className="text-primary">DA\LI</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-muted-foreground">
            Объединяем специалистов с разными стилями и навыками для создания 
            уникальных брендов. Контролируйте процесс на всех этапах и работайте
            с профессионалами, которые подходят именно вам.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => setIsDialogOpen(true)}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
            >
              Создать проект
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary text-foreground hover:bg-accent"
            >
              Узнать больше
            </Button>
          </div>
        </div>
      </div>
      
      <CreateProjectDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
    </div>
  );
};

export default HeroSection;
