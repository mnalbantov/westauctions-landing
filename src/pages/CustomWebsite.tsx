import { Laptop, Palette, Gauge, ArrowRight, CheckCircle2, Zap, Phone } from 'lucide-react';
import { useLanguageStore } from '../store';
import { translations } from '../translations';

export function CustomWebsite() {
  const { language } = useLanguageStore();
  const t = translations[language].customWebsite;

  const trustedClients = [
    {
      name: 'AutoMart Bulgaria',
      image: 'https://play-lh.googleusercontent.com/_fAahFZsy7snYUlf2_TB4a-xHwT-GmCr8vynzhwrWz7qdjs7rNnM-ipH-xH1Lzx5J5kv=w480-h960',
      description: 'Водещ вносител на автомобили от САЩ и Канада',
      website: 'https://automart-bg.com',
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.mnt.developer.automart',
      appStoreUrl: 'https://apps.apple.com/bg/app/automart-bulgaria/id6479080752'
    },
    {
      name: 'Ruven  Trans',
      image: 'https://ruven-bg.com/media/64944fdf9fa60ruven-logo.svg',
      description: 'Premium вносител и транспорт',
      website: 'https://ruven-bg.com'
    },
    {
      name: 'Atlantic Export',
      image: 'https://play-lh.googleusercontent.com/Q__53yKEenAONFPa7YjiT-zL4dfjYTMy6bDd1yICexdwaiHBKO6pvEsEH7m2xMjrKAk=w480-h960',
      description: 'Основен и доверен партньор и вносител на автомобили от ',
      website: 'https://atlanticexport.eu'
    },
    {
      name: 'West Auctions',
      image: 'https://auto-hub.site/img/banner-img-01.png',
      description: 'Реномиран вносител на дилърски автомобили',
      website: 'https://westauctions.eu'
    }
  ];

  const mobileApps = [
    {
      name: 'AutoMart Bulgaria',
      logo: 'https://play-lh.googleusercontent.com/_fAahFZsy7snYUlf2_TB4a-xHwT-GmCr8vynzhwrWz7qdjs7rNnM-ipH-xH1Lzx5J5kv=w480-h960',
      description: 'Comprehensive vehicle import solution with real-time auction monitoring',
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.mnt.developer.automart',
      appStoreUrl: 'https://apps.apple.com/bg/app/automart-bulgaria/id6479080752',
      screenshots: [
        {
          image: 'https://play-lh.googleusercontent.com/W3SjAjWGmNhemTioXrwbuTFF42pW9B91IMttcHsjY2n6Hmot8gcy-J3JlYKuOuO-zu2I=w5120-h2880',
          description: 'Main app screen'
        },
        {
          image: 'https://play-lh.googleusercontent.com/oxzQOhsiq8Dgpr_7A3htulMPL4oW4PB480lm8f171onb1LyK0tgjyMr3eJEGgpiWTho=w5120-h2880',
          description: 'Filter app screen'
        },
        {
          image: 'https://play-lh.googleusercontent.com/QDCVWkKT6p2gJe-X6osRSjBi0gcww80YMasoppkiNDJastLDYa8JzO-Cosm3VKImCvo=w5120-h2880',
          description: 'Vehicle list app screen'
        },
        {
          image: 'https://play-lh.googleusercontent.com/-z7LQqvisfq36M1bqKilZWhKF3vhs7HO1PURkrxGrh62JLwIv8s0YCT36Rsoi9q9oFLA=w5120-h2880',
          description: 'Vehicle details app screen'
        }
      ],
      features: [
        'Real-time auction monitoring',
        'Vehicle search and filtering',
        'Detailed vehicle information',
        'Push notifications for auctions',
        'Offline vehicle catalog'
      ]
    },
    {
      name: 'Atlantic Export',
      logo: 'https://play-lh.googleusercontent.com/Q__53yKEenAONFPa7YjiT-zL4dfjYTMy6bDd1yICexdwaiHBKO6pvEsEH7m2xMjrKAk=w480-h960',
      description: 'Complete vehicle import solution with real-time auction monitoring',
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.mnt.developer.atlanticexport',
      screenshots: [
        {
          image: 'https://play-lh.googleusercontent.com/0VIcA8KUk0G3scAE4S2ehD4gQiHPQx8Su9mTKIDIiLj1grvWsGeoJexndFQPvoZbsl8=w5120-h2880',
          description: 'Main app screen'
        },
        {
          image: 'https://play-lh.googleusercontent.com/d9eUucI9b7HAc1zpQ5Run2KSHAShtnjfZlymMajh9uUunIhVfnKP6SJXS0ddODRrhHU=w5120-h2880',
          description: 'Menu app screen'
        },
        {
          image: 'https://play-lh.googleusercontent.com/JV5GTy0wgHypRiL2Es20EH-j8WrYnulhL2wl4x3EjhMcr0IWcbmlyXNGqdwC96or51s=w5120-h2880',
          description: 'Vehicle list app screen'
        },
        {
          image: 'https://play-lh.googleusercontent.com/fer0wvYebArVaCXoV6ePhjCgpZk5wmbh84q5P-GwKoeTHTEZVrlhBMF15S3FeFQq1wc=w5120-h2880',
          description: 'Vehicle details app screen'
        }
      ],
      features: [
        'Real-time auction monitoring',
        'Vehicle search and filtering',
        'Detailed vehicle information',
        'Push notifications for auctions',
        'Offline vehicle catalog',
        "Online bidding for end customers"
      ]
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-700 to-primary-900 py-24">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80"
            alt="Web Development"
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
              {t.hero.startBuilding} <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">{t.features.title}</h2>
              <p className="text-lg text-gray-600">{t.features.subtitle}</p>
              <div className="grid gap-4">
                <FeatureItem
                  icon={<Laptop />}
                  title={t.features.customDesign}
                  description={t.features.customDesignDesc}
                />
                <FeatureItem
                  icon={<Palette />}
                  title={t.features.brandedExp}
                  description={t.features.brandedExpDesc}
                />
                <FeatureItem
                  icon={<Gauge />}
                  title={t.features.performance}
                  description={t.features.performanceDesc}
                />
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
                alt="Website Preview"
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Applications Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Мобилни приложения</h2>
            <p className="text-lg text-gray-600">Персонализирани решения за мобилни приложения за вашият бизнес и аудитория</p>
          </div>
          {mobileApps.map((app, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
              <div className="p-8">
                <div className="flex items-start gap-6 mb-8">
                  <img 
                    src={app.logo} 
                    alt={`${app.name} logo`}
                    className="w-24 h-24 rounded-xl shadow-lg"
                  />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{app.name}</h3>
                    <p className="text-gray-600 mb-4">{app.description}</p>
                    <div className="flex gap-4">
                      <a
                        href={app.playStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center"
                      >
                        <img 
                          src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" 
                          alt="Get it on Google Play"
                          className="h-16"
                        />
                      </a>
                      {app.appStoreUrl && (
                        <a
                          href={app.appStoreUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center"
                        >
                          <img 
                            src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg"
                            alt="Download on the App Store"
                            className="h-12 mt-2"
                          />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  {app.screenshots.map((screenshot, idx) => (
                    <div key={idx} className="relative group">
                      <img
                        src={screenshot.image}
                        alt={screenshot.description}
                        className="rounded-lg shadow-md"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity flex items-center justify-center">
                        <p className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity text-center p-2">
                          {screenshot.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Features</h4>
                  <ul className="grid grid-cols-2 gap-4">
                    {app.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-600">
                        <CheckCircle2 className="w-5 h-5 text-primary-600" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trusted Clients Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.trustedBy.title}</h2>
            <p className="text-lg text-gray-600">{t.trustedBy.subtitle}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustedClients.map((client) => (
              <a
                key={client.name}
                href={client.website}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={client.image}
                    alt={client.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{client.name}</h3>
                  <p className="text-gray-600">{client.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            {t.pricing.cta}
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            {t.pricing.ctaSubtitle}
          </p>
          <button className="bg-white text-primary-700 hover:bg-primary-50 px-8 py-3 rounded-lg font-semibold inline-flex items-center gap-2">
            <Zap className="w-5 h-5" />
            {t.pricing.startTrial}
          </button>
        </div>
      </section>
    </div>
  );
}

function FeatureItem({ icon, title, description }) {
  return (
    <div className="flex gap-4 items-start">
      <div className="bg-primary-50 p-2 rounded-lg text-primary-600">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}