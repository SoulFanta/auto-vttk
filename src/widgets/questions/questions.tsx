'use client';

import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'Что нужно для того, чтобы перевезти автомобиль?',
      answer: 'Необходимо предоставить следующий перечень документов: Для договора потребуется Ваш паспорт с пропиской, паспорт грузополучателя с пропиской, документ на машину с номером кузова (свидетельство о регистрации ТС, ПТС), электронная почта клиента, номера телефона для связи клиента и грузополучателя, стоимость машины для страховки. Также необходимо выбрать желаемый способ отправки (вагон-сетка, автовоз и др.) и заключить Договор на перевозку автомобиля.'
    },
    {
      question: 'Как я могу заказать перевозку автомобиля?',
      answer: 'Перевозку автомобиля Вы можете заказать, оставив заявку на перевозку на нашем сайте или связавшись с менеджером Компании.'
    },
    // Add all other questions and answers here...
    {
      question: 'Можно ли мне получить чек после оплаты, мне требуется для организации?',
      answer: 'Конечно.'
    }
  ];

  return (
    <section className="py-12 ">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-12">Часто задаваемые вопросы</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
              <button
                className="flex justify-between items-center w-full p-6 text-left bg-white hover:bg-gray-50 transition-colors"
                onClick={() => toggleAccordion(index)}
                aria-expanded={activeIndex === index}
                aria-controls={`faq-content-${index}`}
              >
                <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
                {activeIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              
              <div
                id={`faq-content-${index}`}
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 bg-white text-gray-600">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}