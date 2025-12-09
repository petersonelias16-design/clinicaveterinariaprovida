import React from 'react';

export type Page = 'home' | 'services' | 'testimonials' | 'contact';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  category: 'clinica' | 'estetica' | 'hotel';
}

export interface Testimonial {
  id: string;
  name: string;
  petName: string;
  content: string;
  rating: number;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
  isError?: boolean;
}
