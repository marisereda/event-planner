import { useState } from 'react';
import { BackLink } from '../components/BackLink';
import { EventDetails } from '../components/EventDetails';
import { Title } from '../components/Title';
import { INITIAL_EVENTS } from '../constants';

export const EventPage = () => {
  const [event] = useState(INITIAL_EVENTS[0]);
  return (
    <div className="bg bg-cover">
      <div className="container py-10">
        <BackLink />
        <div className="mx-auto xl:max-w-[688px]">
          <Title className="mb-6 xl:mb-4">Galery Opening</Title>
          <EventDetails event={event} />
        </div>
      </div>
    </div>
  );
};
