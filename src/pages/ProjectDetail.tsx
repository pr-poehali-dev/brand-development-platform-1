
import { useParams, Link } from "react-router-dom";
import NavBar from "@/components/NavBar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Calendar, User, Tag, BadgeCheck } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Имитация данных проектов
const portfolioProjects = [
  {
    id: 1,
    title: "Минималистичный ресторан",
    category: "Коммерческий",
    description: "Современный дизайн интерьера для ресторана высокой кухни в центре города",
    fullDescription: "Проект включает в себя полную разработку дизайн-концепции, планировочного решения и детальной проработки всех элементов интерьера. Особое внимание было уделено созданию атмосферы изысканности и комфорта, соответствующей концепции высокой кухни. Использованы натуральные материалы, сдержанная цветовая гамма и продуманное освещение для создания уникального пространства.",
    image: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    client: "RestaurantGroup",
    year: 2023,
    services: ["Дизайн интерьера", "Планировочное решение", "Авторский надзор", "Подбор материалов"],
    team: ["Анна Васильева (ведущий дизайнер)", "Михаил Петров (архитектор)", "Екатерина Смирнова (визуализатор)"],
    duration: "4 месяца"
  },
  {
    id: 2,
    title: "Жилой комплекс «Гармония»",
    category: "Жилой",
    description: "Архитектурный проект жилого комплекса с интеграцией зеленых зон и современных технологий",
    fullDescription: "Масштабный проект жилого комплекса, включающий разработку архитектурной концепции, фасадных решений и благоустройства территории. Жилой комплекс «Гармония» сочетает в себе современную архитектуру с экологичными решениями, включая зеленые крыши, вертикальное озеленение и использование возобновляемых источников энергии.",
    image: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    client: "ДевелопментСтрой",
    year: 2022,
    services: ["Архитектурное проектирование", "Ландшафтный дизайн", "Фасадные решения", "Планировка территории"],
    team: ["Дмитрий Волков (главный архитектор)", "Ольга Кузнецова (ландшафтный дизайнер)", "Сергей Иванов (инженер)"],
    duration: "18 месяцев"
  },
  {
    id: 3,
    title: "Офис IT-компании",
    category: "Коммерческий",
    description: "Эргономичное и креативное пространство для разработчиков с зонами отдыха и коллаборации",
    fullDescription: "Проект офисного пространства для IT-компании с учетом специфики работы программистов и дизайнеров. Офис разделен на функциональные зоны: рабочие пространства, переговорные комнаты, зоны отдыха и неформального общения. Особое внимание уделено эргономике, акустическому комфорту и созданию вдохновляющей атмосферы для творческой работы.",
    image: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    client: "ТехноСофт",
    year: 2023,
    services: ["Дизайн офисных помещений", "Зонирование пространства", "Подбор мебели", "Акустические решения"],
    team: ["Марина Зотова (дизайнер интерьеров)", "Павел Николаев (проектировщик)", "Алексей Сидоров (светодизайнер)"],
    duration: "6 месяцев"
  },
  {
    id: 4,
    title: "Частная вилла на побережье",
    category: "Жилой",
    description: "Роскошная вилла с панорамными окнами и собственным бассейном",
    fullDescription: "Уникальный проект частной виллы на первой линии побережья. Архитектура здания максимально интегрирована в окружающий ландшафт и ориентирована на морские виды. Особенностями проекта являются панорамное остекление, эксплуатируемая кровля с зоной отдыха, инфинити-бассейн и использование экологичных материалов, гармонирующих с природным окружением.",
    image: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    client: "Частный клиент",
    year: 2021,
    services: ["Архитектурное проектирование", "Дизайн интерьера", "Ландшафтный дизайн", "Авторский надзор"],
    team: ["Игорь Соколов (главный архитектор)", "Нина Морозова (дизайнер интерьеров)", "Кирилл Орлов (ландшафтный дизайнер)"],
    duration: "12 месяцев"
  },
  {
    id: 5,
    title: "Городской парк «Чистый воздух»",
    category: "Общественный",
    description: "Разработка концепции и планировки парка с интеграцией устойчивых экологических решений",
    fullDescription: "Проект реновации городского парка площадью 15 гектаров. Концепция основана на создании многофункционального общественного пространства с различными зонами активности, сохранением существующего природного ландшафта и внедрением инновационных экологических решений. Парк включает в себя спортивные площадки, зоны тихого отдыха, детские игровые пространства, амфитеатр для мероприятий и экологические тропы.",
    image: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    client: "Администрация города",
    year: 2022,
    services: ["Ландшафтная архитектура", "Планирование общественных пространств", "Озеленение", "Дизайн малых архитектурных форм"],
    team: ["Ольга Травина (ландшафтный архитектор)", "Антон Белов (урбанист)", "Елена Сорокина (дендролог)"],
    duration: "14 месяцев"
  },
  {
    id: 6,
    title: "Галерея современного искусства",
    category: "Общественный",
    description: "Проект реконструкции исторического здания под современную галерею",
    fullDescription: "Реконструкция исторического промышленного здания конца XIX века под галерею современного искусства. Проект сочетает в себе бережное отношение к историческому наследию и современные архитектурные решения. В рамках проекта была проведена реставрация фасадов, реорганизация внутреннего пространства для создания многофункциональных выставочных залов, обустройство атриума и внедрение современных инженерных систем.",
    image: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    client: "Фонд Искусств",
    year: 2021,
    services: ["Реконструкция", "Реставрация", "Дизайн выставочных пространств", "Музейное освещение"],
    team: ["Роман Крылов (архитектор-реставратор)", "Виктория Полякова (дизайнер)", "Артем Чернов (инженер)"],
    duration: "10 месяцев"
  }
];

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const projectId = parseInt(id || "1");
  
  // Находим проект по ID
  const project = portfolioProjects.find(p => p.id === projectId) || portfolioProjects[0];
  
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Button variant="ghost" asChild className="mb-4 pl-0 hover:bg-transparent">
              <Link to="/portfolio" className="flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Назад к портфолио
              </Link>
            </Button>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h1>
            
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center text-muted-foreground">
                <Calendar className="h-4 w-4 mr-2" />
                <span>{project.year}</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <User className="h-4 w-4 mr-2" />
                <span>{project.client}</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <Tag className="h-4 w-4 mr-2" />
                <span>{project.category}</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <div className="rounded-lg overflow-hidden mb-8">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-auto object-cover" 
                />
              </div>
              
              <Tabs defaultValue="description" className="mb-8">
                <TabsList>
                  <TabsTrigger value="description">Описание</TabsTrigger>
                  <TabsTrigger value="services">Услуги</TabsTrigger>
                  <TabsTrigger value="team">Команда</TabsTrigger>
                </TabsList>
                
                <TabsContent value="description" className="mt-4">
                  <h3 className="text-xl font-semibold mb-3">О проекте</h3>
                  <p className="text-muted-foreground mb-4">{project.fullDescription}</p>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold">Продолжительность:</span> {project.duration}
                  </p>
                </TabsContent>
                
                <TabsContent value="services" className="mt-4">
                  <h3 className="text-xl font-semibold mb-3">Предоставленные услуги</h3>
                  <ul className="space-y-2">
                    {project.services.map((service, index) => (
                      <li key={index} className="flex items-start">
                        <BadgeCheck className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                </TabsContent>
                
                <TabsContent value="team" className="mt-4">
                  <h3 className="text-xl font-semibold mb-3">Команда проекта</h3>
                  <ul className="space-y-2">
                    {project.team.map((member, index) => (
                      <li key={index} className="flex items-start">
                        <User className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                        <span>{member}</span>
                      </li>
                    ))}
                  </ul>
                </TabsContent>
              </Tabs>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-muted rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Связаться с нами</h3>
                <p className="text-muted-foreground mb-4">
                  Заинтересованы в подобном проекте? Свяжитесь с нами, чтобы обсудить ваши идеи и получить консультацию.
                </p>
                <Button className="w-full">Заказать консультацию</Button>
              </div>
              
              <Separator className="my-8" />
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Галерея проекта</h3>
                <div className="grid grid-cols-2 gap-3">
                  {project.gallery.map((image, index) => (
                    <div key={index} className="aspect-square rounded-md overflow-hidden">
                      <img 
                        src={image} 
                        alt={`${project.title} - изображение ${index + 1}`} 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Другие проекты</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {portfolioProjects
                .filter(p => p.id !== project.id)
                .slice(0, 3)
                .map(relatedProject => (
                  <div key={relatedProject.id} className="group">
                    <Link to={`/portfolio/${relatedProject.id}`}>
                      <div className="aspect-video rounded-lg overflow-hidden mb-3">
                        <img 
                          src={relatedProject.image} 
                          alt={relatedProject.title} 
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <h3 className="font-semibold group-hover:text-primary transition-colors">{relatedProject.title}</h3>
                      <p className="text-sm text-muted-foreground">{relatedProject.category}</p>
                    </Link>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetail;
