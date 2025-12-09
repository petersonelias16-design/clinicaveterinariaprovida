import React from 'react';
import { Star } from 'lucide-react';
import { Testimonial } from '../types';

const Testimonials: React.FC = () => {
  const reviews: Testimonial[] = [
    {
      id: '1',
      name: 'Mariana Costa',
      petName: 'Mel',
      content: 'A Dra. é maravilhosa! A Mel sempre tinha medo de ir ao veterinário, mas na Pró Vida ela entrou abanando o rabo. Recomendo demais!',
      rating: 5,
    },
    {
      id: '2',
      name: 'Carlos Oliveira',
      petName: 'Thor',
      content: 'O banho e tosa é impecável. O Thor voltou cheiroso e super tranquilo. O preço é justo e o atendimento nota 10.',
      rating: 5,
    },
    {
      id: '3',
      name: 'Fernanda Lima',
      petName: 'Simba',
      content: 'Levei o Simba para uma emergência e fui super bem atendida. Equipe atenciosa e muito competente. Obrigado por salvarem meu gatinho!',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-vet-brown mb-12">
          O que dizem os donos apaixonados
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-vet-cream p-8 rounded-3xl relative">
              <div className="absolute -top-4 -right-4 bg-vet-yellow text-vet-brown font-bold px-4 py-2 rounded-xl shadow-sm transform rotate-3">
                {review.petName} 🐾
              </div>
              <div className="flex mb-4 text-vet-yellow">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-vet-brown-light italic mb-6">"{review.content}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-vet-teal text-white flex items-center justify-center font-bold">
                  {review.name.charAt(0)}
                </div>
                <span className="font-bold text-vet-brown">{review.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;