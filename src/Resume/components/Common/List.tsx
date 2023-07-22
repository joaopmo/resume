import { Level, Node, useRegister } from '@joaopmo/react-paper';
import { css } from '@emotion/react';

function Item({ content }: { content: string }) {
  const { register } = useRegister();

  return (
    <li
      {...register()}
      css={(theme) => css`
        ${theme.typography.base}
      `}
    >
      {content}
    </li>
  );
}

export function List({ items }: { items: string[] }) {
  const { register } = useRegister();
  return (
    <ul
      {...register()}
      css={(theme) => css`
        ${theme.typography.base}
        ${theme.typography.body}
        margin: 0.3em 0;
        padding-left: 1em;
        list-style-position: inside;
      `}
    >
      <Level>
        {items.map((item) => {
          return <Node element={<Item content={item} />} key={item} />;
        })}
      </Level>
    </ul>
  );
}
