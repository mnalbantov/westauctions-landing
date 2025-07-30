import { Car, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguageStore } from '../store';
import translations from '../translations';

export function Footer() {
  const { language } = useLanguageStore();
  const t = translations[language];

  const navigation = {
    solutions: [
      { name: t.navigation.api, href: '/api' },
      { name: t.navigation.customWebsite, href: '/custom-website' },
      { name: t.navigation.auctionExtension, href: '/auction-extension' },
    ],
    company: [
      { name: t.footer.about, href: '/about' },
      { name: t.footer.blog, href: '#' },
      { name: t.footer.contact, href: '#' },
    ],
    legal: [
      { name: t.footer.privacy, href: '#' },
      { name: t.footer.terms, href: '#' },
    ],
  };

  return (
    <footer className="bg-gray-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Link to="/" className="flex items-center gap-2">
              <Car className="h-8 w-8 text-primary-500" />
              <span className="text-xl font-bold text-white">AutoHub Pro</span>
            </Link>
            <p className="text-sm leading-6 text-gray-300">
              {t.hero.subtitle}
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gray-300">
                <Phone className="h-5 w-5" />
                <span>+359 879 098 869</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Mail className="h-5 w-5" />
                <span>mnt.developer24@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <MapPin className="h-5 w-5" />
                <span>Sofia, Bulgaria</span>
              </div>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">
                  {t.footer.solutions}
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.solutions.map((item) => (
                    <li key={item.name}>
                      <Link to={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">
                  {t.footer.company}
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">
                  {t.footer.legal}
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-400">
            &copy; {new Date().getFullYear()} AutoHub Pro. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}