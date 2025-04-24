import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, CheckIcon, PlusCircleIcon, UserIcon, FileTextIcon, BrushIcon, UsersIcon } from "lucide-react";

interface CreateProjectDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CreateProjectDialog({ open, onOpenChange }: CreateProjectDialogProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;
  const [selectedSpecialists, setSelectedSpecialists] = useState<string[]>([]);
  const [teamOption, setTeamOption] = useState<string>("individual");

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const toggleSpecialist = (id: string) => {
    if (selectedSpecialists.includes(id)) {
      setSelectedSpecialists(selectedSpecialists.filter((item) => item !== id));
    } else {
      setSelectedSpecialists([...selectedSpecialists, id]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Логика отправки формы
    alert("Бриф успешно создан! Скоро с вами свяжутся выбранные специалисты.");
    onOpenChange(false);
    setCurrentStep(1); // Сбрасываем шаг при закрытии
  };

  // Моковые данные специалистов
  const specialists = [
    { id: "s1", name: "Алексей Иванов", role: "Графический дизайнер", rating: 4.9, projects: 23, specialization: "Логотипы, брендбуки" },
    { id: "s2", name: "Елена Петрова", role: "Брендинг-стратег", rating: 4.8, projects: 17, specialization: "Позиционирование, нейминг" },
    { id: "s3", name: "Дмитрий Соколов", role: "Веб-дизайнер", rating: 4.7, projects: 31, specialization: "Сайты, интерфейсы" },
    { id: "s4", name: "Марина Кузнецова", role: "Арт-директор", rating: 5.0, projects: 42, specialization: "Руководство проектами" },
    { id: "s5", name: "Павел Новиков", role: "Архитектор", rating: 4.6, projects: 19, specialization: "Интерьерные решения" }
  ];

  // Моковые данные команд
  const teams = [
    { id: "t1", name: "Креативная группа X", members: 5, rating: 4.9, projects: 38, specialization: "Комплексные проекты брендинга" },
    { id: "t2", name: "Дизайн-бюро ART+", members: 3, rating: 4.7, projects: 24, specialization: "Графический дизайн и веб-разработка" },
    { id: "t3", name: "Студия 'Концепт'", members: 4, rating: 4.8, projects: 29, specialization: "Архитектурные и интерьерные решения" }
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-brand">Создание брифа проекта</DialogTitle>
          <DialogDescription>
            Заполните форму брифа для поиска подходящих специалистов и команд.
            {currentStep > 1 && ` Шаг ${currentStep} из ${totalSteps}.`}
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {currentStep === 1 && (
            <div className="space-y-6 py-4">
              <div className="space-y-3">
                <Label htmlFor="project-name">Название проекта <span className="text-red-500">*</span></Label>
                <Input id="project-name" placeholder="Введите название вашего проекта" required />
              </div>

              <div className="space-y-3">
                <Label htmlFor="industry">Отрасль / сфера деятельности <span className="text-red-500">*</span></Label>
                <Select required>
                  <SelectTrigger id="industry">
                    <SelectValue placeholder="Выберите отрасль" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="it">IT / Технологии</SelectItem>
                    <SelectItem value="food">Общественное питание</SelectItem>
                    <SelectItem value="retail">Розничная торговля</SelectItem>
                    <SelectItem value="education">Образование</SelectItem>
                    <SelectItem value="healthcare">Здравоохранение</SelectItem>
                    <SelectItem value="finance">Финансы / Банкинг</SelectItem>
                    <SelectItem value="architecture">Архитектура / Строительство</SelectItem>
                    <SelectItem value="entertainment">Развлечения</SelectItem>
                    <SelectItem value="other">Другое</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-3">
                <Label htmlFor="project-description">Краткое описание <span className="text-red-500">*</span></Label>
                <Textarea 
                  id="project-description" 
                  placeholder="Опишите ваш проект, его цели и что вы хотите получить в результате" 
                  rows={4}
                  required
                />
              </div>
              
              <div className="space-y-3">
                <Label>Тип проекта <span className="text-red-500">*</span></Label>
                <RadioGroup defaultValue="new" required>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="new" id="new" />
                    <Label htmlFor="new">Новый бренд</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="rebrand" id="rebrand" />
                    <Label htmlFor="rebrand">Ребрендинг</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="extension" id="extension" />
                    <Label htmlFor="extension">Расширение существующего бренда</Label>
                  </div>
                </RadioGroup>
              </div>
              
              <div className="space-y-3">
                <Label htmlFor="company-info">Информация о компании</Label>
                <Textarea 
                  id="company-info" 
                  placeholder="Расскажите о вашей компании, её истории, ценностях и миссии" 
                  rows={3}
                />
              </div>

              <div className="space-y-3">
                <Label htmlFor="reference-links">Референсы</Label>
                <Textarea 
                  id="reference-links" 
                  placeholder="Укажите ссылки на проекты, бренды, стили, которые вам нравятся и которые могут послужить вдохновением" 
                  rows={2}
                />
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-6 py-4">
              <div className="space-y-3">
                <Label>Что требуется разработать? <span className="text-red-500">*</span></Label>
                <div className="grid grid-cols-2 gap-4 mt-2">
                  <div className="flex items-start space-x-2">
                    <Checkbox id="logo" />
                    <Label htmlFor="logo" className="leading-tight">Логотип</Label>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Checkbox id="visual-identity" />
                    <Label htmlFor="visual-identity" className="leading-tight">Фирменный стиль</Label>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Checkbox id="packaging" />
                    <Label htmlFor="packaging" className="leading-tight">Упаковка</Label>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Checkbox id="web-design" />
                    <Label htmlFor="web-design" className="leading-tight">Веб-дизайн</Label>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Checkbox id="naming" />
                    <Label htmlFor="naming" className="leading-tight">Нейминг</Label>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Checkbox id="strategy" />
                    <Label htmlFor="strategy" className="leading-tight">Стратегия бренда</Label>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Checkbox id="interior" />
                    <Label htmlFor="interior" className="leading-tight">Дизайн интерьера</Label>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Checkbox id="architecture" />
                    <Label htmlFor="architecture" className="leading-tight">Архитектурный проект</Label>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <Label htmlFor="target-audience">Целевая аудитория <span className="text-red-500">*</span></Label>
                <Textarea 
                  id="target-audience" 
                  placeholder="Опишите вашу целевую аудиторию (возраст, пол, интересы, потребности, место проживания и т.д.)" 
                  rows={3}
                  required
                />
              </div>

              <div className="space-y-3">
                <Label htmlFor="competitors">Ваши конкуренты</Label>
                <Textarea 
                  id="competitors" 
                  placeholder="Перечислите ваших основных конкурентов и что вам нравится/не нравится в их брендах" 
                  rows={3}
                />
              </div>

              <div className="space-y-3">
                <Label htmlFor="budget">Бюджет проекта <span className="text-red-500">*</span></Label>
                <Select required>
                  <SelectTrigger id="budget">
                    <SelectValue placeholder="Выберите диапазон бюджета" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="lowbud">До 100 000 ₽</SelectItem>
                    <SelectItem value="mediumbud">100 000 - 300 000 ₽</SelectItem>
                    <SelectItem value="highbud">300 000 - 500 000 ₽</SelectItem>
                    <SelectItem value="enterprisebud">Свыше 500 000 ₽</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-3">
                <Label htmlFor="timeline">Сроки выполнения <span className="text-red-500">*</span></Label>
                <Select required>
                  <SelectTrigger id="timeline">
                    <SelectValue placeholder="Выберите примерные сроки" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="urgent">Срочно (до 2 недель)</SelectItem>
                    <SelectItem value="standard">Стандартно (2-4 недели)</SelectItem>
                    <SelectItem value="relaxed">Без спешки (1-2 месяца)</SelectItem>
                    <SelectItem value="long-term">Долгосрочный проект (3+ месяца)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-3">
                <Label htmlFor="approval-process">Процесс утверждения</Label>
                <Select>
                  <SelectTrigger id="approval-process">
                    <SelectValue placeholder="Как вы хотите утверждать этапы?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="every-step">Утверждение каждого этапа</SelectItem>
                    <SelectItem value="major-milestones">Только ключевые этапы</SelectItem>
                    <SelectItem value="final-result">Только финальный результат</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-6 py-4">
              <div className="space-y-3">
                <Label>Как вы хотите работать со специалистами? <span className="text-red-500">*</span></Label>
                <Tabs 
                  defaultValue="specialist-team" 
                  className="w-full"
                  onValueChange={(value) => setTeamOption(value)}
                >
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="specialist-team">
                      <div className="flex flex-col items-center gap-1">
                        <UsersIcon className="h-4 w-4" />
                        <span>Выбрать команду</span>
                      </div>
                    </TabsTrigger>
                    <TabsTrigger value="individual">
                      <div className="flex flex-col items-center gap-1">
                        <UserIcon className="h-4 w-4" />
                        <span>Выбрать специалистов</span>
                      </div>
                    </TabsTrigger>
                    <TabsTrigger value="platform">
                      <div className="flex flex-col items-center gap-1">
                        <BrushIcon className="h-4 w-4" />
                        <span>Автоподбор</span>
                      </div>
                    </TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="specialist-team" className="p-4 border rounded-md mt-2">
                    <p className="text-sm text-muted-foreground mb-4">
                      Выберите уже сформированную команду специалистов с опытом совместной работы:
                    </p>
                    
                    <div className="space-y-3">
                      {teams.map((team) => (
                        <div 
                          key={team.id}
                          className="p-4 border rounded-md cursor-pointer transition-colors hover:border-primary/80 hover:bg-primary/5"
                        >
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="font-medium text-lg">{team.name}</h4>
                              <p className="text-sm text-muted-foreground">{team.specialization}</p>
                              <div className="flex items-center gap-2 mt-1">
                                <Badge variant="outline" className="text-xs">
                                  <UsersIcon className="w-3 h-3 mr-1" /> {team.members} участников
                                </Badge>
                                <Badge variant="outline" className="text-xs">
                                  <FileTextIcon className="w-3 h-3 mr-1" /> {team.projects} проектов
                                </Badge>
                                <Badge variant="outline" className="text-xs">
                                  ⭐ {team.rating}
                                </Badge>
                              </div>
                            </div>
                            <Button variant="outline" size="sm">Выбрать</Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="individual" className="space-y-4 p-4 border rounded-md mt-2">
                    <p className="text-sm text-muted-foreground mb-2">
                      Выберите отдельных специалистов для своего проекта:
                    </p>
                    
                    <div className="space-y-3">
                      {specialists.map((specialist) => (
                        <div 
                          key={specialist.id}
                          className={`p-3 border rounded-md cursor-pointer transition-colors ${
                            selectedSpecialists.includes(specialist.id) 
                              ? "border-primary bg-primary/5" 
                              : "hover:border-muted-foreground"
                          }`}
                          onClick={() => toggleSpecialist(specialist.id)}
                        >
                          <div className="flex justify-between items-center">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
                                <UserIcon className="w-5 h-5 text-muted-foreground" />
                              </div>
                              <div>
                                <p className="font-medium">{specialist.name}</p>
                                <p className="text-sm text-muted-foreground">{specialist.role}</p>
                                <p className="text-xs text-muted-foreground">{specialist.specialization}</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <Badge variant="outline" className="text-xs">
                                ⭐ {specialist.rating}
                              </Badge>
                              <Badge variant="outline" className="text-xs">
                                {specialist.projects} проектов
                              </Badge>
                              {selectedSpecialists.includes(specialist.id) && (
                                <CheckIcon className="w-5 h-5 text-primary" />
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <Button 
                      type="button" 
                      variant="outline" 
                      className="w-full flex items-center justify-center gap-2"
                    >
                      <PlusCircleIcon className="w-4 h-4" />
                      Показать больше специалистов
                    </Button>
                  </TabsContent>
                  
                  <TabsContent value="platform" className="p-4 border rounded-md mt-2">
                    <p className="text-sm text-muted-foreground mb-4">
                      Наша платформа автоматически подберет подходящих специалистов или команду на основе вашего брифа. 
                      Мы предложим оптимальный состав исполнителей с учетом ваших требований, сроков и бюджета.
                    </p>
                    
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="priority-quality" defaultChecked />
                        <Label htmlFor="priority-quality">Приоритет качества над скоростью</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="teamwork" />
                        <Label htmlFor="teamwork">Предпочитаю работу в команде специалистов</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="experience-preference" />
                        <Label htmlFor="experience-preference">Только опытные специалисты (от 10 проектов)</Label>
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <Label htmlFor="special-requirements">Дополнительные требования к специалистам</Label>
                      <Textarea 
                        id="special-requirements" 
                        placeholder="Укажите особые требования или пожелания к выбору специалистов" 
                        rows={3}
                        className="mt-2"
                      />
                    </div>
                  </TabsContent>
                </Tabs>
              </div>

              <div className="space-y-3">
                <Label htmlFor="communication">Предпочтительный способ коммуникации</Label>
                <Select>
                  <SelectTrigger id="communication">
                    <SelectValue placeholder="Выберите способ общения" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="platform">Чат на платформе</SelectItem>
                    <SelectItem value="email">Email</SelectItem>
                    <SelectItem value="phone">Телефон</SelectItem>
                    <SelectItem value="messenger">Мессенджеры</SelectItem>
                    <SelectItem value="meetings">Очные встречи</SelectItem>
                    <SelectItem value="video">Видеоконференции</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-3">
                <Label htmlFor="additional-info">Дополнительная информация</Label>
                <Textarea 
                  id="additional-info" 
                  placeholder="Любая дополнительная информация, которая может быть полезна для проекта" 
                  rows={3}
                />
              </div>
              
              <div className="space-y-2 bg-muted/50 p-4 rounded-md">
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" required />
                  <Label htmlFor="terms" className="text-sm">
                    Я согласен с <a href="#" className="text-primary hover:underline">условиями предоставления услуг</a> и <a href="#" className="text-primary hover:underline">политикой конфиденциальности</a>
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="updates" defaultChecked />
                  <Label htmlFor="updates" className="text-sm">
                    Я хочу получать обновления о статусе проекта на email
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="revisions" />
                  <Label htmlFor="revisions" className="text-sm">
                    Я понимаю, что могу запросить изменения на определенных этапах проекта
                  </Label>
                </div>
              </div>
            </div>
          )}

          <div className="flex justify-between mt-6">
            {currentStep > 1 ? (
              <Button type="button" variant="outline" onClick={handleBack}>
                Назад
              </Button>
            ) : (
              <div></div> // Placeholder для выравнивания
            )}
            
            {currentStep < totalSteps ? (
              <Button type="button" onClick={handleNext}>
                Далее
              </Button>
            ) : (
              <Button type="submit" className="bg-primary hover:bg-primary/90">
                Создать бриф
              </Button>
            )}
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
