import { Bot, Zap, Clock, Shield, ArrowRight, Image, Play, ExternalLink } from 'lucide-react';
import { useLanguageStore } from '../store';
import { translations } from '../translations';
import { Gallery } from '../components/Gallery';

export function AutomationTools() {
  const { language } = useLanguageStore();
  const t = translations[language].automationTools;

  // Gallery images - you can replace these with your actual automation tool screenshots
  const galleryImages = [
    {
      id: 1,
      title: 'Social Media Automation Dashboard',
      description: 'Automated posting to Facebook, Instagram, and Viber with AI-generated content',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80',
      category: 'Social Media'
    },
    {
      id: 2,
      title: 'Auction Monitoring Interface',
      description: 'Real-time auction tracking and bid management system',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80',
      category: 'Auction Tools'
    },
    {
      id: 3,
      title: 'Vehicle Data Synchronization',
      description: 'Automated vehicle data sync across multiple platforms',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
      category: 'Data Management'
    },
    {
      id: 4,
      title: 'AI Content Generation',
      description: 'Intelligent vehicle descriptions and marketing content creation',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80',
      category: 'AI Tools'
    },
    {
      id: 5,
      title: 'Inventory Management System',
      description: 'Automated inventory tracking and management dashboard',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80',
      category: 'Management'
    },
    {
      id: 6,
      title: 'Multi-Platform Integration',
      description: 'Seamless integration across auction platforms and websites',
      image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80',
      category: 'Integration'
    }
  ];

  const automationFeatures = [
    {
      icon: <Bot className="w-8 h-8" />,
      title: t.features.ai.title,
      description: t.features.ai.description,
      color: 'from-blue-500 to-blue-700'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: t.features.realtime.title,
      description: t.features.realtime.description,
      color: 'from-yellow-500 to-yellow-700'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: t.features.monitoring.title,
      description: t.features.monitoring.description,
      color: 'from-green-500 to-green-700'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: t.features.security.title,
      description: t.features.security.description,
      color: 'from-purple-500 to-purple-700'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-700 to-primary-900 py-24">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80"
            alt="Automation Technology"
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
              {t.hero.cta} <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.featuresSection.title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.featuresSection.subtitle}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {automationFeatures.map((feature, index) => (
              <div key={index} className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className={`bg-gradient-to-r ${feature.color} p-6`}>
                  <div className="bg-white/10 w-16 h-16 rounded-lg flex items-center justify-center text-white">
                    {feature.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <Gallery 
        images={galleryImages}
        title={t.gallery.title}
        subtitle={t.gallery.subtitle}
      />

      {/* CTA Section */}
      <section className="py-20 bg-primary-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            {t.cta.title}
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            {t.cta.subtitle}
          </p>
          <button className="bg-white text-primary-700 hover:bg-primary-50 px-8 py-3 rounded-lg font-semibold inline-flex items-center gap-2">
            <Bot className="w-5 h-5" />
            {t.cta.button}
          </button>
        </div>
      </section>
    </div>
  );
}