import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Testimonial } from '../types';
import { Reveal } from './Reveal';

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
    {
      id: '4',
      name: 'Roberto Souza',
      petName: 'Bob',
      content: 'Ambiente muito limpo e organizado. O tratamento dentário do Bob foi excelente. Voltarei sempre!',
      rating: 5,
    },
    {
      id: '5',
      name: 'Juliana Paes',
      petName: 'Luna',
      content: 'Amei o hotelzinho! Recebi fotos da Luna todos os dias. Viajei tranquila sabendo que ela estava sendo mimada.',
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerScreen, setItemsPerScreen] = useState(1);

  // Responsive check for carousel items
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setItemsPerScreen(3);
      } else {
        setItemsPerScreen(1);
      }
    };
    
    handleResize(); // Init
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.ceil(reviews.length / itemsPerScreen);
  // Actually, for a smoother slider that loops or stops, let's use index based sliding.
  // Limiting max index so we don't show empty space
  const maxIndex = Math.max(0, reviews.length - itemsPerScreen);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  // Auto scroll
  useEffect(() => {
    const interval = setInterval(() => {
       nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, maxIndex]); // Dependency ensures timer resets on interaction

  return (
    <section id="testimonials" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-vet-brown mb-12">
            O que dizem os donos apaixonados
          </h2>
        </Reveal>

        <div className="relative">
          {/* Controls */}
          <div className="absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2 z-10">
            <button onClick={prevSlide} className="p-3 rounded-full bg-white shadow-lg text-vet-brown hover:text-vet-teal hover:scale-110 transition-all">
              <ChevronLeft className="w-6 h-6" />
            </button>
          </div>
          <div className="absolute top-1/2 -right-4 md:-right-12 transform -translate-y-1/2 z-10">
            <button onClick={nextSlide} className="p-3 rounded-full bg-white shadow-lg text-vet-brown hover:text-vet-teal hover:scale-110 transition-all">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Carousel Track */}
          <div className="overflow-hidden py-4 -mx-4 px-4">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ 
                transform: `translateX(-${currentIndex * (100 / itemsPerScreen)}%)` 
              }}
            >
              {reviews.map((review, index) => (
                <div 
                  key={review.id} 
                  className="flex-shrink-0 w-full md:w-1/3 px-4"
                >
                  <div className="bg-vet-cream p-8 rounded-3xl relative h-full flex flex-col shadow-sm hover:shadow-md transition-shadow">
                    <div className="absolute -top-4 -right-4 bg-vet-yellow text-vet-brown font-bold px-4 py-2 rounded-xl shadow-sm transform rotate-3 z-10">
                      {review.petName} 🐾
                    </div>
                    
                    <div className="flex mb-4 text-vet-yellow">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current" />
                      ))}
                    </div>
                    
                    <p className="text-vet-brown-light italic mb-6 flex-grow">"{review.content}"</p>
                    
                    <div className="flex items-center gap-3 border-t border-vet-brown/5 pt-4">
                      <div className="w-10 h-10 rounded-full bg-vet-teal text-white flex items-center justify-center font-bold text-lg">
                        {review.name.charAt(0)}
                      </div>
                      <span className="font-bold text-vet-brown">{review.name}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-8 gap-2">
            {[...Array(reviews.length - itemsPerScreen + 1)].map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? 'bg-vet-teal w-6' : 'bg-gray-300 hover:bg-vet-yellow'
                }`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;