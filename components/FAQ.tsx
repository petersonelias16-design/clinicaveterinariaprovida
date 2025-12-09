import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FaqItem } from '../types';
import { Reveal } from './Reveal';

const FAQ: React.FC = () => {
  const faqs: FaqItem[] = [
    {
      question: "Como faço para agendar?",
      answer: "É muito simples! Você pode ligar para (11) 4647-0202 ou clicar no botão de WhatsApp aqui no site. Nossa equipe responde rapidinho."
    },
    {
      question: "Vocês atendem quais animais?",
      answer: "Atendemos principalmente cães e gatos de todos os tamanhos e raças. Se tiver um animal silvestre, entre em contato para indicarmos um especialista parceiro."
    },
    {
      question: "Aceitam convênio ou planos?",
      answer: "Entre em contato conosco pelo WhatsApp para verificar os planos de saúde parceiros e formas de pagamento facilitadas."
    },
    {
      question: "Como funciona o Hotelzinho?",
      answer: "Nosso hotelzinho oferece supervisão veterinária, brincadeiras e muito conforto. É necessário que a carteirinha de vacinação esteja em dia para a segurança de todos os hóspedes."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 bg-vet-teal/5">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-3xl font-display font-bold text-center text-vet-brown mb-10">
            Dúvidas Frequentes
          </h2>
        </Reveal>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Reveal key={index} delay={index * 100}>
              <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="font-bold text-vet-brown text-lg">{faq.question}</span>
                  {openIndex === index ? (
                    <Minus className="w-6 h-6 text-vet-teal" />
                  ) : (
                    <Plus className="w-6 h-6 text-vet-yellow" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6 text-vet-brown-light animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;