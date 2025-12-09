import React from 'react';
import { Calendar, Scissors } from 'lucide-react';
import { Page } from '../types';

interface HeroProps {
  onNavigate: (page: Page) => void;
  onOpenSchedule: () => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate, onOpenSchedule }) => {
  return (
    <section className="relative pt-12 pb-20 lg:pt-24 lg:pb-32 overflow-hidden bg-paw-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-6 text-center lg:text-left z-10">
            <div className="inline-block px-4 py-2 rounded-full bg-vet-teal bg-opacity-10 text-vet-teal-dark font-bold text-sm mb-6 border border-vet-teal border-opacity-20">
              🐾 Amor e cuidado em cada detalhe
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-vet-brown mb-6 leading-tight">
              Seu melhor amigo merece <span className="text-vet-teal">saúde</span>, <span className="text-vet-yellow">carinho</span> e atenção de verdade.
            </h1>
            <p className="text-lg sm:text-xl text-vet-brown-light mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Nós sabemos o quanto ele faz parte da sua família. Aqui na Pró Vida, unimos medicina veterinária de ponta com o aconchego de casa.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={onOpenSchedule}
                className="flex items-center justify-center gap-2 bg-vet-teal hover:bg-vet-teal-dark text-white font-bold py-4 px-8 rounded-full shadow-lg transform hover:-translate-y-1 transition-all text-lg cursor-pointer"
              >
                <Calendar className="h-5 w-5" />
                Agendar Consulta
              </button>
              <button
                onClick={() => onNavigate('services')}
                className="flex items-center justify-center gap-2 bg-white border-2 border-vet-yellow text-vet-brown font-bold py-4 px-8 rounded-full hover:bg-vet-yellow hover:border-transparent transition-all shadow-md text-lg cursor-pointer"
              >
                <Scissors className="h-5 w-5" />
                Banho e Tosa
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 mt-16 lg:mt-0 relative">
            {/* Abstract blobs background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-vet-yellow rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-vet-teal rounded-full mix-blend-multiply filter blur-3xl opacity-30 ml-10 mt-10"></div>
            
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500">
               <img 
                 src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=2069&auto=format&fit=crop" 
                 alt="Cachorro feliz sendo abraçado" 
                 className="w-full h-auto object-cover"
               />
               <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-2xl shadow-lg flex items-center gap-2">
                 <span className="text-2xl">🐶</span>
                 <div>
                    <p className="font-bold text-vet-brown text-sm">Mais de 2.000</p>
                    <p className="text-xs text-vet-brown-light">Pets atendidos</p>
                 </div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
