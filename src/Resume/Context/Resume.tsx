import React from 'react';
import { content } from './content.ts';

const ResumeContext = React.createContext(content);

export function useResumeContext() {
  return React.useContext(ResumeContext);
}

export function ResumeProvider({ children }: { children: React.ReactNode }) {
  return <ResumeContext.Provider value={content}>{children}</ResumeContext.Provider>;
}
