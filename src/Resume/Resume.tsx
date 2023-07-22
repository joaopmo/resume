import { Column, Paper, Root, Header as RPHeader } from '@joaopmo/react-paper';

import { Header, Academic, Work, Summary, Contact, Skills, Projects } from './components';

export function Resume({ pageWidth = 0.7 }: { pageWidth: number }) {
  return (
    <Paper pageWidth={pageWidth}>
      <RPHeader element={<Header />} />
      <Column>
        <Root element={<Summary />} />
        <Root element={<Contact />} />
        <Root element={<Skills />} />
      </Column>
      <Column>
        <Root element={<Academic />} />
        <Root element={<Work />} />
        <Root element={<Projects />} />
      </Column>
    </Paper>
  );
}
