import React from 'react';
import { Calendar, Scissors } from 'lucide-react';
import { Page } from '../types';
import { Reveal } from './Reveal';

interface HeroProps {
  onNavigate: (page: Page) => void;
  onOpenSchedule: () => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate, onOpenSchedule }) => {
  return (
    <section className="relative pt-12 pb-20 lg:pt-24 lg:pb-32 overflow-hidden bg-vet-cream">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-paw-pattern bg-repeat z-0 pointer-events-none"></div>

      {/* Decorative Blobs */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-vet-yellow rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob z-0"></div>
      <div className="absolute top-0 left-0 -ml-20 -mt-20 w-72 h-72 bg-vet-teal rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000 z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-6 text-center lg:text-left">
            <Reveal delay={100}>
              <div className="inline-block px-4 py-2 rounded-full bg-white text-vet-teal-dark font-bold text-sm mb-6 border border-vet-teal border-opacity-20 shadow-sm">
                🐾 Amor e cuidado em cada detalhe
              </div>
            </Reveal>
            
            <Reveal delay={200}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-vet-brown mb-6 leading-tight">
                Seu melhor amigo merece <span className="text-vet-teal">saúde</span>, <span className="text-vet-yellow">carinho</span> e atenção de verdade.
              </h1>
            </Reveal>

            <Reveal delay={300}>
              <p className="text-lg sm:text-xl text-vet-brown-light font-medium mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                Nós sabemos o quanto ele faz parte da sua família. Aqui na Pró Vida, unimos medicina veterinária de ponta com o aconchego de casa.
              </p>
            </Reveal>
            
            <Reveal delay={400}>
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
            </Reveal>
          </div>

          <div className="lg:col-span-6 mt-16 lg:mt-0 relative">
            <Reveal delay={500} direction="left">
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white transform rotate-2 hover:rotate-0 transition-all duration-500 group">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1623387641168-d9803ddd3f35?q=80&w=2070&auto=format&fit=crop" 
                  alt="Cachorros felizes correndo" 
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Floating Stats Card */}
                <div className="absolute bottom-6 right-6 z-20">
                   <div className="bg-white/95 backdrop-blur-sm px-6 py-4 rounded-3xl shadow-xl flex items-center gap-4 animate-fadeIn">
                     <div className="bg-vet-yellow/20 p-3 rounded-full">
                       <span className="text-3xl">🐶</span>
                     </div>
                     <div>
                        <p className="font-bold text-vet-brown text-lg">Mais de 2.000</p>
                        <p className="text-sm text-vet-brown-light">Pets felizes atendidos</p>
                     </div>
                   </div>
                </div>
              </div>
            </Reveal>

            {/* Decorative Elements behind image */}
            <div className="absolute -z-10 top-1/2 -right-12 transform -translate-y-1/2">
               <div className="w-24 h-24 bg-vet-yellow rounded-full opacity-50 blur-xl"></div>
            </div>
            <div className="absolute -z-10 -bottom-8 -left-8">
               <div className="w-32 h-32 bg-vet-teal rounded-full opacity-30 blur-xl"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;