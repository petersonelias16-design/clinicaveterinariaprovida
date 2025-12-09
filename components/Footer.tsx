import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-vet-brown text-vet-cream pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12 border-b border-white/10 pb-12">
          
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-vet-yellow p-1.5 rounded-full">
                <Heart className="h-5 w-5 text-vet-brown" fill="currentColor" />
              </div>
              <span className="font-display font-bold text-2xl tracking-tight">
                Pró Vida Vet
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Cuidando do seu melhor amigo com a dedicação e o carinho que ele merece. 
              Tecnologia, conforto e amor em um só lugar.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-vet-yellow">Links Rápidos</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li><a href="#home" className="hover:text-vet-yellow transition-colors">Início</a></li>
              <li><a href="#about" className="hover:text-vet-yellow transition-colors">Sobre Nós</a></li>
              <li><a href="#services" className="hover:text-vet-yellow transition-colors">Serviços</a></li>
              <li><a href="#contact" className="hover:text-vet-yellow transition-colors">Agendamento</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-vet-yellow">Horário de Atendimento</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex justify-between">
                <span>Segunda a Sexta</span>
                <span className="text-white">8:00 - 19:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sábado</span>
                <span className="text-white">8:00 - 17:00</span>
              </li>
              <li className="flex justify-between">
                <span>Domingo</span>
                <span className="text-white">Fechado</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center text-xs text-white/40">
          <p>© {new Date().getFullYear()} Clínica Veterinária Pró Vida. Todos os direitos reservados.</p>
          <p className="mt-2">Feito com 💛 para os pets.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;