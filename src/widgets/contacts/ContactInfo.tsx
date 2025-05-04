export default function ContactInfo() {
    return (
      <div className="flex-1 border-l-6 rounded-2xl border-amber-400 min-w-[300px] max-w-[500px] flex flex-col gap-3 shadow-xl p-5">
        <h4 className="text-xl font-semibold text-gray-800">Телефон мобильный</h4>
        <p className="text-gray-600">+7 (924) 201-14-94</p>
  
        <h4 className="text-xl font-semibold text-gray-800">Телефон стационарный</h4>
        <p className="text-gray-600">+7 (4212) 556-777 доб. 305</p>
  
        <h4 className="text-xl font-semibold text-gray-800">Электронная почта</h4>
        <p className="text-gray-600">vt-tk8@vt-tk.ru</p>
  
        <h4 className="text-xl font-semibold text-gray-800">Адрес</h4>
        <p className="text-gray-600">Россия, г. Хабаровск, ул. Льва Толстого, 12, оф. 701</p>
  
        <h4 className="text-xl font-semibold text-gray-800">Рабочие часы</h4>
        <p className="text-gray-600">Пн-Пт: 9:00 - 18:00</p>
      </div>
    );
  }