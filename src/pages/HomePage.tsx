import { useState } from 'react';
import { Button } from '../components/Button';
import { EventCard } from '../components/EventCard';
import { Filter } from '../components/Filter';
import { Title } from '../components/Title';
import { CATEGORIES, CATEGORY_ALL, INITIAL_EVENTS } from '../constants';

export const HomePage = () => {
  const [events] = useState(INITIAL_EVENTS);
  console.log('🚧 events:', events);

  return (
    <>
      <div className="container py-10">
        <div>
          <div className="mb-10 flex justify-end gap-6 md:mb-5 xl:mb-10">
            <Title className="hidden xl:mr-auto xl:block">My events</Title>
            <Filter
              className="md:min-w-[146px]"
              value={CATEGORY_ALL}
              noneOption={CATEGORY_ALL}
              options={CATEGORIES}
              icon="filters-3"
              placeholder="Category"
            />
            <Button size="lg" icon="plus">
              Add new event
            </Button>
          </div>
          <Title className="mb-5 hidden md:block xl:hidden">My events</Title>
        </div>

        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {events.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </ul>
      </div>
    </>
  );
};
