import { Experience } from './Experience.tsx';
import { useResumeContext } from '../../Context/Resume.tsx';

export function Work() {
  const { work } = useResumeContext();

  return <Experience title={work.title} items={work.items} />;
}
