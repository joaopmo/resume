import React from 'react';
import { css } from '@emotion/react';
import { useRegister } from '@joaopmo/react-paper';

interface LinkProps {
  href: string;
  content: React.ReactNode;
  decoration?: boolean;
}
export function Link({ href, content, decoration = false }: LinkProps) {
  const { register } = useRegister();

  return (
    <p
      {...register()}
      css={(theme) => css`
        ${theme.typography.base}
        ${theme.typography.body}
        font-weight: normal;
        margin: 0.3em 0;
        a {
          color: black;
          text-decoration: ${decoration ? 'underline' : 'none'};
        }
        a:hover {
          text-decoration: underline;
        }
      `}
    >
      <a href={href} target="_blank" rel="noreferrer">
        {content}
      </a>
    </p>
  );
}
