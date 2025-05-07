import clsx from 'clsx';
import { HTMLAttributes, ReactNode, forwardRef } from 'react';

interface ITitle extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
  size?: 'xl' | '2xl' | 'lg' | '3xl';
  outline?: boolean;
}

const sizeClasses = {
  'lg': 'text-lg',
  'xl': 'sm:text-sm md:text-xl lg:text-xl',
  '2xl': 'sm:text-lg md:text-2xl lg:text-2xl',
  '3xl' : 'sm:text-2xl md:text-2xl lg:text-3xl'
};

const Title = forwardRef<HTMLParagraphElement, ITitle>(
  ({ className, size = 'lg', outline, children, ...props }, ref) => {
    return (
      <div className="flex relative flex-col-reverse gap-2 w-full">
        <p
          ref={ref}
          className={clsx(
            'font-medium  text-gray-700',
            sizeClasses[size],
            className
          )}
          {...props}
        >
          {children}
        </p>
        {outline && (
          <span className="w-25 h-1 bg-gradient-to-r from-amber-500 to-amber-300"></span>
        )}
      </div>
    );
  }
);

Title.displayName = 'Title'; // Fixed display name (was 'Input')

export default Title;