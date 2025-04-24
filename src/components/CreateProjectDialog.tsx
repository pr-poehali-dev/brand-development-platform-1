import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

interface CreateProjectDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CreateProjectDialog({ open, onOpenChange }: CreateProjectDialogProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика отправки формы
    alert("Бриф успешно создан!");
    onOpenChange(false);
    setCurrentStep(1); // Сбрасываем шаг при закрытии
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-brand">Создание нового проекта</DialogTitle>
          <DialogDescription>
            Заполните форму брифа, чтобы начать работу над вашим брендом.
            {currentStep > 1 && ` Шаг ${currentStep} из ${totalSteps}.`}
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit}>
          {currentStep === 1 && (
            <div className="space-y-6 py-4">
              <div className="space-y-2">
                <Label htmlFor="project-name">Название проекта</Label>
                <Input id="project-name" placeholder="Введите название вашего проекта" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="industry">Отрасль / сфера деятельности</Label>
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
                    <SelectItem value="entertainment">Развлечения</SelectItem>
                    <SelectItem value="other">Другое</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="project-description">Краткое описание</Label>
                <Textarea 
                  id="project-description" 
                  placeholder="Опишите ваш проект в нескольких предложениях" 
                  rows={4}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label>Тип проекта</Label>
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
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-6 py-4">
              <div className="space-y-2">
                <Label>Что вам нужно разработать? (можно выбрать несколько)</Label>
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
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="target-audience">Целевая аудитория</Label>
                <Textarea 
                  id="target-audience" 
                  placeholder="Опишите вашу целевую аудиторию (возраст, пол, интересы, место проживания и т.д.)" 
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="competitors">Ваши конкуренты</Label>
                <Textarea 
                  id="competitors" 
                  placeholder="Перечислите ваших основных конкурентов" 
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="budget">Бюджет проекта</Label>
                <Select>
                  <SelectTrigger id="budget">
                    <SelectValue placeholder="Выберите бюджет" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">До 100 000 ₽</SelectItem>
                    <SelectItem value="medium">100 000 - 300 000 ₽</SelectItem>
                    <SelectItem value="high">300 000 - 500 000 ₽</SelectItem>
                    <SelectItem value="enterprise">Свыше 500 000 ₽</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-6 py-4">
              <div className="space-y-2">
                <Label htmlFor="visual-style">Предпочитаемый визуальный стиль</Label>
                <Textarea 
                  id="visual-style" 
                  placeholder="Опишите, какой визуальный стиль вы предпочитаете (минимализм, яркий и красочный, корпоративный и т.д.)" 
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="inspiration">Примеры для вдохновения</Label>
                <Textarea 
                  id="inspiration" 
                  placeholder="Добавьте ссылки на бренды или проекты, которые вам нравятся" 
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="timeline">Сроки выполнения</Label>
                <Select>
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

              <div className="space-y-2">
                <Label>Как вы предпочитаете выбирать специалистов?</Label>
                <RadioGroup defaultValue="platform-choice" required>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="platform-choice" id="platform-choice" />
                    <Label htmlFor="platform-choice">Платформа предложит подходящих специалистов</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="self-selection" id="self-selection" />
                    <Label htmlFor="self-selection">Хочу самостоятельно выбрать специалистов</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="additional-info">Дополнительная информация</Label>
                <Textarea 
                  id="additional-info" 
                  placeholder="Любая дополнительная информация, которая может быть полезна для проекта" 
                  rows={3}
                />
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
