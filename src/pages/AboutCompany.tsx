import { Monitor, Users, Clock, Shield, ArrowRight, Share2, MessageSquareMore, Sparkles, BrainCircuit, Layout, Smartphone, Globe, Car, Mail } from 'lucide-react';
import { useLanguageStore } from '../store';
import { translations } from '../translations';
import { useState } from 'react';

export function AboutCompany() {
  const { language } = useLanguageStore();
  const t = translations[language]?.aboutCompany;

  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Simulate form submission
  };

  if (!t) return <div className="min-h-screen flex items-center justify-center text-gray-600 text-lg">Loading translations...</div>;

  return (
    <div className="pt-16">
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 text-center mb-6">{t.title}</h1>
          <p className="text-xl text-gray-600 text-center mb-12">{t.subtitle}</p>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <FeatureItem icon={<BrainCircuit />} title={t.features.tech.title} description={t.features.tech.desc} />
              <FeatureItem icon={<Globe />} title={t.features.auction.title} description={t.features.auction.desc} />
              <FeatureItem icon={<Car />} title={t.features.logistics.title} description={t.features.logistics.desc} />
              <FeatureItem icon={<Layout />} title={t.features.dashboard.title} description={t.features.dashboard.desc} />
            </div>
            <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80"
                alt="Tech Overview"
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureItem({ icon, title, description }: { icon: JSX.Element; title: string; description: string }) {
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
