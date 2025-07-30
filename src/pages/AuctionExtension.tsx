import { Monitor, Users, Clock, Shield, ArrowRight, Share2, MessageSquareMore, Sparkles, BrainCircuit, Layout, Smartphone, Globe, Car } from 'lucide-react';
import { useLanguageStore } from '../store';
import { translations } from '../translations';

export function AuctionExtension() {
  const { language } = useLanguageStore();
  const t = translations[language]?.auctionExtension;

  if (!t) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg text-gray-600">Loading translations...</p>
      </div>
    );
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-700 to-primary-900 py-24">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
            alt="Auction monitoring"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {t.hero.title}
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
              {t.hero.subtitle}
            </p>
            <button className="bg-white text-primary-700 hover:bg-primary-50 px-8 py-3 rounded-lg font-semibold flex items-center gap-2 mx-auto">
              <a href="https://addons.mozilla.org/en-US/firefox/addon/auction-dec/" target="_blank"> {t.hero.download}</a> <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Цялостен мониторинг на търгове</h2>
              <p className="text-lg text-gray-600">
                Проследявайте оферти, списъци за наблюдение и покупки в множество платформи за търгове от едно табло за управление.
              </p>
              <div className="grid gap-4">
                <FeatureItem
                  icon={<Monitor />}
                  title={t.features.monitoring.title}
                  description={t.features.monitoring.description}
                />
                <FeatureItem
                  icon={<Users />}
                  title={t.features.management.title}
                  description={t.features.management.description}
                />
                <FeatureItem
                  icon={<Clock />}
                  title={t.features.history.title}
                  description={t.features.history.description}
                />
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
              <img
                src="https://kehnwklkmquweyoyjijk.supabase.co/storage/v1/object/public/vin-images//auction-bidding.png"
                alt="Dashboard Preview"
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Automation Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Автоматизирана Публикация в Социални Мрежи</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Автоматично публикувайте нови автомобили във Facebook, Instagram и Viber с персонализирани AI-генерирани описания
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">AI-Powered Описания</h3>
              <div className="space-y-6">
                <FeatureItem
                  icon={<BrainCircuit />}
                  title="Интелигентни Описания"
                  description="Автоматично генериране на привлекателни описания на български език, оптимизирани за всяка платформа"
                />
                <FeatureItem
                  icon={<Share2 />}
                  title="Мултиканална Публикация"
                  description="Едновременно публикуване във Facebook, Instagram и Viber групи"
                />
                <FeatureItem
                  icon={<MessageSquareMore />}
                  title="Персонализирани Шаблони"
                  description="Създайте собствени шаблони за публикации с вашия уникален стил"
                />
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">Пример за AI-генерирано описание:</h4>
                <p className="text-gray-600">
                  🚗 MERCEDES-BENZ C300 AMG LINE 2023
                  
                  ✨ Перфектно състояние с минимални забележки
                  🏁 74,627 км | Автоматична скоростна кутия
                  💪 2.0L Турбо двигател, 255 к.с.
                  
                  ⭐ Луксозен интериор в кафява кожа
                  📱 Модерна информационна система
                  🛡️ Пълен пакет системи за безопасност
                  
                  💎 Специална цена: $29,770
                  
                  📞 За повече информация: 0879 098 869
                  #MercedesBenz #C300 #LuxuryCars #AutoImport
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80"
                alt="Social Media Dashboard"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Интегрирано Табло за Управление</h3>
                <p className="text-gray-600">Управлявайте всички ваши социални канали от едно място с интуитивен интерфейс</p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&q=80"
                alt="AI Content Generation"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">AI Генериране на Съдържание</h3>
                <p className="text-gray-600">Автоматично създаване на уникални и привлекателни описания за всеки автомобил</p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
                alt="Analytics Dashboard"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Анализ на Ефективността</h3>
                <p className="text-gray-600">Проследявайте ангажираността и резултатите от вашите публикации</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UI Templates Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Интерфейс на Приложението</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Модерен и интуитивен интерфейс за управление на вашите автомобили и публикации
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Desktop Dashboard Template */}
            <div className="col-span-2 bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gray-50 p-4 border-b">
                <div className="flex items-center gap-2">
                  <Layout className="w-5 h-5 text-primary-600" />
                  <h3 className="font-semibold text-gray-900">Десктоп Табло за Управление</h3>
                </div>
              </div>
              <img
                src="https://kehnwklkmquweyoyjijk.supabase.co/storage/v1/object/public/vin-images//vehicles-list-showcase.png"
                alt="Desktop Dashboard Template"
                className="w-full aspect-video object-cover"
              />
            </div>

            {/* Mobile App Template */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gray-50 p-4 border-b">
                <div className="flex items-center gap-2">
                  <Smartphone className="w-5 h-5 text-primary-600" />
                  <h3 className="font-semibold text-gray-900">Мобилен Изглед</h3>
                </div>
              </div>
              <img
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80"
                alt="Mobile App Template"
                className="w-full aspect-[9/16] object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Social Media Post Template */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gray-50 p-4 border-b">
                <div className="flex items-center gap-2">
                  <Share2 className="w-5 h-5 text-primary-600" />
                  <h3 className="font-semibold text-gray-900">Социални Мрежи</h3>
                </div>
              </div>
              <img
                src="https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?auto=format&fit=crop&q=80"
                alt="Social Media Template"
                className="w-full aspect-square object-cover"
              />
            </div>

            {/* Analytics Dashboard Template */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gray-50 p-4 border-b">
                <div className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-primary-600" />
                  <h3 className="font-semibold text-gray-900">Анализ на Данни</h3>
                </div>
              </div>
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
                alt="Analytics Template"
                className="w-full aspect-square object-cover"
              />
            </div>

            {/* Vehicle Details Template */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gray-50 p-4 border-b">
                <div className="flex items-center gap-2">
                  <Car className="w-5 h-5 text-primary-600" />
                  <h3 className="font-semibold text-gray-900">Детайли за Автомобил</h3>
                </div>
              </div>
              <img
                src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80"
                alt="Vehicle Details Template"
                className="w-full aspect-square object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Screenshot Showcase */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">{t.showcase.title}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
              title={t.showcase.bidding.title}
              description={t.showcase.bidding.description}
            />
            <FeatureCard
              image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80"
              title={t.showcase.analytics.title}
              description={t.showcase.analytics.description}
            />
            <FeatureCard
              image="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80"
              title={t.showcase.users.title}
              description={t.showcase.users.description}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-700 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              {t.cta.title}
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              {t.cta.subtitle}
            </p>
            <button className="bg-white text-primary-700 hover:bg-primary-50 px-8 py-3 rounded-lg font-semibold inline-flex items-center gap-2">
              <Shield className="w-5 h-5" />
              <a href="https://addons.mozilla.org/en-US/firefox/addon/auction-dec/" target="_blank">{t.cta.action}</a>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureItem({ icon, title, description }) {
  return (
    <div className="flex gap-4 items-start">
      <div className="bg-primary-50 p-2 rounded-lg">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

function FeatureCard({ image, title, description }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}