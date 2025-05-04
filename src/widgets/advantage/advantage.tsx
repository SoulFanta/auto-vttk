import { Shield, Settings, Tag } from 'lucide-react';

export default function AdvantagesSection() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Наши преимущества</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Надежность */}
          <div className="text-center p-6 rounded-lg border-amber-300 border shadow-md hover:shadow-lg transition-shadow">
            <div className="flex justify-center text-4xl text-amber-600 mb-4">
              <Shield className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Надежность</h3>
            <p className="text-gray-600">
              Мы гарантируем безопасную и надежную доставку вашего автомобиля.
            </p>
          </div>

          {/* Гибкость */}
          <div className="text-center p-6 rounded-lg border-amber-300 border shadow-md hover:shadow-lg transition-shadow">
            <div className="flex justify-center text-4xl text-amber-600 mb-4">
              <Settings className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Гибкость</h3>
            <p className="text-gray-600">
              Мы подстраиваемся под любые требования клиентов и маршруты.
            </p>
          </div>

          {/* Доступность */}
          <div className="text-center p-6 rounded-lg border-amber-300 border shadow-md hover:shadow-lg transition-shadow">
            <div className="flex justify-center text-4xl text-amber-600 mb-4">
              <Tag className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Доступность</h3>
            <p className="text-gray-600">
              Конкурентоспособные цены и быстрая доставка.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}