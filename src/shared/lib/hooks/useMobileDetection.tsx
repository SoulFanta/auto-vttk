import { useState, useEffect } from 'react';

const useMobileDetection = (breakpoint = 768) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    // Проверяем сразу при загрузке
    checkIfMobile();

    // Добавляем обработчик изменения размера
    window.addEventListener('resize', checkIfMobile);

    // Убираем обработчик при размонтировании
    return () => window.removeEventListener('resize', checkIfMobile);
  }, [breakpoint]); // Зависимость от breakpoint на случай его изменения

  return isMobile;
};

export default useMobileDetection;