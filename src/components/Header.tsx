import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Car, Menu, X } from 'lucide-react';
import { useLanguageStore } from '../store';
import translations from '../translations';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguageStore();
  const location = useLocation();
  const t = translations[language];

  const navigation = [
    { name: t.navigation.api, href: '/api' },
    { name: 'API Docs', href: '/api-docs' },
    { name: t.navigation.customWebsite, href: '/custom-website' },
    { name: t.navigation.auctionExtension, href: '/auction-extension' },
  ];

  return (
    <header className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <Car className="h-8 w-8 text-primary-600" />
              <span className="text-xl font-bold text-gray-900">AutoHub Pro</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-semibold ${
                  location.pathname === item.href
                    ? 'text-primary-600'
                    : 'text-gray-700 hover:text-primary-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Language Switcher */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => setLanguage('en')}
              className={`flex items-center gap-2 px-3 py-1 rounded-md transition-colors ${
                language === 'en' 
                  ? 'bg-primary-50 text-primary-700' 
                  : 'hover:bg-gray-100'
              }`}
            >
              <img
                src="https://flagcdn.com/w40/gb.png"
                alt="English"
                className="w-5 h-auto"
              />
              <span className="text-sm font-medium">EN</span>
            </button>
            <button
              onClick={() => setLanguage('bg')}
              className={`flex items-center gap-2 px-3 py-1 rounded-md transition-colors ${
                language === 'bg' 
                  ? 'bg-primary-50 text-primary-700' 
                  : 'hover:bg-gray-100'
              }`}
            >
              <img
                src="https://flagcdn.com/w40/bg.png"
                alt="Bulgarian"
                className="w-5 h-auto"
              />
              <span className="text-sm font-medium">BG</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-base font-semibold ${
                    location.pathname === item.href
                      ? 'text-primary-600'
                      : 'text-gray-700 hover:text-primary-600'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex items-center gap-4 pt-4 border-t">
                <button
                  onClick={() => setLanguage('en')}
                  className={`flex items-center gap-2 px-3 py-1 rounded-md transition-colors ${
                    language === 'en' 
                      ? 'bg-primary-50 text-primary-700' 
                      : 'hover:bg-gray-100'
                  }`}
                >
                  <img
                    src="https://flagcdn.com/w40/gb.png"
                    alt="English"
                    className="w-5 h-auto"
                  />
                  <span className="text-sm font-medium">English</span>
                </button>
                <button
                  onClick={() => setLanguage('bg')}
                  className={`flex items-center gap-2 px-3 py-1 rounded-md transition-colors ${
                    language === 'bg' 
                      ? 'bg-primary-50 text-primary-700' 
                      : 'hover:bg-gray-100'
                  }`}
                >
                  <img
                    src="https://flagcdn.com/w40/bg.png"
                    alt="Bulgarian"
                    className="w-5 h-auto"
                  />
                  <span className="text-sm font-medium">Български</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}