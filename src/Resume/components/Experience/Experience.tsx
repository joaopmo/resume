import { Level, Node, useRegister } from '@joaopmo/react-paper';
import { Body, History, Subtitle, Title, List } from '../Common';
import React from 'react';

interface HeaderProps {
  label: string;
  entity: string;
  address: string;
  date: {
    start: string;
    end: string;
  };
}
function Header({ label, entity, address, date }: HeaderProps) {
  const { register } = useRegister();

  return (
    <div {...register()}>
      <Level>
        <Node element={<Subtitle content={label} />} />
        <Node element={<Subtitle content={entity} variant="h4" />} />
        <Node element={<History address={address} date={date} />} />
      </Level>
    </div>
  );
}

interface Item extends HeaderProps {
  summary?: string;
  activities?: string[];
}

interface ExperienceProps {
  title: string;
  items: Item[];
}

export function Experience({ title, items }: ExperienceProps) {
  const { register } = useRegister();
  return (
    <div {...register()}>
      <Level>
        <Node element={<Title content={title} />} />
        {items.map(({ summary, activities, ...item }) => {
          const summaryBody = (
            <>
              <strong>Descrição: </strong>
              {summary}
            </>
          );
          return (
            <React.Fragment key={item.label}>
              <Node element={<Header {...item} />} content="block" />
              {summary != null && <Node element={<Body content={summaryBody} />} />}
              {activities != null && (
                <>
                  <Node element={<Body content="Atividades desempenhadas:" />} />
                  <Node element={<List items={activities} />} />
                </>
              )}
            </React.Fragment>
          );
        })}
      </Level>
    </div>
  );
}
