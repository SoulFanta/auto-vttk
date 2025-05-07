'use client'
import ProgressBar from "./progress-bar";

export default function TransportForm ()  {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // Отключаем стандартное поведение формы
        // Ваша логика обработки формы
        console.log('Форма отправлена без перезагрузки страницы');
      };

  return (
    <section></section>
  );
};

