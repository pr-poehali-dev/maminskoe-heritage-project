import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const routes = [
    { id: 'home', name: 'Главная', icon: 'Home' },
    { id: 'history', name: 'История', icon: 'BookOpen' },
    { id: 'sights', name: 'Достопримечательности', icon: 'Church' },
    { id: 'gallery', name: 'Галерея', icon: 'Image' },
    { id: 'info', name: 'Практическая информация', icon: 'Info' },
    { id: 'contacts', name: 'Контакты', icon: 'Phone' },
  ];

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Маминское</h1>
            <div className="hidden md:flex gap-6">
              {routes.map((route) => (
                <button
                  key={route.id}
                  onClick={() => scrollToSection(route.id)}
                  className={`flex items-center gap-2 hover:text-accent transition-colors ${
                    activeSection === route.id ? 'text-accent' : ''
                  }`}
                >
                  <Icon name={route.icon as any} size={18} />
                  <span>{route.name}</span>
                </button>
              ))}
            </div>
            <button className="md:hidden">
              <Icon name="Menu" size={24} />
            </button>
          </div>
        </div>
      </nav>

      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://cdn.poehali.dev/projects/2a717c4c-cc69-4f29-a7a0-207d8b20ff63/files/2f8d8b72-10fb-423d-ac73-0900d3ec414c.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="text-center text-white animate-fade-in px-4">
          <h2 className="text-5xl md:text-7xl font-bold mb-6">Маминское</h2>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Старинное уральское село с богатой историей и живописной архитектурой
          </p>
          <Button size="lg" onClick={() => scrollToSection('history')} className="bg-accent hover:bg-accent/90 text-accent-foreground">
            Узнать больше
            <Icon name="ArrowDown" size={20} className="ml-2" />
          </Button>
        </div>
      </section>

      <section id="history" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 animate-fade-in">История села</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="animate-fade-in">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <Icon name="Calendar" size={32} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-semibold mb-3">XVIII век - Основание</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Село Маминское было основано в XVIII веке русскими переселенцами на живописных берегах Урала. 
                      Название происходит от фамилии первых поселенцев. С самого начала село славилось своими 
                      мастерами-каменщиками, которые строили дома из местного красного кирпича.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="animate-fade-in">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <Icon name="Building2" size={32} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-semibold mb-3">XIX век - Расцвет</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      В XIX веке село достигло своего расцвета. Была построена величественная церковь, 
                      которая стала архитектурной доминантой села. Многие купеческие дома того времени 
                      сохранились до наших дней и являются памятниками архитектуры.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="animate-fade-in">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <Icon name="Landmark" size={32} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-semibold mb-3">Современность</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Сегодня Маминское привлекает туристов со всей России своей уникальной архитектурой 
                      и атмосферой старины. Село внесено в список исторических поселений России, 
                      ведутся работы по реставрации исторических зданий.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="sights" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Достопримечательности</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow animate-fade-in">
              <div className="h-64 bg-cover bg-center" style={{backgroundImage: `url('https://cdn.poehali.dev/projects/2a717c4c-cc69-4f29-a7a0-207d8b20ff63/files/37892f12-9e9d-47da-b6fe-f40f3b343687.jpg')`}} />
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <Icon name="Church" size={24} className="text-accent" />
                  Церковь Вознесения
                </h3>
                <p className="text-muted-foreground mb-4">
                  Величественный храм XIX века с уникальной архитектурой и восстановленными золотыми куполами.
                </p>
                <div className="flex items-center gap-2 text-sm text-primary">
                  <Icon name="Clock" size={16} />
                  <span>Открыто ежедневно 8:00-19:00</span>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow animate-fade-in">
              <div className="h-64 bg-cover bg-center" style={{backgroundImage: `url('https://cdn.poehali.dev/projects/2a717c4c-cc69-4f29-a7a0-207d8b20ff63/files/ddffd7a4-1287-4125-b3ac-7756201ed427.jpg')`}} />
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <Icon name="Home" size={24} className="text-accent" />
                  Купеческие дома
                </h3>
                <p className="text-muted-foreground mb-4">
                  Сохранившиеся старинные дома из красного кирпича с деревянной резьбой и уникальной планировкой.
                </p>
                <div className="flex items-center gap-2 text-sm text-primary">
                  <Icon name="MapPin" size={16} />
                  <span>Центральная улица</span>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow animate-fade-in">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <Icon name="TreePine" size={24} className="text-accent" />
                  Музей истории села
                </h3>
                <p className="text-muted-foreground mb-4">
                  Экспозиция, рассказывающая о быте и традициях жителей села с момента его основания.
                </p>
                <div className="flex items-center gap-2 text-sm text-primary">
                  <Icon name="Clock" size={16} />
                  <span>Вт-Вс 10:00-18:00</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 max-w-6xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-center">Интерактивная карта села</h3>
            <Card className="mb-12 overflow-hidden">
              <CardContent className="p-0">
                <div className="relative bg-muted/30 h-[500px] flex items-center justify-center">
                  <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-4 p-8">
                    <div className="col-start-2 row-start-1 flex justify-center">
                      <button className="group relative">
                        <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                          <Icon name="Church" size={32} className="text-accent-foreground" />
                        </div>
                        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-primary text-primary-foreground px-3 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                          Церковь Вознесения
                        </div>
                      </button>
                    </div>

                    <div className="col-start-1 row-start-2 flex items-center">
                      <button className="group relative">
                        <div className="w-14 h-14 bg-secondary rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                          <Icon name="Home" size={28} className="text-secondary-foreground" />
                        </div>
                        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-primary text-primary-foreground px-3 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                          Купеческие дома
                        </div>
                      </button>
                    </div>

                    <div className="col-start-2 row-start-2 flex items-center justify-center">
                      <div className="text-center">
                        <Icon name="MapPin" size={40} className="text-primary mx-auto mb-2" />
                        <p className="text-sm font-semibold">Центральная площадь</p>
                      </div>
                    </div>

                    <div className="col-start-3 row-start-2 flex items-center justify-end">
                      <button className="group relative">
                        <div className="w-14 h-14 bg-secondary rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                          <Icon name="TreePine" size={28} className="text-secondary-foreground" />
                        </div>
                        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-primary text-primary-foreground px-3 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                          Музей истории
                        </div>
                      </button>
                    </div>

                    <div className="col-start-2 row-start-3 flex justify-center items-end">
                      <button className="group relative">
                        <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                          <Icon name="Landmark" size={24} className="text-muted-foreground" />
                        </div>
                        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-primary text-primary-foreground px-3 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                          Старинная усадьба
                        </div>
                      </button>
                    </div>

                    <div className="col-start-1 row-start-1 flex items-start">
                      <button className="group relative">
                        <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                          <Icon name="Coffee" size={24} className="text-muted-foreground" />
                        </div>
                        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-primary text-primary-foreground px-3 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                          Кафе "Трапезная"
                        </div>
                      </button>
                    </div>

                    <div className="col-start-3 row-start-3 flex items-end justify-end">
                      <button className="group relative">
                        <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                          <Icon name="Hotel" size={24} className="text-muted-foreground" />
                        </div>
                        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-primary text-primary-foreground px-3 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                          Гостевой дом
                        </div>
                      </button>
                    </div>
                  </div>
                  
                  <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{zIndex: 0}}>
                    <line x1="33%" y1="20%" x2="33%" y2="50%" stroke="hsl(var(--border))" strokeWidth="2" strokeDasharray="5,5" />
                    <line x1="33%" y1="50%" x2="15%" y2="50%" stroke="hsl(var(--border))" strokeWidth="2" strokeDasharray="5,5" />
                    <line x1="33%" y1="50%" x2="66%" y2="50%" stroke="hsl(var(--border))" strokeWidth="2" strokeDasharray="5,5" />
                    <line x1="33%" y1="50%" x2="33%" y2="80%" stroke="hsl(var(--border))" strokeWidth="2" strokeDasharray="5,5" />
                  </svg>
                </div>
              </CardContent>
            </Card>

            <h3 className="text-2xl font-bold mb-6 text-center">Экскурсионные маршруты</h3>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="route1">
                <AccordionTrigger className="text-lg">
                  <div className="flex items-center gap-3">
                    <Icon name="Route" size={24} className="text-secondary" />
                    Маршрут "Архитектурное наследие" (2 часа)
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3 pt-2">
                    <p className="text-muted-foreground">
                      Пешая прогулка по историческому центру села с осмотром старинных купеческих домов и церкви.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={18} className="text-secondary mt-1 flex-shrink-0" />
                        <span>Осмотр фасадов купеческих домов XVIII-XIX веков</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={18} className="text-secondary mt-1 flex-shrink-0" />
                        <span>Посещение Церкви Вознесения</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={18} className="text-secondary mt-1 flex-shrink-0" />
                        <span>Рассказ об истории и архитектурных особенностях</span>
                      </li>
                    </ul>
                    <p className="font-semibold text-primary mt-4">Стоимость: 500₽ с человека</p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="route2">
                <AccordionTrigger className="text-lg">
                  <div className="flex items-center gap-3">
                    <Icon name="MapPinned" size={24} className="text-secondary" />
                    Маршрут "Живая история" (4 часа)
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3 pt-2">
                    <p className="text-muted-foreground">
                      Расширенная экскурсия с посещением музея и мастер-классом по традиционным ремеслам.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={18} className="text-secondary mt-1 flex-shrink-0" />
                        <span>Все объекты маршрута "Архитектурное наследие"</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={18} className="text-secondary mt-1 flex-shrink-0" />
                        <span>Экскурсия по музею истории села</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={18} className="text-secondary mt-1 flex-shrink-0" />
                        <span>Мастер-класс по гончарному делу или плетению</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={18} className="text-secondary mt-1 flex-shrink-0" />
                        <span>Чаепитие с традиционными угощениями</span>
                      </li>
                    </ul>
                    <p className="font-semibold text-primary mt-4">Стоимость: 1200₽ с человека</p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="route3">
                <AccordionTrigger className="text-lg">
                  <div className="flex items-center gap-3">
                    <Icon name="Users" size={24} className="text-secondary" />
                    Программа на целый день (6-7 часов)
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3 pt-2">
                    <p className="text-muted-foreground">
                      Полное погружение в атмосферу старинного села с обедом в традиционном стиле.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={18} className="text-secondary mt-1 flex-shrink-0" />
                        <span>Все объекты предыдущих маршрутов</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={18} className="text-secondary mt-1 flex-shrink-0" />
                        <span>Обед в гостевом доме с традиционными блюдами</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={18} className="text-secondary mt-1 flex-shrink-0" />
                        <span>Прогулка к природным достопримечательностям окрестностей</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={18} className="text-secondary mt-1 flex-shrink-0" />
                        <span>Фотосессия в исторических костюмах</span>
                      </li>
                    </ul>
                    <p className="font-semibold text-primary mt-4">Стоимость: 2500₽ с человека</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Галерея</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'https://cdn.poehali.dev/projects/2a717c4c-cc69-4f29-a7a0-207d8b20ff63/files/2f8d8b72-10fb-423d-ac73-0900d3ec414c.jpg',
              'https://cdn.poehali.dev/projects/2a717c4c-cc69-4f29-a7a0-207d8b20ff63/files/37892f12-9e9d-47da-b6fe-f40f3b343687.jpg',
              'https://cdn.poehali.dev/projects/2a717c4c-cc69-4f29-a7a0-207d8b20ff63/files/ddffd7a4-1287-4125-b3ac-7756201ed427.jpg',
              'https://cdn.poehali.dev/projects/2a717c4c-cc69-4f29-a7a0-207d8b20ff63/files/2f8d8b72-10fb-423d-ac73-0900d3ec414c.jpg',
              'https://cdn.poehali.dev/projects/2a717c4c-cc69-4f29-a7a0-207d8b20ff63/files/37892f12-9e9d-47da-b6fe-f40f3b343687.jpg',
              'https://cdn.poehali.dev/projects/2a717c4c-cc69-4f29-a7a0-207d8b20ff63/files/ddffd7a4-1287-4125-b3ac-7756201ed427.jpg',
            ].map((img, idx) => (
              <div
                key={idx}
                className="h-80 bg-cover bg-center rounded-lg shadow-lg hover:scale-105 transition-transform cursor-pointer animate-fade-in"
                style={{ backgroundImage: `url('${img}')` }}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="info" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Практическая информация</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="animate-fade-in">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                  <Icon name="Navigation" size={28} className="text-accent" />
                  Как добраться
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold mb-2">На автомобиле:</p>
                    <p className="text-muted-foreground">
                      Из Екатеринбурга по трассе М5 в сторону Челябинска, затем поворот на село Маминское. 
                      Расстояние около 120 км, время в пути 1,5-2 часа.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">На автобусе:</p>
                    <p className="text-muted-foreground">
                      Ежедневные рейсы с автовокзала Екатеринбурга. Отправление в 9:00 и 15:00.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="animate-fade-in">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                  <Icon name="Hotel" size={28} className="text-accent" />
                  Где остановиться
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold mb-2">Гостевой дом "Уральское подворье"</p>
                    <p className="text-muted-foreground mb-1">От 2000₽/сутки</p>
                    <p className="text-sm text-muted-foreground">Тел: +7 (912) 345-67-89</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Мини-отель "Маминский"</p>
                    <p className="text-muted-foreground mb-1">От 1500₽/сутки</p>
                    <p className="text-sm text-muted-foreground">Тел: +7 (912) 234-56-78</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Аренда коттеджей</p>
                    <p className="text-muted-foreground mb-1">От 3500₽/сутки</p>
                    <p className="text-sm text-muted-foreground">Для семей и компаний</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 max-w-5xl mx-auto">
            <Card className="animate-fade-in">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                  <Icon name="AlertCircle" size={28} className="text-accent" />
                  Полезные советы
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <Icon name="Check" size={20} className="text-secondary mt-1 flex-shrink-0" />
                    <span>Лучшее время для посещения — с мая по сентябрь, когда погода наиболее благоприятна</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" size={20} className="text-secondary mt-1 flex-shrink-0" />
                    <span>Рекомендуется удобная обувь для пеших прогулок по булыжным мостовым</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" size={20} className="text-secondary mt-1 flex-shrink-0" />
                    <span>Бронируйте экскурсии заранее, особенно в летний сезон и праздничные дни</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" size={20} className="text-secondary mt-1 flex-shrink-0" />
                    <span>Не забудьте фотоаппарат — село очень живописное в любое время года</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Контакты</h2>
          <div className="max-w-2xl mx-auto">
            <Card className="animate-fade-in">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Icon name="MapPin" size={24} className="text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Адрес</p>
                      <p className="text-muted-foreground">Свердловская область, село Маминское, ул. Центральная, 1</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Icon name="Phone" size={24} className="text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Телефон</p>
                      <p className="text-muted-foreground">+7 (343) 123-45-67</p>
                      <p className="text-sm text-muted-foreground mt-1">Пн-Пт 9:00-18:00</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Icon name="Mail" size={24} className="text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Email</p>
                      <p className="text-muted-foreground">info@maminskoe-ural.ru</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Icon name="Globe" size={24} className="text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Социальные сети</p>
                      <div className="flex gap-3 mt-2">
                        <Button variant="outline" size="sm">
                          <Icon name="MessageCircle" size={18} className="mr-2" />
                          VK
                        </Button>
                        <Button variant="outline" size="sm">
                          <Icon name="Send" size={18} className="mr-2" />
                          Telegram
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t">
                  <h3 className="text-xl font-semibold mb-4">Заказать экскурсию</h3>
                  <form className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="Ваше имя"
                        className="px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                      <input
                        type="tel"
                        placeholder="Телефон"
                        className="px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <textarea
                      placeholder="Комментарий к заявке"
                      rows={4}
                      className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <Button type="submit" className="w-full" size="lg">
                      Отправить заявку
                      <Icon name="Send" size={18} className="ml-2" />
                    </Button>
                  </form>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2">© 2024 Маминское - Историческое село Урала</p>
          <p className="text-sm opacity-80">Все права защищены</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;