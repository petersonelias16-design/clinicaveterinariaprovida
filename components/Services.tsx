import React, { useState } from 'react';
import { Stethoscope, Scissors, Home, Syringe, TestTube, Activity, Dog, Cat } from 'lucide-react';
import { ServiceItem } from '../types';

const Services: React.FC = () => {
  const [filter, setFilter] = useState<'todos' | 'clinica' | 'estetica' | 'hotel'>('todos');

  const services: ServiceItem[] = [
    {
      id: 'consultas',
      title: 'Consultas Clínicas',
      description: 'Atendimento geral e preventivo para manter a saúde do seu pet sempre em dia.',
      icon: <Stethoscope className="w-8 h-8" />,
      category: 'clinica'
    },
    {
      id: 'banho-tosa',
      title: 'Banho e Tosa',
      description: 'Estética animal com produtos de alta qualidade, tosa higiênica e tosa da raça.',
      icon: <Scissors className="w-8 h-8" />,
      category: 'estetica'
    },
    {
      id: 'hotel',
      title: 'Hotelzinho Pet',
      description: 'Precisa viajar? Seu pet fica hospedado com segurança e recreação monitorada.',
      icon: <Home className="w-8 h-8" />,
      category: 'hotel'
    },
    {
      id: 'vacinas',
      title: 'Vacinação',
      description: 'Protocolos de imunização importados para cães e gatos (V10, V8, Antirrábica).',
      icon: <Syringe className="w-8 h-8" />,
      category: 'clinica'
    },
    {
      id: 'exames',
      title: 'Exames Laboratoriais',
      description: 'Coleta de sangue e exames rápidos para diagnósticos precisos na hora.',
      icon: <TestTube className="w-8 h-8" />,
      category: 'clinica'
    },
    {
      id: 'cirurgia',
      title: 'Cirurgias',
      description: 'Centro cirúrgico equipado para procedimentos seguros e castração eletiva.',
      icon: <Activity className="w-8 h-8" />,
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
          <h2 className="text-3xl md:text-4xl font-display font-bold text-vet-brown">
            Nossos Serviços
          </h2>
          <div className="w-20 h-2 bg-vet-yellow rounded-full mx-auto mt-4"></div>
          <p className="mt-4 text-xl text-vet-brown-light">Cuidado completo para todas as fases da vida do seu pet.</p>
        </div>

        {/* Tabs Interface */}
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div 
              key={service.id} 
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border-b-4 border-vet-teal group animate-fadeIn"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-vet-cream rounded-2xl text-vet-teal group-hover:bg-vet-teal group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
                <div>
                   <h3 className="text-xl font-bold text-vet-brown">{service.title}</h3>
                   <span className="text-xs uppercase tracking-wide text-vet-brown-light/60 font-bold">{service.category}</span>
                </div>
              </div>
              <p className="text-vet-brown-light">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Banner Extra */}
        <div className="mt-16 bg-vet-yellow rounded-3xl p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
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

      </div>
    </section>
  );
};

export default Services;
