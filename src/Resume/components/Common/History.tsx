import { css } from '@emotion/react';
import { BsCalendarFill, BsGeoAltFill } from 'react-icons/bs';
import { useRegister } from '@joaopmo/react-paper';

import { Icon } from './Icon.tsx';

interface HistoryProps {
  address: string;
  date: {
    start: string;
    end: string;
  };
}

export function History({ address, date }: HistoryProps) {
  const { register } = useRegister();
  return (
    <div
      {...register()}
      css={css`
        display: flex;
        gap: 2em;
      `}
    >
      <Icon icon={<BsGeoAltFill />} text={address} />
      <Icon icon={<BsCalendarFill />} text={`${date.start} - ${date.end}`} />
    </div>
  );
}
