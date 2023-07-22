import { css } from '@emotion/react';
import { useRegister } from '@joaopmo/react-paper';

interface TitleProps {
  content: string;
}

export function Title({ content }: TitleProps) {
  const { register } = useRegister();

  return (
    <h2
      {...register()}
      css={(theme) => css`
        ${theme.typography.base}
        ${theme.typography.h2}
        margin: 0 0 0.8em 0;
        border-bottom: 1px solid rgba(0, 0, 0, 0.7);
      `}
    >
      {content.toUpperCase()}
    </h2>
  );
}
