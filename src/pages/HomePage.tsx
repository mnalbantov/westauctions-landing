import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Car, Database, Globe2, BarChart3, Shield, ArrowRight, Code, CheckCircle2, Zap, Gauge } from 'lucide-react';
import { useLanguageStore } from '../store';
import { translations } from '../translations';
import { GetStartedModal } from '../components/GetStartedModal';

export function HomePage() {
  const { language } = useLanguageStore();
  const t = translations[language];
  const [isModalOpen, setIsModalOpen] = useState(false);

  const solutions = [
    {
      icon: <Database className="w-8 h-8" />,
      title: t.features.api.title,
      description: t.features.api.description,
      link: '/api',
      color: 'from-blue-500 to-blue-700'
    },
    {
      icon: <Globe2 className="w-8 h-8" />,
      title: t.features.websites.title,
      description: t.features.websites.description,
      link: '/custom-website',
      color: 'from-purple-500 to-purple-700'
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: t.features.analytics.title,
      description: t.features.analytics.description,
      link: '/auction-extension',
      color: 'from-emerald-500 to-emerald-700'
    }
  ];

  const stats = [
    { value: '50К+', label: 'Активни клиенти' },
    { value: '100+', label: 'Партньори' },
    { value: '1M+', label: 'API заявки месечно' },
    { value: '99.9%', label: 'Надеждност' }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-700 to-primary-900 py-32">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80"
            alt="Luxury car background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-8">
              <Car className="w-12 h-12 text-primary-300" />
              <h1 className="text-5xl md:text-7xl font-bold text-white">
                AutoHub <span className="text-primary-300">Pro</span>
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-12">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-white text-primary-700 hover:bg-primary-50 px-8 py-4 rounded-lg font-semibold flex items-center gap-2 justify-center"
              >
                {t.hero.getStarted} <ArrowRight className="w-5 h-5" />
              </button>
              <Link
                to="/api#pricing"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-700 transition-colors flex items-center gap-2 justify-center"
              >
                {t.hero.viewPricing} <Gauge className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.features.title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Цялостни решения за вашите бизнес нужди при внос на превозни средства
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <Link 
                key={index}
                to={solution.link}
                className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className={`bg-gradient-to-r ${solution.color} p-6`}>
                  <div className="bg-white/10 w-16 h-16 rounded-lg flex items-center justify-center text-white">
                    {solution.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600">{solution.description}</p>
                  <div className="mt-4 flex items-center text-primary-600 font-semibold">
                    Научи повече <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

         {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                С какво сме по-добри от другите?
              </h2>
              <div className="space-y-6">
                <FeatureItem
                  icon={<Shield className="w-6 h-6" />}
                  title="Иновативост и креативност"
                  description="Използваме най-новите технологии и стандарти в индустрията"
                />
                <FeatureItem
                  icon={<Zap className="w-6 h-6" />}
                  title="Изключително бързи"
                  description="Актуализации в реално време и бърз пренос на данни"
                />
                <FeatureItem
                  icon={<Code className="w-6 h-6" />}
                  title="Опитът в нужда"
                  description="Познаваме добре проблемите и нуждите в индустрията,за да предложим най-добрите решения"
                />
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80"
                  alt="Office environment"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-xl p-6 max-w-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-primary-100 p-3 rounded-full">
                    <CheckCircle2 className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Без аналог</h4>
                    <p className="text-sm text-gray-600">С доверие от лидерите в бранша и официална колаборция с търговите компании</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
  <section className="py-20 bg-primary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Готови ли сте да престуктурирате Бизнеса си?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Присъединете се сега и станете част от голямото ни семейство и партньорска мрежа.
          </p>
          <button className="bg-white text-primary-700 hover:bg-primary-50 px-8 py-4 rounded-lg font-semibold inline-flex items-center gap-2">
            Стартирайте безплатно <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Get Started Modal */}
      <GetStartedModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

function FeatureItem({ icon, title, description }) {
  return (
    <div className="flex gap-4 items-start">
      <div className="bg-primary-50 p-3 rounded-lg text-primary-600">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}