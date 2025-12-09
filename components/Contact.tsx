import React from 'react';
import { MapPin, Phone, Mail, Instagram, MessageCircle } from 'lucide-react';
import { Reveal } from './Reveal';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="bg-vet-teal rounded-[3rem] p-8 md:p-16 shadow-2xl overflow-hidden relative">
             {/* Decorative circles */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-16 -mt-16 pointer-events-none"></div>
             <div className="absolute bottom-0 left-0 w-48 h-48 bg-vet-yellow/20 rounded-full -ml-10 -mb-10 pointer-events-none"></div>

            <div className="grid lg:grid-cols-2 gap-12 relative z-10">
              <div className="text-white">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                  Pronto para dar ao seu pet o cuidado que ele merece?
                </h2>
                <p className="text-lg text-teal-50 mb-8">
                  Agende agora e garanta atendimento de qualidade. Estamos ansiosos para receber você e seu melhor amigo.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-white/20 p-3 rounded-full">
                      <MapPin className="w-6 h-6 text-vet-yellow" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Onde estamos</h3>
                      <p className="text-teal-50">R. Carmo Cachoeira, 69<br/>Vila Nova Bonsucesso, Guarulhos - SP<br/>CEP: 07176-231</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-white/20 p-3 rounded-full">
                      <Phone className="w-6 h-6 text-vet-yellow" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Contatos</h3>
                      <p className="text-teal-50">Tel: (11) 4647-0202</p>
                    </div>
                  </div>

                  <div className="flex gap-4 mt-8">
                    <a href="https://wa.me/551146470202" className="flex-1 bg-vet-yellow hover:bg-yellow-400 text-vet-brown font-bold py-3 px-6 rounded-xl text-center flex items-center justify-center gap-2 transition-colors">
                      <MessageCircle className="w-5 h-5" /> WhatsApp
                    </a>
                    <a href="https://www.instagram.com/vetprovida/" target="_blank" rel="noreferrer" className="bg-white/20 hover:bg-white/30 text-white font-bold py-3 px-6 rounded-xl flex items-center justify-center transition-colors">
                      <Instagram className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl overflow-hidden shadow-lg h-80 lg:h-auto min-h-[300px]">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3660.6720743632936!2d-46.39893902377319!3d-23.43628465701889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce625712128521%3A0xc3b6e82a93910c26!2sR.%20Carmo%20Cachoeira%2C%2069%20-%20Vila%20Nova%20Bonsucesso%2C%20Guarulhos%20-%20SP%2C%2007176-231!5e0!3m2!1spt-BR!2sbr!4v1709400000000!5m2!1spt-BR!2sbr" 
                  width="100%" 
                  height="100%" 
                  style={{border:0}} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa da Clínica"
                ></iframe>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;