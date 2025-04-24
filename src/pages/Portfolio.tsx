
import NavBar from "@/components/NavBar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";

const portfolioProjects = [
  {
    id: 1,
    title: "Минималистичный ресторан",
    category: "Коммерческий",
    description: "Современный дизайн интерьера для ресторана высокой кухни в центре города",
    image: "/placeholder.svg",
    client: "RestaurantGroup",
    year: 2023
  },
  {
    id: 2,
    title: "Жилой комплекс «Гармония»",
    category: "Жилой",
    description: "Архитектурный проект жилого комплекса с интеграцией зеленых зон и современных технологий",
    image: "/placeholder.svg",
    client: "ДевелопментСтрой",
    year: 2022
  },
  {
    id: 3,
    title: "Офис IT-компании",
    category: "Коммерческий",
    description: "Эргономичное и креативное пространство для разработчиков с зонами отдыха и коллаборации",
    image: "/placeholder.svg",
    client: "ТехноСофт",
    year: 2023
  },
  {
    id: 4,
    title: "Частная вилла на побережье",
    category: "Жилой",
    description: "Роскошная вилла с панорамными окнами и собственным бассейном",
    image: "/placeholder.svg",
    client: "Частный клиент",
    year: 2021
  },
  {
    id: 5,
    title: "Городской парк «Чистый воздух»",
    category: "Общественный",
    description: "Разработка концепции и планировки парка с интеграцией устойчивых экологических решений",
    image: "/placeholder.svg",
    client: "Администрация города",
    year: 2022
  },
  {
    id: 6,
    title: "Галерея современного искусства",
    category: "Общественный",
    description: "Проект реконструкции исторического здания под современную галерею",
    image: "/placeholder.svg",
    client: "Фонд Искусств",
    year: 2021
  }
];

const Portfolio = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Наше портфолио</h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
            Ознакомьтесь с нашими избранными проектами, которые демонстрируют наш подход и уровень мастерства в различных сферах дизайна и архитектуры.
          </p>
          
          <Tabs defaultValue="all" className="mb-12">
            <TabsList className="mb-6">
              <TabsTrigger value="all">Все проекты</TabsTrigger>
              <TabsTrigger value="commercial">Коммерческие</TabsTrigger>
              <TabsTrigger value="residential">Жилые</TabsTrigger>
              <TabsTrigger value="public">Общественные</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolioProjects.map(project => (
                <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="aspect-video w-full overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl">{project.title}</CardTitle>
                        <CardDescription className="mt-1">{project.category} | {project.year}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="line-clamp-2">{project.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" asChild className="w-full">
                      <Link to={`/portfolio/${project.id}`}>Подробнее о проекте</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </TabsContent>
            
            <TabsContent value="commercial" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolioProjects.filter(p => p.category === "Коммерческий").map(project => (
                <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="aspect-video w-full overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl">{project.title}</CardTitle>
                        <CardDescription className="mt-1">{project.category} | {project.year}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="line-clamp-2">{project.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" asChild className="w-full">
                      <Link to={`/portfolio/${project.id}`}>Подробнее о проекте</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </TabsContent>
            
            <TabsContent value="residential" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolioProjects.filter(p => p.category === "Жилой").map(project => (
                <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="aspect-video w-full overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl">{project.title}</CardTitle>
                        <CardDescription className="mt-1">{project.category} | {project.year}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="line-clamp-2">{project.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" asChild className="w-full">
                      <Link to={`/portfolio/${project.id}`}>Подробнее о проекте</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </TabsContent>
            
            <TabsContent value="public" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolioProjects.filter(p => p.category === "Общественный").map(project => (
                <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="aspect-video w-full overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl">{project.title}</CardTitle>
                        <CardDescription className="mt-1">{project.category} | {project.year}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="line-clamp-2">{project.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" asChild className="w-full">
                      <Link to={`/portfolio/${project.id}`}>Подробнее о проекте</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default Portfolio;
