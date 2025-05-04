'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star, StarHalf } from 'lucide-react';
import Image from 'next/image';

type Feedback = {
  id: number;
  avatar: string;
  alt: string;
  text: string;
  author: string;
  rating: number;
};

export default function FeedbackCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const feedbacks: Feedback[] = [
    {
      id: 1,
      avatar: '/images/yandex.webp',
      alt: 'Яндекс',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum animi quidem officiis sit sapiente aliquid autem excepturi ab impedit vel.',
      author: 'Владимир С.',
      rating: 5,
    },
    {
      id: 2,
      avatar: '/images/yandex.webp',

      alt: '2GIS',
      text: 'Довольны перевозкой. Ребята профессионалы, никаких проблем.',
      author: 'Мария К.',
      rating: 4.5,
    },
    {
      id: 3,
      avatar: '/images/yandex.webp',

      alt: 'ВКонтакте',
      text: 'Очень удобный сервис, надежно и безопасно. Всем рекомендую!',
      author: 'Сергей П.',
      rating: 4,
    },
  ];

  const nextFeedback = () => {
    setCurrentIndex((prev) => (prev + 1) % feedbacks.length);
  };

  const prevFeedback = () => {
    setCurrentIndex((prev) => (prev - 1 + feedbacks.length) % feedbacks.length);
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} className="w-5 h-5 fill-yellow-400 text-yellow-400" />);
    }

    if (hasHalfStar) {
      stars.push(<StarHalf key="half" className="w-5 h-5 fill-yellow-400 text-yellow-400" />);
    }

    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="w-5 h-5 text-yellow-400" />);
    }

    return stars;
  };

  return (
    <section className="py-12 ">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Отзывы наших клиентов</h2>

        <div className="relative max-w-2xl mx-auto transition-colors">
          <div className="overflow-hidden border transition-shadow border-amber-400 rounded-2xl shadow-xl  hover:shadow-2xl">
            <div className="transition-transform  duration-300">
              <div className="bg-white rounded-xl shadow-md overflow-hidden p-6 relative">
                <div className="absolute top-6 right-6 text-gray-200 ">
                  <Quote className="w-8 h-8" />
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 relative mb-4">
                    <Image
                      src={feedbacks[currentIndex].avatar}
                      alt={feedbacks[currentIndex].alt}
                      fill
                      className="rounded-full  border-amber-400 object-cover"
                      sizes="64px"
                    />
                  </div>
                  <p className="text-gray-600 mb-4 text-center">
                    {feedbacks[currentIndex].text}
                  </p>
                  <div className="text-center">
                    <h5 className="font-bold text-lg">{feedbacks[currentIndex].author}</h5>
                    <div className="flex justify-center mt-2">
                      {renderStars(feedbacks[currentIndex].rating)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={prevFeedback}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
            aria-label="Previous feedback"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button
            onClick={nextFeedback}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
            aria-label="Next feedback"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
}