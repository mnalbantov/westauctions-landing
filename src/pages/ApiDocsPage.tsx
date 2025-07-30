import { useEffect, useState } from 'react';
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';
import { Code, Book, ExternalLink, Copy, Check } from 'lucide-react';
import { useLanguageStore } from '../store';
import { translations } from '../translations';

export function ApiDocsPage() {
  const { language } = useLanguageStore();
  const t = translations[language].apiDocs;
  const [spec, setSpec] = useState(null);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    fetch('/api-docs.yaml')
      .then(response => response.text())
      .then(yamlText => {
        // Parse YAML to JSON for SwaggerUI
        import('js-yaml').then(yaml => {
          const jsonSpec = yaml.load(yamlText);
          setSpec(jsonSpec);
          setLoading(false);
        });
      })
      .catch(error => {
        console.error('Error loading API spec:', error);
        setLoading(false);
      });
  }, []);

  const copyApiUrl = () => {
    navigator.clipboard.writeText('https://auto.westauctions.online/api');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (loading) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-600">{t.loading}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-700 to-primary-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Book className="w-10 h-10 text-primary-300" />
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                {t.title}
              </h1>
            </div>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
              {t.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center gap-3">
                <Code className="w-5 h-5 text-primary-300" />
                <span className="text-white font-mono">https://auto.westauctions.online/api</span>
                <button
                  onClick={copyApiUrl}
                  className="text-primary-300 hover:text-white transition-colors"
                  title="Copy API URL"
                >
                  {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start Guide */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary-100 p-2 rounded-lg">
                  <span className="text-primary-600 font-bold text-lg">1</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{t.quickStart.step1.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">
                {t.quickStart.step1.description}
              </p>
              <a
                href="mailto:mnt.developer24@gmail.com"
                className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center gap-1"
              >
                {t.quickStart.step1.action} <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary-100 p-2 rounded-lg">
                  <span className="text-primary-600 font-bold text-lg">2</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{t.quickStart.step2.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">
                {t.quickStart.step2.description}
              </p>
              <div className="bg-gray-900 text-green-400 p-3 rounded text-sm font-mono">
                curl -H "api-token: YOUR_TOKEN"
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary-100 p-2 rounded-lg">
                  <span className="text-primary-600 font-bold text-lg">3</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{t.quickStart.step3.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">
                {t.quickStart.step3.description}
              </p>
              <div className="text-primary-600 font-medium">
                53,891+ {t.quickStart.step3.vehicles}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* API Documentation */}
      <section className="bg-white">
        <div className="max-w-full">
          {spec && (
            <div className="api-docs-container">
              <SwaggerUI
                spec={spec}
                deepLinking={true}
                displayOperationId={false}
                defaultModelsExpandDepth={1}
                defaultModelExpandDepth={1}
                docExpansion="list"
                filter={true}
                showExtensions={true}
                showCommonExtensions={true}
                tryItOutEnabled={true}
                requestInterceptor={(request) => {
                  // Add custom styling or modify requests here
                  return request;
                }}
                onComplete={(system) => {
                  // Custom styling after SwaggerUI loads
                  const style = document.createElement('style');
                  style.textContent = `
                    .swagger-ui .topbar { display: none; }
                    .swagger-ui .info { margin: 20px 0; }
                    .swagger-ui .info .title { color: #0284c7; }
                    .swagger-ui .scheme-container { 
                      background: #f8fafc; 
                      border: 1px solid #e2e8f0;
                      border-radius: 8px;
                      padding: 15px;
                      margin: 20px 0;
                    }
                    .swagger-ui .opblock.opblock-post { border-color: #0284c7; }
                    .swagger-ui .opblock.opblock-post .opblock-summary { border-color: #0284c7; }
                    .swagger-ui .opblock.opblock-get { border-color: #059669; }
                    .swagger-ui .opblock.opblock-get .opblock-summary { border-color: #059669; }
                    .swagger-ui .btn.authorize { 
                      background-color: #0284c7; 
                      border-color: #0284c7; 
                    }
                    .swagger-ui .btn.execute { 
                      background-color: #0284c7; 
                      border-color: #0284c7; 
                    }
                  `;
                  document.head.appendChild(style);
                }}
              />
            </div>
          )}
        </div>
      </section>
    </div>
  );
}