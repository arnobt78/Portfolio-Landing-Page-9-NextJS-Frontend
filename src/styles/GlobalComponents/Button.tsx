'use client';

import { ButtonBack, ButtonFront } from './index';

interface ButtonProps {
  children: React.ReactNode;
  alt?: boolean;
  form?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

export default function Button({ children, alt, form, disabled, onClick }: ButtonProps) {
  return (
    <ButtonBack alt={alt} form={form} disabled={disabled}>
      {children}
      <ButtonFront alt={alt} onClick={onClick} disabled={disabled}>
        {children}
      </ButtonFront>
    </ButtonBack>
  );
}
