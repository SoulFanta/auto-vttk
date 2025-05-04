'use client';

import { useEffect, useRef } from 'react';
import Inputmask from 'inputmask';

// Type declaration for Inputmask instance
interface InputMaskInstance {
  mask: (el: HTMLElement | HTMLInputElement | NodeListOf<HTMLElement | HTMLInputElement>) => void;
}

export default function ContactForm() {
  const phoneInputRef = useRef<HTMLInputElement>(null);
  const inputMaskRef = useRef<InputMaskInstance | null>(null);

  useEffect(() => {
    if (phoneInputRef.current) {
      inputMaskRef.current = new Inputmask({
        mask: '+7 (999) 999-99-99',
        showMaskOnHover: false,
        clearIncomplete: true,
        jitMasking: true
      }) as unknown as InputMaskInstance;
      
      inputMaskRef.current.mask(phoneInputRef.current);
    }

    return () => {
      if (inputMaskRef.current && phoneInputRef.current) {
        Inputmask.remove(phoneInputRef.current);
      }
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (phoneInputRef.current) {
      const isComplete = Inputmask.isValid(phoneInputRef.current.value, {
        mask: '+7 (999) 999-99-99'
      });
      
      if (!isComplete) {
        alert('Пожалуйста, введите корректный номер телефона!');
        return;
      }
    }
    
    // Form submission logic here
    console.log('Form submitted');
  };

  return (
    <div className="flex-1 border p-5 shadow-xl  rounded-2xl border-amber-400  min-w-[300px] max-w-[500px]">
      <h4 className="text-xl font-semibold text-gray-800 mb-6">Напишите нам</h4>
      <form id="contact-form" onSubmit={handleSubmit} className="space-y-5">
        <div className="space-y-2">
          <label htmlFor="name" className="block text-gray-800">Ваше имя</label>
          <input
            type="text"
            id="name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            placeholder="Введите ваше имя"
            required
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="phone" className="block text-gray-800">Телефон</label>
          <input
            ref={phoneInputRef}
            type="text"
            id="phone"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            placeholder="+7 (___) ___-__-__"
            required
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="message" className="block text-gray-800">Сообщение</label>
          <textarea
            id="message"
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            placeholder="Ваше сообщение"
            required
          ></textarea>
        </div>
        
        <button
          type="submit"
          className="bg-gradient-to-r  from-[#f9a825] to-[#fdc50d] hover:from-[#fdc50d] hover:to-[#f9a825] text-white font-medium py-3 px-6 rounded-md transition-all duration-300"
        >
          Отправить
        </button>
      </form>
    </div>
  );
}