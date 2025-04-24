import { MountainSnow, Users, Compass, Eye, BrainCircuit, LayoutDashboard } from "lucide-react";

const features = [
  {
    icon: <MountainSnow className="h-10 w-10 text-primary" />,
    title: "Разработка бренда с нуля",
    description: "Полный цикл создания бренда от концепции до готовой айдентики для вашего бизнеса."
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: "Команда специалистов",
    description: "Подберите команду профессионалов с разными стилями и видением под ваш проект."
  },
  {
    icon: <Eye className="h-10 w-10 text-primary" />,
    title: "Полный контроль",
    description: "Наблюдайте и контролируйте процесс разработки на всех этапах производства."
  },
  {
    icon: <Compass className="h-10 w-10 text-primary" />,
    title: "Индивидуальный подход",
    description: "Выберите СВОЕГО специалиста, который наилучшим образом подойдет для вашего проекта."
  },
  {
    icon: <BrainCircuit className="h-10 w-10 text-primary" />,
    title: "Командная работа",
    description: "Специалисты могут формировать команды для комплексной работы над сложными проектами."
  },
  {
    icon: <LayoutDashboard className="h-10 w-10 text-primary" />,
    title: "Детальная информация",
    description: "Получайте развёрнутую информацию об этапах разработки и вносите изменения."
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-brand font-bold mb-6">
            Преимущества работы с нами
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Наша платформа соединяет клиентов с профессионалами и обеспечивает 
            прозрачность на всех этапах создания бренда.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-accent/50 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
