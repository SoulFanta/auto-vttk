// src/widgets/header/ui/Header.tsx
'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { navItems } from '../config'

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const pathname = usePathname()

  // Определяем мобильное устройство при монтировании и при изменении размера
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768) // 768px - breakpoint md в Tailwind
    }

    // Проверяем при загрузке
    checkIfMobile()

    // Добавляем обработчик изменения размера
    window.addEventListener('resize', checkIfMobile)

    // Убираем обработчик при размонтировании
    return () => window.removeEventListener('resize', checkIfMobile)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-white shadow-sm">
      <div className=" flex h-[70px] items-center justify-between px-4">
        {/* Логотип */}
        <a 
          href="/" 
          className="flex items-center gap-2.5 text-2xl font-bold text-amber-500"
          onClick={closeMenu}
        >
          <Image 
            width={50} 
            height={50} 
            alt="Логотип ВТТК" 
            src="/Icon.png" 
            priority
          />
          <span>ВТТК</span>
        </a>

        {/* Десктопное меню - показываем только на НЕ мобильных устройствах */}
        {!isMobile && (
          <nav>
            <ul className="flex flex-1 gap-6">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={clsx(
                      'font-medium text-gray-600 transition-colors hover:text-gray-800',
                      pathname === item.href && 'text-amber-500'
                    )}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}

        {/* Мобильное меню - показываем только на мобильных устройствах */}
        {isMobile && (
          <div>
            <button
              onClick={toggleMenu}
              className="text-gray-600 focus:outline-none"
              aria-label={isOpen ? 'Закрыть меню' : 'Открыть меню'}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {isOpen && (
              <div className="fixed left-0 top-[70px] w-full bg-white shadow-lg">
                <nav>
                  <ul className="flex flex-col divide-y">
                    {navItems.map((item) => (
                      <li key={item.href}>
                        <a
                          href={item.href}
                          onClick={closeMenu}
                          className={clsx(
                            'block px-6 py-4 font-medium text-gray-600 hover:bg-gray-50',
                            pathname === item.href && 'bg-amber-50 text-amber-500'
                          )}
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  )
}