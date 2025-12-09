import React from 'react';
import { ShieldCheck, MapPin, HeartHandshake } from 'lucide-react';

const AboutFeatures: React.FC = () => {
  const features = [
    {
      icon: <ShieldCheck className="w-10 h-10 text-vet-teal" />,
      title: "Cuidado Especializado",
      description: "Do veterinário à tosa e hospedagem — tudo em um só lugar, com profissionalismo e carinho extremo."
    },
    {
      icon: <MapPin className="w-10 h-10 text-vet-yellow" />,
      title: "Comodidade Total",
      description: "Fácil acesso em Guarulhos (Bonsucesso), agendamento simplificado e atendimento sem correria."
    },
    {
      icon: <HeartHandshake className="w-10 h-10 text-rose-500" />,
      title: "Confiança e Afeto",
      description: "Ambiente acolhedor e equipe que ama o que faz. Você fica tranquilo sabendo que seu pet está em boas mãos."
    }
  ];

  return (
    <section className="py-20 bg-white relative">
      {/* Decorative Top Wave - works as standalone separator */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[50px] fill-vet-cream">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-vet-cream transform scale-y-[-1]"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-vet-teal font-bold uppercase tracking-wider mb-2 text-sm">Por que a Pró Vida?</h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold text-vet-brown mb-6">
            Mais do que uma clínica, uma extensão da sua família.
          </h3>
          <p className="text-vet-brown-light text-lg">
            Você já ficou horas procurando um veterinário confiável ou se frustrou com um serviço de banho e tosa? 
            Nós entendemos. Por isso criamos um espaço onde respeito e técnica caminham juntos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-vet-cream rounded-3xl p-8 hover:bg-yellow-50 transition-colors duration-300 border border-transparent hover:border-vet-yellow group shadow-sm hover:shadow-md">
              <div className="bg-white rounded-2xl w-20 h-20 flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h4 className="text-xl font-display font-bold text-vet-brown mb-3">{feature.title}</h4>
              <p className="text-vet-brown-light leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutFeatures;
