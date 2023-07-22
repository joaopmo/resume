import { useRegister } from '@joaopmo/react-paper';
import { css } from '@emotion/react';

import { useResumeContext } from '../../Context/Resume.tsx';

export function Header() {
  const { register } = useRegister();
  const { header } = useResumeContext();

  return (
    <div {...register()}>
      <h1
        css={(theme) => css`
          ${theme.typography.base}
          ${theme.typography.h1}
          margin: 0 0 0.4em 0;
        `}
      >
        {header.name.toUpperCase()}
      </h1>
      <div
        css={(theme) => css`
          h3 {
            ${theme.typography.base}
            ${theme.typography.h3}
            margin: 0;
            padding: 0.5rem 0;
            color: rgba(0, 0, 0, 0.7);
            border-top: 1px solid black;
            border-bottom: 1px solid black;
            font-weight: lighter;
          }
        `}
      >
        <h3>{header.field.toUpperCase()}</h3>
      </div>
    </div>
  );
}
