import React from 'react';
import IF from '../IF';

type CustomButtonProps = {
  children: React.ReactNode;
  buttonType: 'button' | 'anchor' | 'link';
  className: string;
  size: 'small' | 'large';
  inverse?: boolean;
  danger?: boolean;
  disabled?: boolean;
  onClick?: () => void;
};

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  buttonType,
  className,
  size,
  inverse,
  danger,
  disabled,
  onClick,
}) => {
  return (
    <IF as={buttonType === 'anchor' ? 'a' : 'button'} className={className}>
      {children}
    </IF>
  );
};

export default CustomButton;
