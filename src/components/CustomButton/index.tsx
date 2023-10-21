import React from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import style from './CustomButton.module.scss';

type CustomButtonProps = {
  children: React.ReactNode;
  buttonType: 'button' | 'anchor' | 'link';
  type?: 'button' | 'submit' | 'reset';
  size?: 'small' | 'large';
  href: string;
  inverse?: boolean;
  danger?: boolean;
  disabled?: boolean;
  onClick?: () => void;
};

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  buttonType,
  type,
  href,
  size,
  inverse,
  danger,
  disabled,
  onClick,
}) => {
  switch (buttonType) {
    case 'link':
      return (
        <Link
          href={href}
          className={classNames(
            style.root,
            size === 'small' && style.buttonSmall,
            size === 'large' && style.buttonLarge,
            inverse && style.buttonInverse,
            danger && style.buttonDanger,
          )}
        >
          {children}
        </Link>
      );
    case 'anchor':
      return (
        <a
          href={href}
          className={classNames(
            style.root,
            size === 'small' && style.buttonSmall,
            size === 'large' && style.buttonLarge,
            inverse && style.buttonInverse,
            danger && style.buttonDanger,
          )}
        >
          {children}
        </a>
      );
    case 'button':
    default:
      return (
        <button
          className={classNames(
            style.root,
            size === 'small' && style.buttonSmall,
            size === 'large' && style.buttonLarge,
            inverse && style.buttonInverse,
            danger && style.buttonDanger,
          )}
          type={type}
          onClick={onClick}
          disabled={disabled}
        >
          {children}
        </button>
      );
  }
};

export default CustomButton;
