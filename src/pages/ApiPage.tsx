import { Code, Database, Globe2, Shield, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { JsonViewer } from '../components/JsonViewer';
import { RequestPackageModal } from '../components/RequestPackageModal';
import { useLanguageStore } from '../store';
import { translations } from '../translations';

const pricingTiers = [
  {
    name: 'Single Source',
    price: '99',
    features: [
      'Access to one data source (IAAI, Copart, or ICBC)',
      'Basic vehicle data',
      'Email support',
      'API documentation'
    ],
    sources: ['IAAI', 'Copart', 'ICBC']
  },
  {
    name: 'North America Auctions',
    price: '189',
    features: [
      'IAAI & Copart (USA + Canada)',
      'Advanced vehicle data',
      'Priority support',
      'Real-time updates',
      'API documentation'
    ],
    highlighted: true,
    sources: ['IAAI USA', 'IAAI Canada', 'Copart USA', 'Copart Canada']
  },
  {
    name: 'Full Auction Access',
    price: '399',
    features: [
      'All auction sources including OpenLane',
      'Full vehicle data',
      '24/7 support',
      'Custom integration'
    ],
    sources: ['IAAI USA/Canada', 'Copart USA/Canada', 'OpenLane', 'ICBC']
  },
  {
    name: 'Enterprise',
    price: '499',
    features: [
      'All sources + Dealer Network',
      'Unlimited API calls',
      'Premium dealer inventory',
      'Dedicated account manager',
      'Custom solutions'
    ],
    sources: ['All Auctions', 'Canadian Dealer Network', 'US Dealer Network']
  }
];

const iaaiJson = {
  id: 4938213,
  stockNumber: "41534217",
  link: "https://automart-bg.com/details/41534217",
  image: "https://cvis.iaai.com/resizer?imageKeys=42024925~SID~B705~S0~I1~RW2576~H1932~TH0&width=640&height=480",
  awsImage: "https://act-vehicles.s3.eu-north-1.amazonaws.com/vehicles/W1KAF4GB1PR093107/ia41534217.jpg",
  title: "MERCEDES-BENZ C 300",
  auctionTime: "след 1 седмица",
  address: "1930 REX ROAD GA,САЩ",
  buyNowPrice: 9700,
  currentBid: 4700,
  salvageType: "Автомобил",
  fuelType: "Бензин",
  branchCode: 705,
  branchPhone: "4043662298",
  vin: "W1KAF4GB1PR093107",
  auctionSource: "iaai",
  auctionCountry: "САЩ",
  auctionAddress: "1930 REX ROAD",
  auctionCity: "LAKE CITY",
  auctionState: "GA",
  auctionZipCode: "30260",
  lossType: "Удар",
  primaryDamage: "Дясна страна",
  secondaryDamage: "Задна част",
  vehicleStatus: "Готов за продажба",
  isRunAndDrive: true,
  startStatus: "СТАЦИОНАРНО",
  year: "2023",
  key: "Наличен",
  driveLineType: "Задно задвижване",
  type: "Лек автомобил",
  class: "N/A",
  engine: "2.0L I-4 DI, DOHC, VVT, turbo, 255HP",
  series: "SEDAN",
  cylinder: "4 цилиндъра",
  transmission: "Автоматична",
  odometer: "74,627 км",
  odometerStatus: "Актуален",
  statusComment: "Автомобилът не е успял да запали, в стационарно положение е.",
  liveAuctionDateBg: "2025-04-16 15:30:00",
  liveAuctionDateUtc: "2025-04-16 13:30:00",
  make: "MERCEDES-BENZ",
  model: "C 300",
  additionalDetails: [
    { id: 1, name: "Навигация", value: "Няма информация" },
    { id: 2, name: "Актуална цена", value: "$29,770.00" },
    { id: 3, name: "Вид", value: "Седан" },
    { id: 4, name: "Цвят", value: "Бял" },
    { id: 5, name: "Радио", value: "Наличен" },
    { id: 6, name: "Шофьорска възд.възглавница", value: "N/A" },
    { id: 7, name: "VIN статус", value: "ОК" },
    { id: 8, name: "Интериорен цвят", value: "Кафяв" },
    { id: 9, name: "Възд.възглавница", value: "N/A" },
    { id: 10, name: "Възглавници", value: "1" },
    { id: 11, name: "Размер на двигателя", value: "2.0L I-4 DI, DOHC, VVT, TURBO," },
    { id: 12, name: "Ключ", value: "Наличен" },
    { id: 13, name: "N/A", value: "Няма информация" },
    { id: 14, name: "На съхранение", value: "N/A" }
  ],
  images: [
    {
      id: 105475863,
      vehicle_id: 4938213,
      url: "https://cvis.iaai.com/resizer?imageKeys=42024925~SID~B705~S0~I1~RW2576~H1932~TH0&width=640&height=480",
      type: "normal"
    },
    {
      id: 105477496,
      vehicle_id: 4938213,
      url: "https://cvis.iaai.com/thumbnail?imageKeys=42024925~SID~I1",
      type: "thumbnail"
    }
  ],
  createdAt: "2025-04-07T14:51:18.000000Z"
};

const openLaneJson = {
  "make": "HYUNDAI",
  "model": "ELANTRA",
  "year": 2019,
  "trim": "Preferred",
  "odometer": 49845,
  "odometerUnitOfMeasure": "километри",
  "vin": "KMHD84LF7KU801145",
  "exteriorColor": "Бял",
  "interiorColor": "Черен",
  "driveTrain": "Предно предаване",
  "fuelType": "Бензин",
  "transmission": "Автоматична скоростна кутия",
  "vehicleStatus": "Търг в реално време (Simulcast)",
  "locationCity": "Парадайз",
  "stateAbbreviation": "Нюфаундленд и Лабрадор",
  "country": "Канада",
  "engineName": "2.0л, 4-цилиндров, бензин",
  "doors": "4",
  "bodyStyle": "Автоматик с люк и пакет за безопасност",
  "sellerName": "NEW 2 U AUTO SALES INC",

  "auction": {
    "auctionChannel": "Търг на живо (Simulcast)",
    "eventType": "Продажба на комисионна основа",
    "location": "OPENLANE St. John's",
    "laneNumber": "B",
    "runNumber": "4",
    "saleType": "Отворен търг",
    "startTime": "Начало: 2025-03-23 13:30 UTC",
    "endTime": "Край: 2025-03-23 16:50 UTC",
    "isPreviewLot": false,
    "isTailgate": false
  },

  "condition": {
    "isDriveable": "Да",
    "isRunnable": "Да",
    "hasStructuralDamage": "Не",
    "odometerCondition": "Оборудването за километраж работи коректно",
    "odors": "Няма миризми",
    "keys": "2 авариен ключ, 2 смарт ключа",
    "inspectionDate": "18.02.2025",
    "inspectionCompany": "ADESA",
    "manuals": "Не са докладвани",
    "salvage": "Не",
    "inspectionCount": "0 извършени инспекции"
  },

  "options": [
    "Люк",
    "Пакет за безопасност",
    "Автоматични светлини",
    "Алуминиеви джанти",
    "Система за стабилност",
    "Климатроник",
    "Bluetooth връзка",
    "USB / AUX входове",
    "Електрически прозорци",
    "Подгряване на седалките",
    "Круиз контрол"
  ],

  "tires": [
    {
      "tireName": "Лява предна гума",
      "tireMakerName": "Kumho",
      "tireSize": "205/55/16H",
      "treadDepth": "6/32\""
    },
    {
      "tireName": "Дясна предна гума",
      "tireMakerName": "Kumho",
      "tireSize": "205/55/16H",
      "treadDepth": "5/32\""
    },
    {
      "tireName": "Лява задна гума",
      "tireMakerName": "Kumho",
      "tireSize": "205/55/16H",
      "treadDepth": "7/32\""
    },
    {
      "tireName": "Дясна задна гума",
      "tireMakerName": "Kumho",
      "tireSize": "205/55/16H",
      "treadDepth": "7/32\""
    },
    {
      "tireName": "Резервна гума",
      "tireMakerName": "Не е посочено",
      "tireSize": "Компактна резервна",
      "treadDepth": "5/32\""
    }
  ]
}


export function ApiPage() {
  const [activeEndpoint, setActiveEndpoint] = useState('vehicles');
  const [selectedPackage, setSelectedPackage] = useState<{ name: string; price: string } | null>(null);
  const { language } = useLanguageStore();
  const t = translations[language];
  
  const localizedPricingTiers = pricingTiers.map(tier => ({
    ...tier,
    name: t.pricing.packages[tier.name.toLowerCase().replace(/\s+/g, '')].name,
    features: t.pricing.packages[tier.name.toLowerCase().replace(/\s+/g, '')].features
  }));

  const getActiveJson = () => {
    switch (activeEndpoint) {
      case 'vehicles':
        return iaaiJson;
      case 'search':
        return openLaneJson;
      default:
        return iaaiJson;
    }
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-700 to-primary-900 py-24">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
            alt="API Technology"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {t.api.hero.title}
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
              {t.api.hero.subtitle}
            </p>
            <button className="bg-white text-primary-700 hover:bg-primary-50 px-8 py-3 rounded-lg font-semibold flex items-center gap-2 mx-auto">
              {t.api.hero.getApiKey} <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Sources Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Налични данни от търгове</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <SourceCard
              logo="https://companieslogo.com/img/orig/IAA_BIG-ff7e4abd.png?t=1720244492"
              title="IAAI"
              description="Insurance Auto Auctions USA & Canada"
              vehicleCount="300K+"
            />
            <SourceCard
              logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdDfDoKJw2pBeJQ4_Krot2vEw5uwhgrl-lBg&s"
              title="Copart"
              description="Copart Auto Auctions USA & Canada"
              vehicleCount="500K+"
            />
            <SourceCard
              logo="https://corporate.openlane.com/wp-content/themes/openlane2023/images/logo.svg"
              title="OpenLane"
              description="Premium Dealer Auctions"
              vehicleCount="100K+"
            />
            <SourceCard
              title="Дилърска мрежа"
              description="Direct Dealer Inventory"
              vehicleCount="200K+"
            />
          </div>
        </div>
      </section>

      {/* API Documentation */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-900 rounded-xl shadow-lg overflow-hidden">
            <div className="flex border-b border-gray-700">
              <button
                className={`px-6 py-4 font-semibold ${
                  activeEndpoint === 'vehicles'
                    ? 'text-primary-400 border-b-2 border-primary-400'
                    : 'text-gray-400 hover:text-primary-400'
                }`}
                onClick={() => setActiveEndpoint('vehicles')}
              >
                GET /vehicles (IAAI Response)
              </button>
              <button
                className={`px-6 py-4 font-semibold ${
                  activeEndpoint === 'search'
                    ? 'text-primary-400 border-b-2 border-primary-400'
                    : 'text-gray-400 hover:text-primary-400'
                }`}
                onClick={() => setActiveEndpoint('search')}
              >
                GET /search (OpenLane Response)
              </button>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Code className="w-5 h-5 text-primary-400" />
                <h3 className="text-lg font-semibold text-white">Примерен отговор</h3>
              </div>
              <div className="bg-gray-950 rounded-lg p-6 text-white">
                <JsonViewer data={getActiveJson()} expanded={false} maxDepth={3} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">{t.pricing.title}</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {localizedPricingTiers.map((tier, index) => (
              <PricingTier
                key={index}
                name={tier.name}
                price={tier.price}
                features={tier.features}
                sources={tier.sources}
                highlighted={tier.highlighted}
                onSelect={() => setSelectedPackage({ name: tier.name, price: tier.price })}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Request Package Modal */}
      <RequestPackageModal
        isOpen={!!selectedPackage}
        onClose={() => setSelectedPackage(null)}
        packageName={selectedPackage?.name || ''}
        price={selectedPackage?.price || ''}
      />
    </div>
  );
}

function SourceCard({ logo, title, description, vehicleCount }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
      {logo ? (
        <div className="h-12 mb-4 flex items-center">
          <img src={logo} alt={title} className="h-full object-contain" />
        </div>
      ) : (
        <Database className="w-12 h-12 text-primary-600 mb-4" />
      )}
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="text-primary-600 font-semibold">{vehicleCount} автомобила</div>
    </div>
  );
}

function PricingTier({ name, price, features, sources, highlighted = false, onSelect }) {
  return (
    <div className={`rounded-xl p-8 ${
      highlighted
        ? 'bg-primary-600 text-white ring-4 ring-primary-200'
        : 'bg-white shadow-lg'
    }`}>
      <h3 className="text-2xl font-bold mb-4">{name}</h3>
      <div className="flex items-baseline mb-6">
        <span className="text-4xl font-bold">${price}</span>
        <span className="ml-2">/месец</span>
      </div>
      <div className="mb-6">
        <h4 className={`text-sm font-semibold mb-2 ${highlighted ? 'text-primary-100' : 'text-gray-500'}`}>
          Включени Източници:
        </h4>
        <ul className="space-y-1 text-sm mb-4">
          {sources.map((source, index) => (
            <li key={index} className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>{source}</span>
            </li>
          ))}
        </ul>
      </div>
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <button
        onClick={onSelect}
        className={`w-full py-3 rounded-lg font-semibold transition-colors ${
          highlighted
            ? 'bg-white text-primary-600 hover:bg-primary-50'
            : 'bg-primary-600 text-white hover:bg-primary-700'
        }`}
      >
        Заяви
      </button>
    </div>
  );
}