import { SelectHTMLAttributes, forwardRef, ReactNode } from 'react';
import clsx from 'clsx';

type SelectSizeVariant = 'sm' | 'md' | 'lg'; // Renamed to avoid conflict
type SelectVariant = 'outline' | 'filled' | 'ghost';

interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  sizeVariant?: SelectSizeVariant; // Changed from 'size' to 'sizeVariant'
  variant?: SelectVariant;
  label?: string;
  error?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  fullWidth?: boolean;
}

const sizeClasses: Record<SelectSizeVariant, string> = {
  sm: 'py-1.5 px-3 text-sm',
  md: 'py-2 px-4 text-base',
  lg: 'py-3 px-5 text-lg',
};

const variantClasses: Record<SelectVariant, string> = {
  outline: 'bg-white border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200',
  filled: 'bg-gray-50 border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200',
  ghost: 'bg-transparent border-none focus:ring-2 focus:ring-primary-200',
};

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      className,
      sizeVariant = 'md', // Changed from 'size' to 'sizeVariant'
      variant = 'outline',
      label,
      error,
      leftIcon,
      rightIcon,
      fullWidth = true,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div className={clsx('flex flex-col gap-1', fullWidth && 'w-full')}>
        {label && (
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
            {label}
          </label>
        )}

        <div className="relative">
          {leftIcon && (
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
              {leftIcon}
            </div>
          )}

          <select
            ref={ref}
            className={clsx(
              'appearance-none block w-full rounded-md shadow-sm transition-all duration-150',
              'text-gray-900 dark:text-white dark:bg-gray-800',
              'focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed',
              sizeClasses[sizeVariant], // Changed here
              variantClasses[variant],
              leftIcon && 'pl-10',
              rightIcon && 'pr-10',
              error && 'border-red-500 focus:border-red-500 focus:ring-red-200',
              className
            )}
            {...props}
          >
            {children}
          </select>

          {rightIcon ? (
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400">
              {rightIcon}
            </div>
          ) : (
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          )}
        </div>

        {error && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-500">{error}</p>
        )}
      </div>
    );
  }
);

Select.displayName = 'Select';

interface OptionProps extends React.OptionHTMLAttributes<HTMLOptionElement> {
  value: string | number;
  children: ReactNode;
}

const Option = ({ children, ...props }: OptionProps) => {
  return <option {...props}>{children}</option>;
};

Option.displayName = 'Option';

export { Select, Option };