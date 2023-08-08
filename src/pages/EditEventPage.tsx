import { BackLink } from '../components/BackLink';
import { EventForm } from '../components/EventForm';
import { Title } from '../components/Title';
import { useEventFromId } from '../hooks/useEventFromId';

export const EditEventPage = () => {
  const event = useEventFromId();

  return (
    <div className="bg bg-cover">
      <div className="container py-10 ">
        <BackLink />
        <Title className="mb-6 xl:mb-4">Edit Event</Title>
        <EventForm event={event} />
      </div>
    </div>
  );
};
