import React from 'react';
import { css } from '@emotion/react';
import { useRegister } from '@joaopmo/react-paper';

interface IconProps {
  icon: React.ReactNode;
  text: React.ReactNode;
}

export function Icon({ icon, text }: IconProps) {
  const { register } = useRegister();
  return (
    <p
      {...register()}
      css={(theme) => css`
        ${theme.typography.base}
        ${theme.typography.h4}  
        font-weight: normal;
        display: flex;
        align-items: center;
        margin: 0.3em 0;

        svg {
          margin-right: 0.5rem;
        }
      `}
    >
      {icon}
      <span>{text}</span>
    </p>
  );
}
