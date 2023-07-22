import { useRegister, Level, Node } from '@joaopmo/react-paper';

import { Title, Body } from '../Common';
import { useResumeContext } from '../../Context/Resume.tsx';

export function Summary() {
  const { register } = useRegister();
  const { summary } = useResumeContext();
  return (
    <div {...register()}>
      <Level>
        <Node element={<Title content={summary.title} />} />
        {summary.items.map((item) => {
          return <Node element={<Body content={item} />} key={item} />;
        })}
      </Level>
    </div>
  );
}
