'use client'
import Title from '@/shared/ui/Title';
import Input from './../../../shared/ui/Input';

export default function Step4 ()  {
  
  return (
    <section className='p-5 md:grid md:grid-cols-2 gap-10'>
      <div className="">
        <div className="pb-5">
          <Title className='font-semibold' size='xl' >Шаг 1: Выберите города отправления и назначения</Title>
          <p className=''>Укажите откуда и куда нужно перевезти автомобиль</p>
        </div>
        <div className="flex  flex-col gap-4">
          <Input  label='Ваше ФИО:'/>
          <Input  label='Номер телефона:'/>
          <Input label='Email (необязательно):'/>
        </div>
      </div>
      <div className="bg-gradient-to-l animate-pulse bg-gray-300 rounded-xl"></div>
    </section>
  );
};

