import React, { useState } from 'react';
import { X, Phone, MessageCircle } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutFeatures from './components/AboutFeatures';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatAssistant from './components/ChatAssistant';
import { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);

  // Router Logic to Render Pages
  const renderPage = () => {
    switch (currentPage) {
      case 'services':
        return <Services />;
      case 'testimonials':
        return <Testimonials />;
      case 'contact':
        return (
          <>
            <Contact />
            <FAQ />
          </>
        );
      case 'home':
      default:
        return (
          <>
            <Hero onNavigate={setCurrentPage} onOpenSchedule={() => setIsScheduleModalOpen(true)} />
            <AboutFeatures />
            {/* Preview of Services on Home */}
            <div className="relative pb-10">
               <Services />
               <div className="absolute bottom-10 left-0 w-full flex justify-center pointer-events-none">
                 {/* Visual hint that there's more */}
               </div>
            </div>
            <Testimonials />
            <Contact />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-vet-cream font-sans selection:bg-vet-yellow selection:text-vet-brown flex flex-col">
      <Navbar 
        currentPage={currentPage} 
        onNavigate={setCurrentPage} 
        onOpenSchedule={() => setIsScheduleModalOpen(true)}
      />
      
      <main className="flex-grow">
        {renderPage()}
      </main>
      
      <Footer />
      <ChatAssistant />

      {/* Scheduling Modal */}
      {isScheduleModalOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsScheduleModalOpen(false)}
          ></div>
          <div className="bg-white rounded-3xl p-8 max-w-md w-full relative shadow-2xl animate-fadeIn">
            <button 
              onClick={() => setIsScheduleModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-vet-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-vet-brown" />
              </div>
              <h3 className="text-2xl font-display font-bold text-vet-brown mb-2">Agendar Consulta</h3>
              <p className="text-vet-brown-light">Escolha a melhor forma de falar com a gente. Respondemos rapidinho!</p>
            </div>

            <div className="space-y-4">
              <a 
                href="https://wa.me/551146470202"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-3 w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-xl transition-colors shadow-md"
              >
                <MessageCircle className="w-6 h-6" />
                Agendar pelo WhatsApp
              </a>
              
              <a 
                href="tel:1146470202"
                className="flex items-center justify-center gap-3 w-full bg-white border-2 border-vet-teal text-vet-teal hover:bg-vet-teal hover:text-white font-bold py-4 rounded-xl transition-colors"
              >
                <Phone className="w-6 h-6" />
                Ligar (11) 4647-0202
              </a>
            </div>

            <div className="mt-6 text-center text-sm text-gray-500">
              <p>Segunda a Sexta: 08h às 19h</p>
              <p>Sábado: 08h às 17h</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
