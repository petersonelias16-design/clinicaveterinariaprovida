import React, { useState } from 'react';
import { Stethoscope, Scissors, Home, Syringe, TestTube, Activity, Dog, Cat } from 'lucide-react';
import { ServiceItem } from '../types';
import { Reveal } from './Reveal';

const Services: React.FC = () => {
  const [filter, setFilter] = useState<'todos' | 'clinica' | 'estetica' | 'hotel'>('todos');

  const services: ServiceItem[] = [
    {
      id: 'consultas',
      title: 'Consultas Clínicas',
      description: 'Atendimento geral e preventivo para manter a saúde do seu pet sempre em dia.',
      icon: <Stethoscope className="w-6 h-6" />,
      // Updated image URL to a working one
      image: 'https://images.unsplash.com/photo-1599443015574-be5fe8a05783?q=80&w=2070&auto=format&fit=crop',
      category: 'clinica'
    },
    {
      id: 'banho-tosa',
      title: 'Banho e Tosa',
      description: 'Estética animal com produtos de alta qualidade, tosa higiênica e tosa da raça.',
      icon: <Scissors className="w-6 h-6" />,
      image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=2071&auto=format&fit=crop',
      category: 'estetica'
    },
    {
      id: 'hotel',
      title: 'Hotelzinho Pet',
      description: 'Precisa viajar? Seu pet fica hospedado com segurança e recreação monitorada.',
      icon: <Home className="w-6 h-6" />,
      image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?q=80&w=2070&auto=format&fit=crop',
      category: 'hotel'
    },
    {
      id: 'vacinas',
      title: 'Vacinação',
      description: 'Protocolos de imunização importados para cães e gatos (V10, V8, Antirrábica).',
      icon: <Syringe className="w-6 h-6" />,
      image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?q=80&w=2070&auto=format&fit=crop',
      category: 'clinica'
    },
    {
      id: 'exames',
      title: 'Exames Laboratoriais',
      description: 'Coleta de sangue e exames rápidos para diagnósticos precisos na hora.',
      icon: <TestTube className="w-6 h-6" />,
      image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=2070&auto=format&fit=crop',
      category: 'clinica'
    },
    {
      id: 'cirurgia',
      title: 'Cirurgias',
      description: 'Centro cirúrgico equipado para procedimentos seguros e castração eletiva.',
      icon: <Activity className="w-6 h-6" />,
      image: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?q=80&w=2070&auto=format&fit=crop',
      category: 'clinica'
    },
  ];

  const filteredServices = filter === 'todos' 
    ? services 
    : services.filter(s => s.category === filter);

  return (
    <section className="py-20 bg-vet-teal/5 min-h-[60vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-vet-brown">
              Nossos Serviços
            </h2>
            <div className="w-20 h-2 bg-vet-yellow rounded-full mx-auto mt-4"></div>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-4 text-xl text-vet-brown-light">Cuidado completo para todas as fases da vida do seu pet.</p>
          </Reveal>
        </div>

        {/* Tabs Interface */}
        <Reveal delay={200}>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { id: 'todos', label: 'Todos' },
              { id: 'clinica', label: 'Clínica' },
              { id: 'estetica', label: 'Estética' },
              { id: 'hotel', label: 'Hotelzinho' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as any)}
                className={`px-6 py-2 rounded-full font-bold transition-all ${
                  filter === tab.id 
                    ? 'bg-vet-teal text-white shadow-lg scale-105' 
                    : 'bg-white text-vet-brown hover:bg-vet-yellow/20'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <Reveal key={service.id} delay={index * 100}>
              <div 
                // Removed overflow-hidden from main card to allow icons/shadows to pop out, applied rounded-t-3xl to image container instead
                className="bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border-b-4 border-vet-teal group h-full flex flex-col relative"
              >
                {/* Image Section */}
                <div className="relative h-56 rounded-t-3xl overflow-hidden bg-gray-100">
                  <div className="absolute inset-0 bg-vet-teal/10 group-hover:bg-transparent transition-colors z-10 pointer-events-none"></div>
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>

                {/* Floating Icon Badge */}
                <div className="absolute top-56 right-6 z-20 -translate-y-1/2">
                   <div className="bg-vet-yellow text-vet-brown p-3 rounded-2xl shadow-lg group-hover:rotate-6 transition-transform flex items-center justify-center">
                     {service.icon}
                   </div>
                </div>

                {/* Content Section */}
                <div className="p-8 pt-8 flex-grow flex flex-col">
                  <div className="mb-3">
                     <span className="text-xs uppercase tracking-wide text-vet-teal font-bold bg-vet-teal/10 px-2 py-1 rounded-md">
                       {service.category}
                     </span>
                  </div>
                  <h3 className="text-xl font-bold text-vet-brown mb-3">{service.title}</h3>
                  <p className="text-vet-brown-light leading-relaxed mb-4 flex-grow">
                    {service.description}
                  </p>
                  <button className="text-vet-teal font-bold text-sm hover:underline self-start">
                    Saiba mais →
                  </button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Banner Extra */}
        <Reveal delay={300} className="mt-16">
          <div className="bg-vet-yellow rounded-3xl p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="relative z-10 max-w-xl">
                 <h3 className="text-2xl font-bold text-vet-brown mb-2">Não encontrou o que procurava?</h3>
                 <p className="text-vet-brown-light">Entre em contato conosco, realizamos diversos procedimentos específicos sob consulta.</p>
              </div>
              <div className="flex gap-4 relative z-10">
                 <div className="bg-white/30 p-4 rounded-full">
                   <Dog className="w-8 h-8 text-vet-brown" />
                 </div>
                 <div className="bg-white/30 p-4 rounded-full">
                   <Cat className="w-8 h-8 text-vet-brown" />
                 </div>
              </div>
              {/* Background pattern */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-16 -mt-16"></div>
          </div>
        </Reveal>

      </div>
    </section>
  );
};

export default Services;