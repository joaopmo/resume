import { Experience } from './Experience.tsx';
import { useResumeContext } from '../../Context/Resume.tsx';

export function Academic() {
  const { education } = useResumeContext();
  return <Experience title={education.title} items={education.items} />;
}
