import React, { useState } from 'react';
import { Menu, X, Phone, Heart, Calendar } from 'lucide-react';
import { Page } from '../types';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
  onOpenSchedule: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate, onOpenSchedule }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks: { name: string; page: Page }[] = [
    { name: 'Início', page: 'home' },
    { name: 'Serviços', page: 'services' },
    { name: 'Depoimentos', page: 'testimonials' },
    { name: 'Contato', page: 'contact' },
  ];

  const handleNavClick = (page: Page) => {
    onNavigate(page);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 rounded-b-3xl border-b-4 border-vet-yellow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center cursor-pointer" onClick={() => handleNavClick('home')}>
            <div className="flex-shrink-0 flex items-center gap-2">
              <div className="bg-vet-teal p-2 rounded-full">
                <Heart className="h-6 w-6 text-white" fill="currentColor" />
              </div>
              <span className="font-display font-bold text-2xl text-vet-teal-dark tracking-tight">
                Pró Vida <span className="text-vet-yellow font-extrabold">Vet</span>
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.page)}
                className={`font-sans font-bold text-lg transition-colors duration-200 ${
                  currentPage === link.page 
                    ? 'text-vet-teal border-b-2 border-vet-yellow' 
                    : 'text-vet-brown hover:text-vet-teal'
                }`}
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={onOpenSchedule}
              className="bg-vet-yellow hover:bg-yellow-400 text-vet-brown font-bold py-2 px-6 rounded-full shadow-lg transform hover:-translate-y-0.5 transition-all flex items-center gap-2"
            >
              <Calendar className="h-4 w-4" />
              Agendar Agora
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-vet-brown hover:text-vet-teal focus:outline-none p-2"
            >
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 pb-4 rounded-b-2xl animate-fadeIn">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.page)}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-bold ${
                   currentPage === link.page
                   ? 'bg-vet-cream text-vet-teal'
                   : 'text-vet-brown hover:bg-vet-cream'
                }`}
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => {
                onOpenSchedule();
                setIsOpen(false);
              }}
              className="w-full text-center bg-vet-yellow text-vet-brown font-bold py-3 mt-4 rounded-xl shadow-sm flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Agendar Agora
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
