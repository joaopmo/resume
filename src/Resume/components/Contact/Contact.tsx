import { useRegister, Level, Node } from '@joaopmo/react-paper';
import { BsGeoAltFill } from 'react-icons/bs';
import { css } from '@emotion/react';

import { Title, Icon, Link } from '../Common';
import { useResumeContext } from '../../Context/Resume.tsx';

export function Contact() {
  const { register } = useRegister();
  const { contact } = useResumeContext();

  return (
    <div
      {...register()}
      css={css`
        p:first-of-type {
          margin-bottom: 1em;
        }
      `}
    >
      <Level>
        <Node element={<Title content={contact.title} />} />
        {contact.items.map(({ href, label }) => {
          return href == null ? (
            <Node element={<Icon icon={<BsGeoAltFill />} text={label} />} key={label} />
          ) : (
            <Node element={<Link href={`${href}${label}`} content={label} />} key={label} />
          );
        })}
      </Level>
    </div>
  );
}
