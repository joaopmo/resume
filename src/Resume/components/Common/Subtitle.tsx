import { useRegister } from '@joaopmo/react-paper';
import { css, type Theme } from '@emotion/react';

export function subtitleStyle(theme: Theme) {
  return css`
    ${theme.typography.base}
    ${theme.typography.h3}
    margin: 0 0 0.4em 0;
    font-style: italic;
  `;
}

interface SubtitleProps {
  content: string;
  variant?: 'h3' | 'h4';
}
export function Subtitle({ content, variant = 'h3' }: SubtitleProps) {
  const { register } = useRegister();

  if (variant === 'h3') {
    return (
      <h3
        {...register()}
        css={(theme) => css`
          ${theme.typography.base}
          ${theme.typography.h3}
          margin: 0 0 0.4em 0;
          font-style: italic;
        `}
      >
        {content}
      </h3>
    );
  }

  return (
    <h4
      {...register()}
      css={(theme) => css`
        ${theme.typography.base}
        ${theme.typography.h4}
        margin: 0 0 0.4em 0;
      `}
    >
      {content}
    </h4>
  );
}
