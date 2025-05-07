import Link from 'next/link';
import { ButtonHTMLAttributes, AnchorHTMLAttributes, forwardRef, ReactNode } from 'react';
import clsx from 'clsx';

type ButtonVariant = 'solid' | 'outline' | 'gradient';
type ButtonSize = 'sm' | 'md' | 'lg';

interface BaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, BaseProps {
  as?: 'button';
}

interface LinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>, BaseProps {
  as: 'link';
  href: string;
}

type GradientButtonProps = (ButtonProps | LinkProps) & {
  children: ReactNode;
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'py-2 px-4 text-sm',
  md: 'py-2.5 px-5 text-base',
  lg: 'py-3 px-6 text-lg',
};

const variantClasses: Record<ButtonVariant, string> = {
  solid: 'bg-amber-500 text-white hover:bg-amber-600 border border-transparent',
  outline: 'bg-transparent text-amber-600 hover:text-amber-700 border border-amber-500 hover:border-amber-600',
  gradient: 'bg-gradient-to-r  from-[#fdc50d] to-[#f9a825] hover:from-[#f9a825] hover:to-[#fdc50d] text-white border border-transparent',
};

const GradientButton = forwardRef<HTMLButtonElement | HTMLAnchorElement, GradientButtonProps>(
  ({ variant = 'gradient', size = 'md', className, children, ...props }, ref) => {
    const baseClasses = clsx(
      'inline-block font-medium rounded transition-colors transition-all duration-300 transition' ,
      'hover:-translate-y-0.5 hover:shadow-md',
      'focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50',
      'active:translate-y-0 active:shadow-none',
      sizeClasses[size],
      variantClasses[variant],
      className
    );

    if (props.as === 'link') {
      const { as, href, ...rest } = props;
      return (
        <Link href={href} className={baseClasses} ref={ref as React.Ref<HTMLAnchorElement>} {...rest}>
          {children}
        </Link>
      );
    }

    const { as, ...rest } = props;
    return (
      <button className={baseClasses} ref={ref as React.Ref<HTMLButtonElement>} {...rest}>
        {children}
      </button>
    );
  }
);

GradientButton.displayName = 'GradientButton';

export default GradientButton;