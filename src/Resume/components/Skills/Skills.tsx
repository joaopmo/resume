import { useRegister, Level, Node } from '@joaopmo/react-paper';
import { BsCircle, BsCircleFill } from 'react-icons/bs';

import { Title, Subtitle, Body } from '../Common';
import { css } from '@emotion/react';
import { useResumeContext } from '../../Context/Resume.tsx';

function Circles({ score }: { score: number }) {
  return (
    <span
      css={css`
        display: inline-flex;
        gap: 0.1rem;
      `}
    >
      {Array.from({ length: 5 }).map((_, i) => {
        return i < score ? <BsCircleFill key={i} /> : <BsCircle key={i} />;
      })}
    </span>
  );
}

interface Items {
  label: string;
  score: number | string;
}
interface ContentProps {
  title: string;
  items: Items[];
}

function Content({ title, items }: ContentProps) {
  const { register } = useRegister();

  const itemStyle = css`
    display: flex;
    align-items: center;
    margin-right: 1em;
    justify-content: space-between;
  `;

  return (
    <div
      {...register()}
      css={css`
        &:not(:last-of-type) {
          margin-bottom: 1rem;
        }
      `}
    >
      <Level>
        <Node element={<Subtitle content={title} />} />
        {items.map(({ label, score }) => {
          const item = (
            <span css={itemStyle}>
              <span>{label}</span>
              {typeof score === 'number' && <Circles score={score} />}
              {typeof score === 'string' && <span>{score}</span>}
            </span>
          );

          return <Node element={<Body content={item} />} key={label} />;
        })}
      </Level>
    </div>
  );
}

export function Skills() {
  const { register } = useRegister();
  const { skills } = useResumeContext();

  return (
    <div {...register()}>
      <Level>
        <Node element={<Title content={skills.title} />} />
        <Node element={<Content title="Idiomas" items={skills.lang} />} />;
        <Node element={<Content title="Principais Tecnologias" items={skills.tech} />} />;
      </Level>
    </div>
  );
}
