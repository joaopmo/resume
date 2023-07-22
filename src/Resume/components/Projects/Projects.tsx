import { useRegister, Level, Node } from '@joaopmo/react-paper';
import { css } from '@emotion/react';

import { Body, Subtitle, Title, Link } from '../Common';
import { useResumeContext } from '../../Context/Resume.tsx';

interface ContentProps {
  label: string;
  summary: string;
  links: string[];
}
function Content({ label, summary, links }: ContentProps) {
  const { register } = useRegister();

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
        <Node element={<Subtitle content={label} />} />;
        <Node element={<Body content={summary} />} />;
        {links.map((link) => {
          return (
            <Node
              element={<Link href={`https://${link}`} content={link} decoration />}
              key={link}
            />
          );
        })}
      </Level>
    </div>
  );
}

export function Projects() {
  const { register } = useRegister();
  const { projects } = useResumeContext();

  return (
    <div {...register()}>
      <Level>
        <Node element={<Title content={projects.title} />} />
        {projects.items.map((item) => {
          return <Node element={<Content {...item} />} key={item.label} />;
        })}
      </Level>
    </div>
  );
}
