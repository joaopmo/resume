import React from 'react';
import { css } from '@emotion/react';

interface ButtonProps {
  children: string;
  onClick?: () => void;
  icon?: React.ReactNode;
}

export function Button({ icon, children, onClick }: ButtonProps) {
  return (
    <button
      css={(theme) => css`
        ${theme.typography.base}
        background-color: ${theme.color.secondary};
        border-radius: 0.5rem;
        border-style: none;
        color: #ffffff;
        cursor: pointer;
        display: flex;
        align-items: center;
        height: 2.2em;
        margin: 0;
        outline: none;
        padding: 1.2em 0.8em;
        transition: opacity 100ms;
        user-select: none;

        &:hover {
          opacity: 0.7;
        }

        svg {
          margin-right: 0.5em;
        }
      `}
      onClick={onClick}
    >
      {icon}
      <span>{children.toUpperCase()}</span>
    </button>
  );
}
