import { BackLink } from '../components/BackLink';
import { EventDetails } from '../components/EventDetails';
import { Title } from '../components/Title';
import { useEventFromId } from '../hooks/useEventFromId';

export const EventPage = () => {
  const event = useEventFromId();

  return (
    <div className="bg bg-cover">
      <div className="container py-10">
        <BackLink />
        {event && (
          <div className="mx-auto xl:max-w-[688px]">
            <Title className="mb-6 xl:mb-4">{event.title}</Title>
            <EventDetails event={event} />
          </div>
        )}
      </div>
    </div>
  );
};
