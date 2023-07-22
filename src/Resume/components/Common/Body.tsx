import React from 'react';
import { useRegister } from '@joaopmo/react-paper';
import { css, type Theme } from '@emotion/react';

export function bodyStyle(theme: Theme) {
  return css`
    ${theme.typography.base}
    ${theme.typography.body}
    margin: 0.3em 0;
  `;
}

interface BodyProps {
  content: React.ReactNode;
}

export function Body({ content }: BodyProps) {
  const { register } = useRegister();

  return (
    <p {...register()} css={bodyStyle}>
      {content}
    </p>
  );
}
