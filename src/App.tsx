import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ApiPage } from './pages/ApiPage';
import { CustomWebsite } from './pages/CustomWebsite';
import { AuctionExtension } from './pages/AuctionExtension';
import { AboutCompany } from './pages/AboutCompany';
import { ApiDocsPage } from './pages/ApiDocsPage';

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-grow mt-16">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/api" element={<ApiPage />} />
          <Route path="/custom-website" element={<CustomWebsite />} />
          <Route path="/auction-extension" element={<AuctionExtension />} />
          <Route path="/about" element={<AboutCompany />} />
          <Route path="/api-docs" element={<ApiDocsPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;